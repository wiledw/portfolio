import * as THREE from 'three'
import { C, mat, rbox, cyl, sphere, cone, fromGeo, put, textTexture, panel, bakeStatic, bentSlab, GLOW, SWAY, HANG, mergeColored, vcToon, addHull } from './kit.js'
import { mix, shade } from './palette.js'
import { sample, groundHeight, heightAt, canStand, buildTerrain, buildWater, distToPolyline, sstep, route, PATHS, STREAM, PADDIES, PLATFORM, TRACK, BRIDGE, PLAY, MESH, PADS } from './terrain.js'
import { rng, makeNoise, poissonDisc } from './noise.js'
import { toonMaterial, U } from './toon.js'
import { ABOUT, CONTACT, CAT, KAYA, ANU, KURO, FEATURED, HACKATHONS, CAREER, SKILLS, BOARD, EXIT, SIGNPOST } from './content.js'

const gh = groundHeight
const N = makeNoise(5)

// Interaction spots sit on the street's edge, so walking the street brings
// up each prompt in turn.
const NORTH_EDGE = -1.05
const SOUTH_EDGE = 1.6

export function buildWorld({ reducedMotion = false } = {}) {
  const staticRoot = new THREE.Group()
  const dynamicRoot = new THREE.Group()
  const colliders = []
  const ao = []
  const keepClear = []
  const interactables = []
  const updaters = []
  const random = rng(20261106)
  const R = (a, b) => a + random() * (b - a)

  const circle = (x, z, r) => colliders.push({ type: 'circle', x, z, r })
  const box = (minX, maxX, minZ, maxZ) => colliders.push({ type: 'box', minX, maxX, minZ, maxZ })
  const seg = (x1, z1, x2, z2, r = 0.18) => colliders.push({ type: 'seg', x1, z1, x2, z2, r })
  const blob = (x, z, r, k = 0.32) => ao.push({ x, z, r, k })
  const clear = (x, z, r) => keepClear.push({ x, z, r })
  const blocked = (x, z, m = 0) => keepClear.some((c) => (x - c.x) ** 2 + (z - c.z) ** 2 < (c.r + m) ** 2)
  const isNearPath = (x, z, m) => PATHS.some((p) => distToPolyline(x, z, p.pts).d < p.hw + m)

  function at(x, z, ry = 0, parent = staticRoot) {
    const g = new THREE.Group()
    g.position.set(x, gh(x, z), z)
    g.rotation.y = ry
    parent.add(g)
    return g
  }

  // ===================================================== interactable kit
  const sparkleTex = (() => {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const x = c.getContext('2d')
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,252,236,1)')
    g.addColorStop(0.25, 'rgba(255,232,180,0.85)')
    g.addColorStop(1, 'rgba(255,220,150,0)')
    x.fillStyle = g
    x.fillRect(0, 0, 64, 64)
    x.fillStyle = '#fff'
    x.beginPath()
    x.moveTo(32, 2)
    x.quadraticCurveTo(35, 29, 62, 32)
    x.quadraticCurveTo(35, 35, 32, 62)
    x.quadraticCurveTo(29, 35, 2, 32)
    x.quadraticCurveTo(29, 29, 32, 2)
    x.fill()
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })()
  const sparkleMat = new THREE.SpriteMaterial({ map: sparkleTex, transparent: true, depthWrite: false, fog: false })

  /** `x, z` is where you stand to interact; `sx, sz` (optional) is where the sparkle floats. */
  function interactable({ id, name, label, plateRange, verb = 'Look', x, z, sx, sz, height = 2.4, radius = 1.8, entry, counts = true, onInteract, anchor }) {
    const pos = anchor || new THREE.Vector3(x, heightAt(x, z), z)
    const spot = anchor ? null : new THREE.Vector3(sx ?? x, heightAt(sx ?? x, sz ?? z), sz ?? z)
    const sparkle = new THREE.Sprite(sparkleMat)
    sparkle.scale.setScalar(0.5)
    sparkle.renderOrder = 5
    dynamicRoot.add(sparkle)
    const it = { id, name, label: label || name, plateRange, verb, pos, spot, height, radius, entry, counts, onInteract, sparkle, discovered: false, phase: random() * 6 }
    interactables.push(it)
    return it
  }
  updaters.push(({ t }) => {
    for (const it of interactables) {
      const s = it.sparkle
      if (!s.visible) continue
      const p = it.spot || it.pos
      s.position.set(p.x, p.y + it.height + Math.sin(t * 2.4 + it.phase) * 0.12, p.z)
      s.scale.setScalar(0.48 + Math.sin(t * 3 + it.phase) * 0.07)
    }
  })

  // ============================================================ PROPS
  function stoneLantern(x, z, s = 1) {
    const g = at(x, z, R(-0.1, 0.1))
    put(g, rbox(0.8 * s, 0.2 * s, 0.8 * s, C.stoneDark, 0.06), 0, 0.1 * s, 0)
    put(g, cyl(0.13 * s, 0.19 * s, 0.75 * s, C.stone, 7), 0, 0.57 * s, 0)
    put(g, rbox(0.62 * s, 0.14 * s, 0.62 * s, C.stone, 0.05), 0, 1.0 * s, 0)
    put(g, rbox(0.42 * s, 0.38 * s, 0.42 * s, C.glow, 0.05, GLOW), 0, 1.26 * s, 0)
    put(g, cone(0.6 * s, 0.4 * s, C.stone, 4), 0, 1.65 * s, 0, Math.PI / 4)
    put(g, sphere(0.09 * s, C.stoneDark, 0), 0, 1.92 * s, 0)
    circle(x, z, 0.45 * s)
    blob(x, z, 0.9 * s, 0.25)
    clear(x, z, 0.7)
    return g
  }

  function cedar(x, z, s = 1) {
    const g = at(x, z, R(0, 6.28))
    g.rotation.x = R(-0.04, 0.04)
    g.rotation.z = R(-0.04, 0.04)
    const trunkH = 1.5 * s
    put(g, cyl(0.12 * s, 0.24 * s, trunkH + 2.6 * s, C.woodDark, 6), 0, (trunkH + 2.6 * s) / 2, 0)
    for (let i = 0; i < 4; i++) {
      const k = 1 - i / 4
      const r = (0.55 + 0.85 * k) * s * R(0.9, 1.1)
      const h = (1.3 + 0.4 * k) * s
      put(g, cone(r, h, i % 2 ? C.cedar : C.leaf, 7, SWAY), R(-0.08, 0.08) * s, trunkH + i * s + h / 2, R(-0.08, 0.08) * s, R(0, 3))
    }
    circle(x, z, 0.35 * s)
    blob(x, z, 1.5 * s, 0.22)
    clear(x, z, 0.6 * s)
  }

  function broadleaf(x, z, s = 1) {
    const g = at(x, z, R(0, 6.28))
    put(g, cyl(0.15 * s, 0.26 * s, 2.0 * s, C.woodDark, 7), 0, 1.0 * s, 0, 0, R(-0.08, 0.08), R(-0.08, 0.08))
    put(g, cyl(0.07 * s, 0.11 * s, 1.1 * s, C.woodDark, 6), 0.35 * s, 1.95 * s, 0, 0, 0, -0.65)
    const blobs = [[0, 2.75, 0, 1.15], [0.95, 2.45, 0.25, 0.85], [-0.85, 2.5, 0.3, 0.9], [0.2, 2.5, -0.85, 0.85], [-0.25, 3.4, 0.1, 0.75], [0.55, 3.15, 0.55, 0.6]]
    blobs.forEach(([bx, by, bz, br], i) => {
      const m = sphere(br * s * R(0.88, 1.12), i % 3 === 1 ? C.leafLight : C.leaf, 1, SWAY)
      m.scale.y = R(0.78, 0.95)
      put(g, m, bx * s, by * s, bz * s, R(0, 3))
    })
    circle(x, z, 0.35 * s)
    blob(x, z, 2.2 * s, 0.3)
    clear(x, z, 0.8 * s)
  }

  function hydrangea(x, z, s = 1) {
    const g = at(x, z, R(0, 6.28))
    put(g, sphere(0.55 * s, C.leaf, 1, SWAY), 0, 0.38 * s, 0).scale.y = 0.75
    const n = 4 + Math.floor(random() * 3)
    const pink = random() > 0.6
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + R(-0.3, 0.3)
      const col = pink ? (i % 2 ? C.hydrangeaPink : mix(C.hydrangeaPink, C.plaster, 0.3)) : i % 2 ? C.hydrangeaBlue : mix(C.hydrangeaBlue, C.hydrangeaPink, 0.35)
      put(g, sphere(R(0.18, 0.24) * s, col, 1, SWAY), Math.cos(a) * 0.38 * s, R(0.55, 0.75) * s, Math.sin(a) * 0.38 * s)
    }
    circle(x, z, 0.5 * s)
    blob(x, z, 0.9 * s, 0.22)
    clear(x, z, 0.7 * s)
  }

  function bush(x, z, s = 1) {
    const g = at(x, z, R(0, 6.28))
    put(g, sphere(0.62 * s, C.leaf, 1, SWAY), 0, 0.42 * s, 0).scale.y = 0.72
    put(g, sphere(0.42 * s, C.leafLight, 1, SWAY), 0.32 * s, 0.6 * s, 0.1 * s).scale.y = 0.8
    circle(x, z, 0.55 * s)
    blob(x, z, 1.0 * s, 0.22)
    clear(x, z, 0.7 * s)
  }

  function rock(x, z, s = 1, solid = true) {
    const g = at(x, z, R(0, 6.28))
    const r = sphere(0.5 * s, random() > 0.5 ? C.stone : C.stoneDark, 0)
    r.scale.set(R(0.9, 1.25), R(0.45, 0.7), R(0.8, 1.05))
    put(g, r, 0, 0.12 * s, 0, 0, R(-0.2, 0.2), R(-0.2, 0.2))
    if (solid && s > 0.7) circle(x, z, 0.42 * s)
    blob(x, z, 0.8 * s, 0.2)
    clear(x, z, 0.55 * s)
  }

  function bambooClump(x, z) {
    const g = at(x, z)
    const n = 6 + Math.floor(random() * 4)
    for (let i = 0; i < n; i++) {
      const bx = R(-0.8, 0.8)
      const bz = R(-0.8, 0.8)
      const h = R(3.4, 5.4)
      const lx = R(-0.08, 0.08)
      const lz = R(-0.08, 0.08)
      put(g, cyl(0.07, 0.085, h, mix(C.grass, C.plaster, 0.15), 6), bx, h / 2, bz, 0, lx, lz)
      for (let y = 0.8; y < h - 0.3; y += R(0.75, 1.0)) put(g, cyl(0.09, 0.09, 0.05, C.moss, 6), bx - lz * y, y, bz + lx * y)
      for (let l = 0; l < 3; l++) put(g, cone(0.32, 0.95, l % 2 ? C.leafLight : C.grass, 4, SWAY), bx + R(-0.3, 0.3), h - R(0.1, 0.9), bz + R(-0.3, 0.3), R(0, 3), R(-0.5, 0.5), R(-1.2, 1.2))
    }
    circle(x, z, 0.95)
    blob(x, z, 1.6, 0.25)
    clear(x, z, 1.2)
  }

  /** A fence that has settled over the years: posts lean, heights differ. */
  function fence(x1, z1, x2, z2) {
    const len = Math.hypot(x2 - x1, z2 - z1)
    const n = Math.max(1, Math.round(len / 1.25))
    const ang = Math.atan2(z2 - z1, x2 - x1)
    for (let i = 0; i <= n; i++) {
      const t = i / n
      const x = x1 + (x2 - x1) * t
      const z = z1 + (z2 - z1) * t
      const h = R(0.85, 1.05)
      put(staticRoot, rbox(0.17, h, 0.17, C.wood, 0.05), x, gh(x, z) + h / 2 - 0.05, z, R(0, 1), R(-0.07, 0.07), R(-0.07, 0.07))
    }
    for (const y of [0.42, 0.78]) {
      const ya = gh(x1, z1) + y + R(-0.04, 0.04)
      const yb = gh(x2, z2) + y + R(-0.04, 0.04)
      put(staticRoot, rbox(len + 0.1, 0.1, 0.07, C.woodLight, 0.03), (x1 + x2) / 2, (ya + yb) / 2, (z1 + z2) / 2, -ang, 0, Math.atan2(yb - ya, len))
    }
    seg(x1, z1, x2, z2, 0.2)
  }

  function lampPost(x, z) {
    const g = at(x, z)
    put(g, rbox(0.16, 2.2, 0.16, C.woodDark, 0.04), 0, 1.1, 0, 0, R(-0.03, 0.03), R(-0.03, 0.03))
    put(g, rbox(0.7, 0.1, 0.12, C.woodDark, 0.03), 0.22, 2.15, 0)
    put(g, rbox(0.3, 0.42, 0.3, C.paper, 0.05, GLOW), 0.48, 1.85, 0)
    put(g, rbox(0.38, 0.08, 0.38, C.ink, 0.03), 0.48, 2.08, 0)
    circle(x, z, 0.2)
    blob(x, z, 0.6, 0.2)
  }

  function signpost(x, z, lines, { ry = 0, w = 1.8, h = 0.75, y = 1.3, arrow = 0 } = {}) {
    const g = at(x, z, ry)
    put(g, rbox(0.15, y + h / 2, 0.15, C.woodDark, 0.04), 0, (y + h / 2) / 2, -0.14, 0, 0, R(-0.03, 0.03))
    put(g, rbox(w, h, 0.12, C.woodPale, 0.06), arrow * 0.12, y, 0)
    if (arrow) put(g, cone(h * 0.6, 0.4, C.woodPale, 4), arrow * (w / 2 + 0.1), y, 0, 0, 0, (-arrow * Math.PI) / 2).scale.set(1, 1, 0.22)
    const tex = textTexture(lines, { width: 512, height: Math.round(512 * (h / w)), size: lines.length > 2 ? 40 : lines.length > 1 ? 52 : 68 })
    put(g, panel(w - 0.12, h - 0.1, tex), arrow * 0.12, y, 0.065)
    circle(x, z, 0.28)
    clear(x, z, 0.6)
    return g
  }

  /** A post with one pointed board per direction, stacked, each pointing the way it names. */
  function fingerpost(x, z, boards) {
    const g = at(x, z)
    const H = 0.62 // board height
    const GAP = 0.16
    const top = 2.6
    put(g, rbox(0.16, top + 0.25, 0.16, C.woodDark, 0.04), 0, (top + 0.25) / 2, -0.12, 0, 0, R(-0.02, 0.02))
    put(g, cone(0.14, 0.18, C.woodDark, 4), 0, top + 0.34, -0.12, Math.PI / 4) // little cap
    boards.forEach(({ text, dir }, i) => {
      const y = top - H / 2 - i * (H + GAP)
      const w = dir ? 3.0 : 2.0
      // a pointed board reaches out from the post; the straight-ahead one sits centred
      const cx = dir * (w / 2 - 0.25)
      const tilt = dir ? R(-0.03, 0.03) : 0
      const b = new THREE.Group()
      b.position.set(cx, y, 0)
      b.rotation.z = tilt
      g.add(b)
      put(b, rbox(w, H, 0.1, C.woodPale, 0.05), 0, 0, 0)
      if (dir) put(b, cone(H * 0.62, 0.32, C.woodPale, 4), dir * (w / 2 + 0.1), 0, 0, 0, 0, (-dir * Math.PI) / 2).scale.set(1, 1, 0.23)
      const tex = textTexture([dir < 0 ? `←  ${text}` : dir > 0 ? `${text}  →` : text], { width: Math.round(256 * w), height: Math.round(256 * H), size: 84 })
      put(b, panel(w - 0.1, H - 0.08, tex), 0, 0, 0.055)
    })
    circle(x, z, 0.28)
    clear(x, z, 1.4)
  }

  function gableBuilding(g, W, D, { wall = C.plaster, roof = C.roof, wallH = 2.6, pitch = 0.55, overhang = 0.6, sag = 0.07, flare = 0.22 } = {}) {
    const bend = { sag, flare }
    put(g, rbox(W + 0.4, 0.5, D + 0.4, C.stone, 0.12), 0, 0.25, 0)
    put(g, rbox(W, wallH, D, wall, 0.1), 0, 0.5 + wallH / 2, 0)
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) put(g, rbox(0.26, wallH + 0.05, 0.26, C.woodDark, 0.06), sx * (W / 2 - 0.04), 0.5 + wallH / 2, sz * (D / 2 - 0.04))
    put(g, rbox(W + 0.1, 0.2, D + 0.1, C.woodDark, 0.05), 0, 0.5 + wallH, 0)
    const top = 0.5 + wallH + 0.1
    const ridge = top + (D / 2) * Math.tan(pitch)
    const slabLen = D / 2 / Math.cos(pitch) + overhang
    for (const side of [1, -1]) {
      const slab = new THREE.Group()
      put(slab, bentSlab(W + overhang * 2, 0.24, slabLen, roof, bend), 0, 0, 0)
      const rows = Math.max(3, Math.round(slabLen / 0.42))
      for (let r = 0; r < rows; r++) put(slab, bentSlab(W + overhang * 2 + 0.04, 0.09, 0.16, C.roofDark, bend), 0, 0.14, -slabLen / 2 + 0.3 + r * ((slabLen - 0.45) / (rows - 1)))
      slab.position.set(0, (ridge + top) / 2 + 0.08 - (overhang / 2) * Math.sin(pitch), (side * D) / 4 + side * (overhang / 2) * Math.cos(pitch))
      slab.rotation.x = side * pitch
      g.add(slab)
    }
    put(g, bentSlab(W + overhang * 2 + 0.1, 0.26, 0.4, C.roofDark, bend), 0, ridge + 0.28, 0)
    for (const sx of [-1, 1]) put(g, rbox(0.5, 0.42, 0.5, C.roofDark, 0.12), sx * (W / 2 + overhang), ridge + 0.36 + flare, 0, 0, 0, sx * -0.2) // onigawara end tiles
    const tri = new THREE.Shape()
    tri.moveTo(-D / 2, 0)
    tri.lineTo(D / 2, 0)
    tri.lineTo(0, ridge - top)
    tri.closePath()
    const triGeo = new THREE.ExtrudeGeometry(tri, { depth: 0.16, bevelEnabled: false })
    for (const sx of [-1, 1]) put(g, fromGeo(triGeo, wall), sx * (W / 2) + (sx > 0 ? 0 : 0.16), top - 0.02, 0, -Math.PI / 2)
    return { top, ridge }
  }

  function paperWindow(g, x, y, z, w = 1.2, h = 0.9) {
    put(g, rbox(w + 0.16, h + 0.16, 0.14, C.woodDark, 0.04), x, y, z)
    put(g, rbox(w, h, 0.1, C.paper, 0.03, GLOW), x, y, z + 0.04)
    for (let i = 1; i < 3; i++) put(g, rbox(0.035, h, 0.12, C.woodDark, 0.01), x - w / 2 + (w / 3) * i, y, z + 0.05)
    put(g, rbox(w, 0.035, 0.12, C.woodDark, 0.01), x, y, z + 0.05)
  }

  // ============================================================ HOUSE (About)
  {
    const x = -10
    const z = -6.1
    const g = at(x, z)
    gableBuilding(g, 9, 5.4, { wallH: 2.7 })
    const fz = 2.75
    put(g, rbox(9.4, 0.14, 1.1, C.woodLight, 0.04), 0, 0.72, fz + 0.5) // engawa
    for (const px of [-4.4, -1.5, 1.5, 4.4]) put(g, rbox(0.14, 0.7, 0.14, C.woodDark, 0.04), px, 0.35, fz + 0.95)
    put(g, rbox(1.8, 2.15, 0.14, C.woodDark, 0.05), 0, 1.75, fz)
    put(g, rbox(1.56, 1.95, 0.1, C.paper, 0.03, GLOW), 0, 1.75, fz + 0.05)
    for (let i = 1; i < 4; i++) put(g, rbox(0.035, 1.95, 0.12, C.woodDark, 0.01), -0.78 + i * 0.39, 1.75, fz + 0.06)
    for (let j = 1; j < 4; j++) put(g, rbox(1.56, 0.035, 0.12, C.woodDark, 0.01), 0, 0.78 + j * 0.49, fz + 0.06)
    paperWindow(g, -2.9, 2.0, fz)
    paperWindow(g, 2.9, 2.0, fz)
    put(g, rbox(1.3, 0.34, 0.7, C.stone, 0.1), 0, 0.17, fz + 1.4) // step
    for (const sx of [-0.18, 0.18]) {
      put(g, rbox(0.17, 0.05, 0.36, C.woodPale, 0.02), sx, 0.36, fz + 1.38, sx * 0.4)
      put(g, rbox(0.12, 0.03, 0.03, C.red, 0.01), sx, 0.4, fz + 1.3, sx * 0.4)
    }
    put(g, cyl(0.07, 0.06, 0.12, C.plaster, 10), 2.2, 0.85, fz + 0.45) // tea mug, cooling
    put(g, cyl(0.06, 0.06, 0.012, C.woodDark, 10), 2.2, 0.91, fz + 0.45)
    put(g, rbox(0.6, 1.6, 0.6, C.stoneDark, 0.1), 2.6, 4.4, -1.0) // chimney
    // indigo noren split curtain over the door
    const indigo = mix(C.kawara, C.ink, 0.45)
    put(g, cyl(0.03, 0.03, 1.8, C.woodDark, 6), 0, 2.86, fz + 0.18, 0, 0, Math.PI / 2)
    for (const nx of [-0.56, 0, 0.56]) put(g, rbox(0.52, 0.7, 0.03, indigo, 0.01, HANG), nx, 2.5, fz + 0.2, 0, nx * 0.08)
    put(g, cyl(0.12, 0.12, 0.02, C.plaster, 14), 0, 2.48, fz + 0.225, 0, Math.PI / 2)
    // potted plants by the step, and a wind chime under the eave
    for (const [px, ps] of [[-1.15, 1], [1.2, 0.8], [1.6, 0.65]]) {
      put(g, cyl(0.2 * ps, 0.15 * ps, 0.3 * ps, mix(C.red, C.earth, 0.55), 10), px, 0.15 * ps, fz + 1.45)
      put(g, sphere(0.24 * ps, C.leafLight, 1, SWAY), px, 0.36 * ps, fz + 1.45)
    }
    // laundry drying on a bamboo pole under the eave, and a futon airing over the engawa
    put(g, cyl(0.035, 0.035, 2.8, mix(C.grass, C.plaster, 0.3), 6), -2.8, 2.62, fz + 0.88, 0, 0, Math.PI / 2)
    for (const [lx, lw, lh, col] of [[-3.95, 0.5, 0.62, C.plaster], [-3.3, 0.62, 0.5, C.hydrangeaBlue], [-2.55, 0.46, 0.7, mix(C.plaster, C.sun, 0.4)], [-1.9, 0.18, 0.28, C.ink], [-1.65, 0.18, 0.28, C.ink]]) {
      put(g, rbox(lw, lh, 0.025, col, 0.01, HANG), lx, 2.6 - lh / 2, fz + 0.88)
      put(g, rbox(0.05, 0.06, 0.05, C.woodLight, 0.01), lx, 2.62, fz + 0.9) // peg
    }
    put(g, rbox(1.7, 0.08, 1.05, mix(C.hydrangeaPink, C.plaster, 0.45), 0.03), 3.3, 0.84, fz + 0.5) // futon on the engawa
    put(g, rbox(1.7, 0.42, 0.06, mix(C.hydrangeaPink, C.plaster, 0.45), 0.03, HANG), 3.3, 0.62, fz + 1.02)
    {
      const wc = new THREE.Group() // watering can by the pots
      put(wc, cyl(0.13, 0.15, 0.24, C.hydrangeaBlue, 10), 0, 0.12, 0)
      put(wc, cyl(0.025, 0.035, 0.34, C.hydrangeaBlue, 6), 0.18, 0.2, 0, 0, 0, -0.9)
      put(wc, rbox(0.03, 0.14, 0.2, C.hydrangeaBlue, 0.01), -0.05, 0.3, 0)
      put(g, wc, 2.2, 0, fz + 1.55, 0.6)
    }
    put(g, cyl(0.006, 0.006, 0.4, C.ink, 4), -3.7, 3.0, fz + 0.75)
    put(g, sphere(0.09, C.paddyWater, 1, HANG), -3.7, 2.78, fz + 0.75).scale.y = 0.8
    put(g, rbox(0.06, 0.22, 0.01, C.red, 0.005, HANG), -3.7, 2.55, fz + 0.75)
    box(x - 4.9, x + 4.9, z - 3.0, z + 3.15)
    seg(x - 4.6, z + 3.8, x - 0.95, z + 3.8, 0.15)
    seg(x + 0.95, z + 3.8, x + 4.6, z + 3.8, 0.15)
    blob(x, z, 7, 0.3)
    clear(x, z, 6.2)
    interactable({ id: 'house', name: ABOUT.title, label: 'Home · About me', verb: 'Knock', x, z: NORTH_EDGE, sz: z + 4.3, height: 2.0, entry: ABOUT })
  }

  // ======================================================= WORKSHOP (Projects)
  {
    const x = 8.2
    const z = -6.3
    const g = at(x, z)
    const W = 8
    const D = 5
    put(g, rbox(W + 0.4, 0.4, D + 0.4, C.stoneDark, 0.1), 0, 0.2, 0)
    put(g, rbox(W, 2.8, 0.3, C.woodLight, 0.06), 0, 1.8, -D / 2 + 0.15)
    for (const sx of [-1, 1]) put(g, rbox(0.3, 2.8, D, C.woodLight, 0.06), sx * (W / 2 - 0.15), 1.8, 0)
    for (let i = 0; i < 7; i++) put(g, rbox(0.05, 2.7, 0.05, C.woodDark, 0.02), -W / 2 + 0.6 + i * 1.15, 1.8, -D / 2 + 0.32)
    for (const sx of [-1, 0, 1]) put(g, rbox(0.26, 3.0, 0.26, C.woodDark, 0.06), sx * (W / 2 - 0.13), 1.9, D / 2 - 0.13)
    const roof = new THREE.Group()
    put(roof, rbox(W + 1.1, 0.16, D + 1.0, C.rust, 0.05), 0, 0, 0)
    for (let i = 0; i < 14; i++) put(roof, rbox(0.08, 0.06, D + 1.0, C.redDark, 0.02), -W / 2 - 0.4 + i * 0.68, 0.1, 0)
    roof.position.set(0, 3.45, 0)
    roof.rotation.x = 0.12
    g.add(roof)
    // workbench with a half-built thing, by the open front where you can see it
    put(g, rbox(3.2, 0.14, 0.9, C.woodPale, 0.04), 1.6, 1.0, 1.6)
    for (const sx of [-1.4, 1.4]) put(g, rbox(0.14, 0.95, 0.8, C.woodDark, 0.04), 1.6 + sx, 0.48, 1.6)
    put(g, rbox(0.8, 0.46, 0.55, C.stone, 0.06), 0.8, 1.3, 1.55)
    put(g, rbox(0.5, 0.3, 0.03, C.ink, 0.01, GLOW), 0.8, 1.36, 1.84)
    put(g, rbox(0.6, 0.05, 0.25, C.ink, 0.02), 2.3, 1.1, 1.7)
    for (let i = 0; i < 5; i++) put(g, rbox(0.06, R(0.45, 0.8), 0.05, i % 2 ? C.stoneDark : C.woodDark, 0.02), -2.6 + i * 0.4, 2.2, -D / 2 + 0.36, 0, 0, R(-0.2, 0.2))
    const tex = textTexture(['CENTRAL', 'AUTO SALES'], { width: 512, height: 220, size: 70, bg: '#1d1b1c', fg: C.plaster, border: '#333' })
    // the shop sign stands up on the roof's front edge, where you can read it
    for (const px of [-1.4, 1.4]) put(g, rbox(0.1, 0.9, 0.1, C.woodDark, 0.03), px, 3.45, D / 2 + 0.5)
    put(g, rbox(3.6, 1.1, 0.14, C.woodDark, 0.06), 0, 4.05, D / 2 + 0.62)
    put(g, panel(3.35, 0.92, tex), 0, 4.05, D / 2 + 0.7)
    box(x - W / 2 - 0.3, x + W / 2 + 0.3, z - D / 2 - 0.3, z + D / 2 + 0.2)
    blob(x, z, 6, 0.3)
    clear(x, z, 5.4)

    // the car out front, up on blocks for a fix
    const cx = 5.9
    const cz = -2.75
    const car = at(cx, cz, 0.12)
    put(car, rbox(2.6, 0.58, 1.36, C.red, 0.24), 0, 0.8, 0)
    put(car, rbox(1.45, 0.56, 1.22, C.red, 0.22), -0.2, 1.33, 0)
    put(car, rbox(1.32, 0.44, 1.28, C.paddyWater, 0.14), -0.2, 1.34, 0)
    put(car, rbox(2.64, 0.12, 1.4, C.plaster, 0.05), 0, 0.62, 0)
    for (const [sx, sz] of [[-0.88, -0.7], [-0.88, 0.7], [0.88, -0.7]]) {
      put(car, cyl(0.29, 0.29, 0.22, C.ink, 12), sx, 0.48, sz, 0, Math.PI / 2)
      put(car, rbox(0.38, 0.22, 0.38, C.woodLight, 0.04), sx, 0.12, sz * 0.8)
    }
    put(car, cyl(0.29, 0.29, 0.22, C.ink, 12), 1.9, 0.12, 0.35, 0, 0, Math.PI / 2) // the wheel that came off
    put(car, rbox(0.38, 0.28, 0.38, C.woodLight, 0.04), 0.88, 0.14, 0.56)
    box(cx - 1.4, cx + 2.2, cz - 0.75, cz + 0.6)
    // sawhorses with a half-cut plank, a lumber pile, an oil drum and a toolbox
    {
      const sh = at(11.0, -2.75, 0.06)
      for (const sx of [-0.7, 0.7]) {
        put(sh, rbox(0.1, 0.12, 0.9, C.woodLight, 0.03), sx, 0.62, 0)
        for (const lz of [-0.3, 0.3]) put(sh, rbox(0.08, 0.66, 0.08, C.wood, 0.02), sx, 0.31, lz, 0, lz * 0.5, 0)
      }
      put(sh, rbox(2.1, 0.06, 0.32, C.woodPale, 0.02), 0.1, 0.71, 0.05, 0.05)
      put(sh, rbox(0.5, 0.06, 0.3, C.woodPale, 0.02), 1.4, 0.04, 0.45, 0.6) // the offcut on the ground
      put(sh, rbox(0.34, 0.03, 0.06, C.stoneDark, 0.01), -0.4, 0.76, 0.05) // a saw left on top
      box(9.9, 12.1, -3.35, -2.25)
      const lp = at(3.95, -5.6, 0)
      for (let i = 0; i < 6; i++) put(lp, rbox(0.12, 2.4 - i * 0.12, 0.2, i % 2 ? C.woodLight : C.wood, 0.03), (i % 3) * 0.14, 1.15, -1 + i * 0.36, 0, 0, -0.22)
      const dr = at(12.15, -3.35)
      put(dr, cyl(0.32, 0.32, 0.9, C.rust, 12), 0, 0.45, 0)
      for (const y of [0.25, 0.65]) put(dr, cyl(0.33, 0.33, 0.05, C.redDark, 12), 0, y, 0)
      circle(12.15, -3.35, 0.38)
      const tb = at(8.5, -2.35, 0.3)
      put(tb, rbox(0.62, 0.3, 0.32, C.red, 0.05), 0, 0.15, 0)
      put(tb, rbox(0.4, 0.05, 0.05, C.ink, 0.02), 0, 0.34, 0)
    }
    blob(cx, cz, 2.0, 0.3)
    clear(cx, cz, 2.0)
    interactable({ id: 'central-auto', name: FEATURED.title, label: 'Workshop · Central Auto Sales', verb: 'Check out the car', x: cx + 0.4, z: NORTH_EDGE, sx: cx, sz: cz, height: 2.2, entry: FEATURED })
  }

  // ======================================================= SHRINE HILL (Hackathon wins)
  {
    const tz = -3.5
    const ty = gh(0, tz)
    for (const sx of [-2.3, 2.3]) {
      put(staticRoot, cyl(0.22, 0.26, 3.8, C.red, 12), sx, ty + 1.9, tz)
      put(staticRoot, cyl(0.31, 0.31, 0.38, C.ink, 12), sx, ty + 0.19, tz)
      circle(sx, tz, 0.38)
      blob(sx, tz, 0.9, 0.3)
    }
    put(staticRoot, rbox(5.6, 0.26, 0.38, C.red, 0.06), 0, ty + 3.0, tz)
    put(staticRoot, rbox(6.6, 0.32, 0.56, C.red, 0.08), 0, ty + 3.72, tz)
    put(staticRoot, rbox(7.1, 0.2, 0.66, C.ink, 0.08), 0, ty + 3.96, tz)
    for (const sx of [-1, 1]) put(staticRoot, rbox(0.9, 0.2, 0.66, C.ink, 0.08), sx * 3.65, ty + 4.06, tz, 0, 0, sx * 0.2)
    put(staticRoot, rbox(0.3, 0.7, 0.26, C.red, 0.05), 0, ty + 3.38, tz)
    const plaque = textTexture(['神社', 'shrine'], { width: 256, height: 384, bg: C.ink, fg: C.sun, size: 64, border: C.ink })
    put(staticRoot, panel(0.26, 0.6, plaque), 0, ty + 3.38, tz + 0.14)

    for (let z = -8.8; z > -14.9; z -= 0.6) {
      put(staticRoot, rbox(2.2 + R(-0.1, 0.1), 0.16, 0.54, random() > 0.5 ? C.stone : C.stoneLight, 0.05), R(-0.05, 0.05), gh(0, z) + 0.02, z, R(-0.04, 0.04))
    }
    // (the top of the steps is framed by the komainu and the two lanterns beside them)
    for (const z of [-6.2, -10.4]) for (const sx of [-1.95, 1.95]) stoneLantern(sx, z, 0.8)

    const sz = -18.7
    const g = at(0, sz)
    put(g, rbox(6.4, 0.7, 4.6, C.stone, 0.12), 0, 0.35, 0)
    put(g, rbox(5, 2.4, 3.2, C.woodLight, 0.08), 0, 1.9, 0)
    for (const sx of [-2.4, -0.8, 0.8, 2.4]) put(g, rbox(0.24, 2.5, 0.24, C.red, 0.05), sx, 1.95, 1.65)
    const roof = new THREE.Group()
    const sweep = { sag: 0.12, flare: 0.6 }
    for (const side of [1, -1]) {
      const sg = put(roof, new THREE.Group(), 0, 0, side * 1.25, 0, side * 0.5)
      put(sg, bentSlab(7.6, 0.26, 3.4, C.roof, sweep), 0, 0, 0)
      for (let r = 0; r < 6; r++) put(sg, bentSlab(7.64, 0.08, 0.14, C.roofDark, sweep), 0, 0.14, -1.45 + r * 0.58)
    }
    put(roof, bentSlab(7.8, 0.3, 0.4, C.roofDark, sweep), 0, 0.82, 0)
    roof.position.y = 3.65
    g.add(roof)
    // bell rope and bell in front of the hall
    put(g, rbox(0.06, 1.7, 0.06, C.red, 0.02, HANG), 0, 2.05, 2.1, 0, 0, 0.04)
    put(g, rbox(0.06, 1.7, 0.06, C.plaster, 0.02, HANG), 0.05, 2.05, 2.1, 0, 0, -0.04)
    put(g, sphere(0.2, C.sun, 1), 0, 2.95, 2.1)
    put(g, cyl(0.12, 0.12, 4.6, C.woodPale, 8), 0, 2.95, 1.82, 0, 0, Math.PI / 2) // shimenawa rope
    for (const sx of [-1.4, 0, 1.4]) put(g, rbox(0.14, 0.45, 0.02, C.plaster, 0.01, HANG), sx, 2.6, 1.88)
    put(g, rbox(1.2, 0.5, 0.6, C.woodDark, 0.04), 0, 0.95, 2.5)
    box(-3.3, 3.3, sz - 2.4, sz + 2.4)
    blob(0, sz, 5, 0.3)
    clear(0, sz, 4.6)

    // Ema racks: each win is a wooden plaque hung at the shrine, facing you
    const spots = [-6.1, -4.3, 4.3, 6.1]
    for (const rx of [-5.2, 5.2]) {
      const r = at(rx, -16.4)
      for (const px of [-1.55, 1.55]) put(r, rbox(0.14, 2.0, 0.14, C.woodDark, 0.04), px, 1.0, 0)
      put(r, rbox(3.5, 0.12, 0.14, C.woodDark, 0.04), 0, 1.75, 0)
      put(r, rbox(3.7, 0.12, 0.6, C.roof, 0.04), 0, 2.08, -0.05, 0, 0.1)
      put(r, rbox(3.7, 0.12, 0.6, C.roof, 0.04), 0, 2.08, 0.05, 0, -0.1)
      seg(rx - 1.6, -16.4, rx + 1.6, -16.4, 0.18)
      blob(rx, -16.4, 2, 0.22)
      clear(rx, -16.4, 2)
    }
    HACKATHONS.forEach((entry, i) => {
      const x = spots[i]
      const pg = at(x, -16.3)
      put(pg, rbox(0.02, 0.32, 0.02, C.red, 0.005), 0, 1.6, 0.09) // red cord
      const tilt = R(-0.05, 0.05)
      put(pg, rbox(1.3, 0.86, 0.08, C.woodPale, 0.05), 0, 1.08, 0.1, 0, 0, tilt)
      put(pg, cone(0.74, 0.3, C.woodPale, 4), 0, 1.65, 0.1).scale.set(0.9, 1, 0.1) // the ema's peaked top
      const ptex = textTexture([entry.title, 'WIN'], { width: 512, height: 340, size: 96, bg: C.woodPale, fg: '#3b2412', border: C.woodDark })
      const face = put(pg, panel(1.2, 0.8, ptex), 0, 1.08, 0.145)
      face.rotation.z = tilt
      interactable({ id: `hack-${i}`, name: entry.title, label: `${entry.title} · win`, plateRange: 7, verb: 'Read the plaque', x, z: -15.3, sz: -16.3, height: 2.45, radius: 1.3, entry })
    })
    // Everything up here stands clear of one lane in front of the hall
    // (z ≈ -15.3), the only way from the top of the steps to the plaques.
    stoneLantern(-3.4, -14.35, 0.85)
    stoneLantern(3.4, -14.35, 0.85)
    // a pair of komainu guarding the top of the steps, one mouth open, one closed
    for (const sx of [-1, 1]) {
      const k = at(sx * 1.75, -14.3, sx * -0.35)
      put(k, rbox(0.7, 0.42, 0.7, C.stoneDark, 0.08), 0, 0.21, 0)
      put(k, rbox(0.42, 0.5, 0.52, C.stone, 0.16), 0, 0.66, -0.05)
      put(k, rbox(0.42, 0.4, 0.4, C.stone, 0.15), 0, 1.05, 0.12)
      put(k, sphere(0.24, C.stoneLight, 1), 0, 1.13, 0.02).scale.set(1.15, 0.9, 0.8) // mane
      put(k, rbox(0.3, sx > 0 ? 0.12 : 0.06, 0.08, C.ink, 0.02), 0, 0.98, 0.33)
      put(k, rbox(0.12, 0.28, 0.12, C.stone, 0.05), -0.26, 0.34, 0.24)
      put(k, rbox(0.12, 0.28, 0.12, C.stone, 0.05), 0.26, 0.34, 0.24)
      circle(sx * 1.75, -14.3, 0.38)
    }
  }

  // =============================================================== STATION (Experience)
  let setStationClock = () => {}
  const litBoxes = []
  const litLevels = new Float32Array(CAREER.length)
  const litTarget = new Float32Array(CAREER.length)
  const setLit = (i) => (litTarget[i] = 1)
  {
    const { minX, maxX, minZ, maxZ, h } = PLATFORM
    // platform edging and a low fence along the back, so you can't step onto the track
    put(staticRoot, rbox(maxX - minX, h + 0.3, 0.25, C.stone, 0.05), (minX + maxX) / 2, h / 2 - 0.15, minZ + 0.05)
    put(staticRoot, rbox(maxX - minX - 0.2, 0.04, 0.3, mix(C.sun, C.earth, 0.25), 0.02), (minX + maxX) / 2, h + 0.01, minZ + 0.45)
    for (let x = minX + 0.3; x < maxX; x += 1.6) put(staticRoot, rbox(0.1, 0.8, 0.1, C.woodDark, 0.03), x, h + 0.4, minZ + 0.15)
    put(staticRoot, rbox(maxX - minX, 0.08, 0.06, C.woodLight, 0.02), (minX + maxX) / 2, h + 0.72, minZ + 0.15)
    seg(minX, minZ + 0.15, maxX, minZ + 0.15, 0.15)
    // rails and sleepers running east into the hills
    for (let x = TRACK.minX; x < TRACK.maxX; x += 0.72) put(staticRoot, rbox(0.3, 0.1, 2.2, C.woodDark, 0.03), x, gh(x, -5.85) + 0.04, -5.85 + R(-0.04, 0.04), R(-0.03, 0.03))
    for (const rz of [-6.5, -5.2]) {
      const len = TRACK.maxX - TRACK.minX
      put(staticRoot, rbox(len, 0.1, 0.08, C.stoneDark, 0.02), TRACK.minX + len / 2, TRACK.h + 0.15, rz)
    }
    put(staticRoot, rbox(0.3, 0.7, 1.8, C.red, 0.06), TRACK.minX, 0.45, -5.85) // buffer stop
    // the line disappears into a tunnel under the eastern hill
    {
      const tx = TRACK.maxX
      const tg = new THREE.Group()
      tg.position.set(tx, 0, -5.85)
      staticRoot.add(tg)
      put(tg, rbox(1.2, 3.6, 5.6, C.stone, 0.2), 0.3, 1.6, 0)
      put(tg, rbox(0.4, 2.7, 2.6, C.ink, 0.3), -0.3, 1.3, 0)
      put(tg, rbox(1.3, 0.4, 5.9, C.stoneDark, 0.12), 0.25, 3.45, 0)
      for (const sz of [-1.6, 1.6]) put(tg, rbox(0.5, 2.8, 0.5, C.stoneDark, 0.1), -0.45, 1.4, sz)
    }
    box(TRACK.minX - 0.2, TRACK.maxX + 2, TRACK.minZ - 0.2, TRACK.maxZ + 0.2)

    // the little one-car train, waiting
    const tg = at(25.2, -5.85, Math.PI / 2)
    tg.position.y += 0.2
    put(tg, rbox(2.2, 1.2, 6.2, C.plaster, 0.3), 0, 0.95, 0)
    put(tg, rbox(2.25, 1.0, 6.25, mix(C.kawara, C.leaf, 0.35), 0.28), 0, 2.0, 0)
    put(tg, rbox(2.1, 0.22, 6.0, C.stoneLight, 0.1), 0, 2.6, 0)
    for (let i = 0; i < 4; i++) put(tg, rbox(0.06, 0.55, 0.9, C.paddyWater, 0.04, GLOW), 1.12, 2.0, -2.1 + i * 1.4)
    put(tg, rbox(1.4, 0.5, 0.06, C.paddyWater, 0.04), 0, 2.0, -3.12)
    for (const sx of [-0.6, 0.6]) put(tg, rbox(0.2, 0.12, 0.06, C.glow, 0.03, GLOW), sx, 1.3, -3.13)
    blob(25.2, -5.85, 3.4, 0.3)

    // station hut, with Kuro's bench in front
    const hx = 15.3
    const hz = -6.0
    const hg = at(hx, hz)
    gableBuilding(hg, 3.4, 3.2, { wallH: 2.3, wall: C.woodPale })
    put(hg, rbox(1.0, 1.9, 0.1, C.woodDark, 0.04), -0.7, 1.45, 1.65)
    paperWindow(hg, 0.85, 1.85, 1.65, 0.9, 0.7)
    const stex = textTexture(['えき STATION'], { width: 512, height: 110, size: 54, bg: C.plaster, fg: C.ink, border: C.ink })
    put(hg, panel(2.6, 0.56, stex), 0, 3.15, 1.75)
    box(hx - 1.9, hx + 1.9, hz - 1.8, hz + 1.75)
    blob(hx, hz, 3.2, 0.3)
    clear(hx, hz, 3)

    // a glowing vending machine beside the office, and a platform clock
    {
      const vm = at(16.9, -3.35)
      put(vm, rbox(0.9, 1.85, 0.7, C.plaster, 0.06), 0, 0.93, 0)
      put(vm, rbox(0.92, 0.22, 0.72, C.red, 0.05), 0, 1.78, 0)
      put(vm, rbox(0.74, 0.86, 0.04, C.paper, 0.02, GLOW), 0, 1.22, 0.36)
      const cans = [C.red, C.hydrangeaBlue, C.leafLight, C.sun, C.earth]
      for (let r = 0; r < 3; r++) for (let c = 0; c < 5; c++) put(vm, rbox(0.09, 0.18, 0.04, cans[(r * 2 + c) % 5], 0.02, GLOW), -0.28 + c * 0.14, 1.48 - r * 0.26, 0.385)
      put(vm, rbox(0.5, 0.14, 0.05, C.ink, 0.02), 0, 0.42, 0.37)
      box(16.4, 17.4, -3.75, -2.95)
      blob(16.9, -3.35, 1.1, 0.3)
      const ck = at(30.0, -2.4)
      put(ck, cyl(0.06, 0.06, 2.6, C.stoneDark, 8), 0, 1.3, 0)
      const cc = document.createElement('canvas')
      cc.width = cc.height = 128
      const x = cc.getContext('2d')
      x.fillStyle = C.plaster
      x.beginPath()
      x.arc(64, 64, 60, 0, Math.PI * 2)
      x.fill()
      x.strokeStyle = C.ink
      x.lineWidth = 6
      x.stroke()
      for (let i = 0; i < 12; i++) {
        const a = (i / 12) * Math.PI * 2
        x.fillStyle = C.ink
        x.fillRect(64 + Math.cos(a) * 48 - 3, 64 + Math.sin(a) * 48 - 3, 6, 6)
      }
      const face = x.getImageData(0, 0, 128, 128)
      const ct = new THREE.CanvasTexture(cc)
      ct.colorSpace = THREE.SRGBColorSpace
      // the platform clock keeps the visitor's own time
      setStationClock = (hours, minutes) => {
        x.putImageData(face, 0, 0)
        x.lineCap = 'round'
        x.strokeStyle = C.ink
        const ha = ((hours % 12) + minutes / 60) / 12 * Math.PI * 2 - Math.PI / 2
        const ma = (minutes / 60) * Math.PI * 2 - Math.PI / 2
        x.lineWidth = 8
        x.beginPath()
        x.moveTo(64, 64)
        x.lineTo(64 + Math.cos(ha) * 30, 64 + Math.sin(ha) * 30)
        x.stroke()
        x.lineWidth = 5
        x.beginPath()
        x.moveTo(64, 64)
        x.lineTo(64 + Math.cos(ma) * 46, 64 + Math.sin(ma) * 46)
        x.stroke()
        x.fillStyle = C.red
        x.beginPath()
        x.arc(64, 64, 6, 0, Math.PI * 2)
        x.fill()
        ct.needsUpdate = true
      }
      setStationClock(17, 10)
      put(ck, cyl(0.36, 0.36, 0.12, C.ink, 18), 0, 2.6, 0, 0, Math.PI / 2)
      put(ck, panel(0.62, 0.62, ct), 0, 2.6, 0.065)
      circle(30.0, -2.4, 0.2)
    }

    // Career: one station name board per role, oldest first, walking east
    CAREER.forEach((entry, i) => {
      const bx = 18.35 + i * 1.5 // the last board ends short of the platform clock at x 30
      const bz = -2.45
      const g = at(bx, bz)
      g.position.y = PLATFORM.h
      for (const px of [-0.6, 0.6]) put(g, rbox(0.08, 1.55, 0.08, C.stoneDark, 0.02), px, 0.78, -0.04)
      put(g, rbox(1.38, 0.8, 0.08, C.plaster, 0.03), 0, 1.25, 0)
      put(g, rbox(0.3, 0.16, 0.24, C.ink, 0.03), 0, 1.78, 0) // lamp hood
      put(g, rbox(0.22, 0.18, 0.18, C.glow, 0.03, GLOW), 0, 1.64, 0)
      litBoxes.push({ x: bx, y: PLATFORM.h + 1.64, z: bz })
      const year = entry.kicker.match(/(\d{4})/)?.[1] ?? ''
      const prev = i > 0 ? CAREER[i - 1].marker : 'start'
      const next = i < CAREER.length - 1 ? CAREER[i + 1].marker : 'today'
      const canvas = document.createElement('canvas')
      canvas.width = 420
      canvas.height = 240
      const ctx = canvas.getContext('2d')
      ctx.fillStyle = C.plaster
      ctx.fillRect(0, 0, 420, 240)
      ctx.fillStyle = C.ink
      ctx.textAlign = 'center'
      let fs = 64
      ctx.font = `${fs}px "DotGothic16"`
      while (ctx.measureText(entry.marker).width > 390 && fs > 26) ctx.font = `${(fs -= 2)}px "DotGothic16"`
      ctx.fillText(entry.marker, 210, 92)
      ctx.fillStyle = C.red
      ctx.fillRect(16, 122, 388, 10)
      ctx.fillStyle = C.ink
      ctx.font = '30px "DotGothic16"'
      ctx.textAlign = 'left'
      ctx.fillText('← ' + prev, 18, 178)
      ctx.textAlign = 'right'
      ctx.fillText(next + ' →', 402, 178)
      ctx.textAlign = 'center'
      ctx.font = '32px "DotGothic16"'
      ctx.fillText(year, 210, 222)
      const tex = new THREE.CanvasTexture(canvas)
      tex.colorSpace = THREE.SRGBColorSpace
      tex.anisotropy = 4
      put(g, panel(1.3, 0.74, tex), 0, 1.25, 0.045)
      seg(bx - 0.65, bz, bx + 0.65, bz, 0.1)
      const it = interactable({ id: `career-${i}`, name: `${entry.title}`, label: `${entry.marker} · ${year}`, plateRange: 5, verb: 'Read the stop', x: bx, z: NORTH_EDGE, sx: bx, sz: bz, height: 1.95, radius: 1.35, entry, onInteract: () => setLit(i) })
      it.light = () => setLit(i)
    })
  }

  // ======================================================= RICE PADDIES (Skills)
  PADDIES.forEach((p, i) => {
    const skill = SKILLS[i]
    const sx = (p.minX + p.maxX) / 2
    const g = signpost(sx, -1.95, [skill.title], { w: 2.4, h: 0.78, y: 1.05 })
    g.position.y = Math.max(g.position.y, 0)
    interactable({
      id: `skill-${i}`,
      name: skill.title,
      label: `${skill.title} · skills`,
      verb: 'Read the sign',
      x: sx,
      z: NORTH_EDGE + 0.1,
      sz: -1.95,
      height: 1.75,
      radius: 1.7,
      entry: { title: `${skill.title} paddy`, kicker: 'Rice terraces', pages: [`Growing well in this paddy: ${skill.items.join(', ')}.`], tags: skill.items },
    })
  })
  {
    const g = at(-22.3, -6.4)
    g.position.y = PADDIES[1].level - 0.1
    put(g, rbox(0.1, 2, 0.1, C.woodDark, 0.03), 0, 1, 0)
    put(g, rbox(1.5, 0.08, 0.08, C.woodDark, 0.03), 0, 1.45, 0)
    put(g, rbox(0.7, 0.72, 0.36, C.hydrangeaBlue, 0.12), 0, 1.35, 0)
    put(g, sphere(0.28, C.plaster, 1), 0, 2.05, 0)
    put(g, cone(0.6, 0.3, C.dryGrass, 10), 0, 2.32, 0)
  }
  fence(-15.7, -2.4, -15.7, -8.8)

  // ======================================================= PLAZA: welcome sign + notice board (GitHub)
  fingerpost(-3.9, 3.5, SIGNPOST)
  function drawBoard(canvas, data) {
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = C.plaster
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = '#4a2e18'
    ctx.font = '40px "DotGothic16", sans-serif'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'top'
    ctx.fillText('GitHub · last year', 28, 22)
    if (!data) {
      ctx.font = '30px "DotGothic16", sans-serif'
      ctx.fillText('Loading the latest…', 28, 120)
      return
    }
    ctx.font = '56px "DotGothic16", sans-serif'
    const num = data.total.toLocaleString('en-CA')
    ctx.fillText(num, 28, 74)
    const w = ctx.measureText(num).width
    ctx.font = '28px "DotGothic16", sans-serif'
    ctx.fillText('contributions', 44 + w, 98)
    const days = data.days.slice(-26 * 7)
    const shades = [mix(C.plaster, C.earth, 0.3), mix(C.grass, C.plaster, 0.45), C.grass, C.leafLight, C.leaf]
    days.forEach((d, i) => {
      ctx.fillStyle = shades[Math.max(0, Math.min(4, d.level))]
      ctx.fillRect(58 + Math.floor(i / 7) * 21, 188 + (i % 7) * 21, 17, 17)
    })
    ctx.fillStyle = C.red
    ctx.beginPath()
    ctx.arc(canvas.width / 2, 14, 9, 0, Math.PI * 2)
    ctx.fill()
  }
  {
    const x = 3.9
    const z = 3.7
    const g = at(x, z)
    for (const sx of [-1.1, 1.1]) put(g, rbox(0.18, 2.2, 0.18, C.woodDark, 0.05), sx, 1.1, 0)
    put(g, rbox(2.5, 1.5, 0.14, C.wood, 0.06), 0, 1.4, 0)
    put(g, rbox(2.8, 0.2, 0.5, C.roof, 0.06), 0, 2.32, 0)
    const canvas = document.createElement('canvas')
    canvas.width = 640
    canvas.height = 384
    const tex = new THREE.CanvasTexture(canvas)
    tex.colorSpace = THREE.SRGBColorSpace
    tex.anisotropy = 4
    put(g, panel(2.3, 1.38, tex), 0, 1.4, 0.075)
    seg(x - 1.2, z, x + 1.2, z, 0.2)
    blob(x, z, 1.6, 0.25)
    clear(x, z, 1.5)
    drawBoard(canvas, null)
    tex.needsUpdate = true
    const it = interactable({ id: 'board', name: BOARD.title, label: 'GitHub activity', verb: 'Read', x, z: SOUTH_EDGE + 0.3, sz: z, height: 2.75, radius: 1.8, entry: BOARD })
    it.setContributions = (data) => {
      drawBoard(canvas, data)
      tex.needsUpdate = true
    }
  }

  // ===================================================== POST OFFICE (Contact) + BUS STOP (exit)
  {
    const x = -6.6
    const z = 15.9
    const g = at(x, z)
    gableBuilding(g, 6, 4.0, { wallH: 2.4 })
    const fz = 2.05
    put(g, rbox(1.4, 2.0, 0.12, C.woodDark, 0.04), 0.9, 1.5, fz)
    put(g, rbox(1.2, 1.8, 0.08, C.paddyWater, 0.03), 0.9, 1.5, fz + 0.04)
    paperWindow(g, -1.6, 1.9, fz, 1.4, 0.9)
    put(g, cyl(0.03, 0.03, 1.5, C.woodDark, 6), 0.9, 2.62, fz + 0.16, 0, 0, Math.PI / 2)
    for (const nx of [-0.34, 0.34]) put(g, rbox(0.62, 0.55, 0.03, C.red, 0.01, HANG), 0.9 + nx, 2.32, fz + 0.18)
    {
      const bn = at(-3.6, 16.9)
      put(bn, cyl(0.04, 0.04, 2.4, C.woodDark, 6), 0, 1.2, 0)
      put(bn, rbox(0.42, 1.4, 0.03, C.red, 0.01), 0.24, 1.55, 0)
      const btex = textTexture(['〒', 'P', 'O', 'S', 'T'], { width: 128, height: 448, size: 72, bg: C.red, fg: C.plaster, border: null })
      put(bn, panel(0.38, 1.33, btex), 0.24, 1.55, 0.02)
      circle(-3.6, 16.9, 0.12)
    }
    box(x - 3.3, x + 3.3, z - 2.3, z + 2.2)
    blob(x, z, 4.8, 0.3)
    clear(x, z, 4.4)

    const px = -2.5
    const pz = 18.9
    const pb = at(px, pz)
    put(pb, rbox(0.62, 0.18, 0.62, C.stoneDark, 0.05), 0, 0.09, 0)
    put(pb, cyl(0.32, 0.32, 1.2, C.red, 16), 0, 0.78, 0)
    put(pb, sphere(0.33, C.red, 2), 0, 1.38, 0).scale.y = 0.55
    put(pb, rbox(0.42, 0.06, 0.08, C.ink, 0.02), 0, 1.15, 0.3)
    put(pb, rbox(0.26, 0.2, 0.04, C.plaster, 0.02), 0, 0.82, 0.32)
    circle(px, pz, 0.42)
    blob(px, pz, 0.8, 0.3)
    clear(px, pz, 0.8)
    interactable({ id: 'mailbox', name: CONTACT.title, label: 'Post box · Contact', verb: 'Post a letter', x: px, z: pz - 0.9, sz: pz, height: 1.95, radius: 1.6, entry: CONTACT })
  }
  {
    const x = 4.6
    const z = 17.6
    const g = at(x, z, -0.05)
    for (const sx of [-1.3, 1.3]) put(g, rbox(0.14, 2.3, 0.14, C.woodDark, 0.04), sx, 1.15, -0.5)
    put(g, rbox(3.1, 2.1, 0.1, C.woodPale, 0.03), 0, 1.25, -0.75)
    put(g, rbox(3.3, 0.16, 1.5, C.roof, 0.05), 0, 2.35, -0.2, 0, 0.12)
    put(g, rbox(2.4, 0.1, 0.5, C.woodLight, 0.03), 0, 0.5, -0.42)
    for (const sx of [-1, 1]) put(g, rbox(0.1, 0.48, 0.4, C.woodDark, 0.02), sx, 0.24, -0.42)
    box(x - 1.5, x + 1.5, z - 1.0, z - 0.1)
    blob(x, z, 2.2, 0.25)
    clear(x, z, 2)
    const sx = 2.2
    const sz = 16.6
    // a Japanese bus stop pole: round stop disc on top, the timetable below
    const sgn = at(sx, sz)
    // the pole stands just behind the disc and timetable so it never shows through their faces
    put(sgn, cyl(0.05, 0.05, 2.3, C.stoneDark, 8), 0, 1.15, -0.13)
    put(sgn, cyl(0.24, 0.28, 0.12, C.stoneDark, 12), 0, 0.06, -0.13) // weighted base
    // the disc leans back a little so it reads from the camera above
    const head = new THREE.Group()
    head.position.set(0, 2.3, 0)
    head.rotation.x = -0.32
    sgn.add(head)
    put(head, cyl(0.47, 0.47, 0.06, C.red, 24), 0, 0, -0.035, 0, Math.PI / 2)
    const dc = document.createElement('canvas')
    dc.width = dc.height = 256
    const d = dc.getContext('2d')
    d.fillStyle = C.red
    d.fillRect(0, 0, 256, 256)
    d.fillStyle = C.plaster
    d.beginPath()
    d.arc(128, 128, 100, 0, Math.PI * 2)
    d.fill()
    d.fillStyle = C.ink
    d.textAlign = 'center'
    d.textBaseline = 'middle'
    d.font = '74px "DotGothic16"'
    d.fillText('BUS', 128, 112)
    d.fillStyle = C.red
    d.fillRect(66, 152, 124, 7)
    d.fillStyle = C.ink
    d.font = '30px "DotGothic16"'
    d.fillText('STOP', 128, 182)
    const discTex = new THREE.CanvasTexture(dc)
    discTex.colorSpace = THREE.SRGBColorSpace
    const disc = panel(1, 1, discTex)
    disc.geometry.dispose()
    disc.geometry = new THREE.CircleGeometry(0.45, 32)
    put(head, disc, 0, 0, 0.015)
    // timetable: where this bus goes
    put(sgn, rbox(0.66, 0.56, 0.12, C.ink, 0.02), 0, 1.42, -0.02) // timetable frame, clamped to the pole
    const tt = textTexture(['Classic', 'site →'], { width: 320, height: 256, size: 76, bg: C.plaster, fg: C.ink, border: C.red })
    put(sgn, panel(0.58, 0.48, tt), 0, 1.42, 0.045)
    circle(sx, sz, 0.26)
    interactable({ id: 'exit', name: EXIT.title, label: 'Bus · back to the classic site', verb: 'Wait for the bus', x: sx - 0.6, z: sz + 0.6, sx, sz, height: 3.1, radius: 1.6, entry: EXIT, counts: false })
  }

  // ============================================================== BRIDGE
  {
    const n = 12
    const { z0, z1 } = BRIDGE
    for (let i = 0; i < n; i++) {
      const t = (i + 0.5) / n
      const z = z0 + (z1 - z0) * t
      const ya = heightAt(0, z - 0.2)
      const yb = heightAt(0, z + 0.2)
      put(staticRoot, rbox(2.7, 0.14, (z1 - z0) / n - 0.04, i % 2 ? C.woodLight : C.wood, 0.04), 0, heightAt(0, z) - 0.08, z, 0, -Math.atan2(yb - ya, 0.4))
    }
    for (const sx of [-1.38, 1.38]) {
      for (let i = 0; i <= 4; i++) {
        const z = z0 + ((z1 - z0) * i) / 4
        put(staticRoot, rbox(0.18, 0.95, 0.18, C.woodDark, 0.04), sx, heightAt(0, Math.min(z1 - 0.01, Math.max(z0 + 0.01, z))) + 0.35, z)
      }
      for (let i = 0; i < 4; i++) {
        const za = z0 + ((z1 - z0) * i) / 4
        const zb = z0 + ((z1 - z0) * (i + 1)) / 4
        const ya = heightAt(0, Math.max(z0 + 0.01, za)) + 0.78
        const yb = heightAt(0, Math.min(z1 - 0.01, zb)) + 0.78
        put(staticRoot, rbox(0.1, 0.1, Math.hypot(zb - za, yb - ya) + 0.1, C.woodLight, 0.03), sx, (ya + yb) / 2, (za + zb) / 2, 0, -Math.atan2(yb - ya, zb - za))
      }
      seg(sx, z0 - 0.2, sx, z1 + 0.2, 0.22)
      for (const pz of [8.8, 11.0]) put(staticRoot, cyl(0.15, 0.17, 1.6, C.woodDark, 7), sx, -0.75, pz)
    }
  }

  // ================================================================ WELL + puddle
  const puddles = [{ x: -13.0, z: 4.5, r: 0.75, sz: 0.6 }]
  {
    const x = -14.4
    const z = 3.6
    const g = at(x, z)
    put(g, cyl(0.85, 0.92, 0.8, C.stone, 14), 0, 0.4, 0)
    put(g, cyl(0.68, 0.68, 0.82, C.ink, 14), 0, 0.42, 0)
    for (const sx of [-0.8, 0.8]) put(g, rbox(0.12, 1.9, 0.12, C.woodDark, 0.03), sx, 1.25, 0)
    put(g, rbox(2.0, 0.1, 0.9, C.roof, 0.04), 0, 2.2, 0.3, 0, 0.3)
    put(g, rbox(2.0, 0.1, 0.9, C.roof, 0.04), 0, 2.2, -0.3, 0, -0.3)
    put(g, cyl(0.04, 0.04, 1.6, C.woodLight, 6), 0, 1.75, 0, 0, 0, Math.PI / 2)
    put(g, cyl(0.17, 0.14, 0.26, C.wood, 10), 0.98, 0.95, 0.3)
    circle(x, z, 0.95)
    blob(x, z, 1.6, 0.3)
    clear(x, z, 1.4)
    clear(puddles[0].x, puddles[0].z, 0.9)
  }

  // ================================================================ TREES and greenery
  {
    const pts = poissonDisc({ minX: MESH.minX + 1, maxX: MESH.maxX - 1, minZ: MESH.minZ + 1, maxZ: 24 }, 2.3, random, (x, z) => {
      if (x > 14 && z > -7.6 && z < -3.8) return false // track corridor
      if (isNearPath(x, z, 1.6)) return false
      if (blocked(x, z, 0.8)) return false
      const s = sample(x, z)
      if (s.stream > 0 || s.paddy) return false
      const rimBand = Math.max(Math.abs(x + 0.5) - 29.8, -19.6 - z)
      const flank = z < -9.6 && Math.abs(x) > 9.2
      const plateauEdge = z < -14.8 && Math.abs(x) > 7.6
      if (rimBand > 0) return N.noise(x * 0.3, z * 0.3) > 0.12
      if (flank || plateauEdge) return N.noise(x * 0.25, z * 0.25) > 0.36
      return false
    })
    for (const [x, z] of pts) cedar(x, z, R(0.85, 1.25))
  }
  for (const [x, z, s] of [
    [-20.5, 4.6, 1.05], [-26, 6.6, 1.0], [9.8, 5.0, 1.0], [16.2, 5.6, 1.1], [22.6, 4.4, 1.0], [27.8, 6.2, 1.1],
    [-6.4, 6.8, 0.9], [-14, 15.4, 1.0], [11, 15.8, 1.1], [16.5, 17.6, 1.0], [-17, 18, 1.05], [7.6, 19.6, 0.9],
  ]) broadleaf(x, z, s)
  for (const [x, z] of [[-15.2, -2.3], [-4.6, -2.4], [3.2, -2.3], [12.9, -2.6], [-1.8, 6.0], [1.9, 13.6], [-9.9, 18.8], [-3.7, 13.7], [8.2, 3.6], [-8.0, 6.2]]) hydrangea(x, z, R(0.85, 1.1))
  for (const [x, z] of [[-13.2, -11.3], [-17.6, -10.6], [-21.4, -11.6], [11.4, -11.0]]) bambooClump(x, z)
  for (const [x, z] of [[-11, 7.6], [6, 7.4], [12.5, 7.8], [-19, 7.2], [-25, 8], [20, 7.6], [26, 7.4], [-1.9, 21.4], [9.4, 21], [-10, 20.8]]) bush(x, z, R(0.8, 1.15))
  {
    const pts = poissonDisc({ minX: -30, maxX: 30, minZ: 6, maxZ: 15 }, 1.5, random, (x, z) => {
      const d = distToPolyline(x, z, STREAM.pts).d
      return d > STREAM.hw + 0.2 && d < STREAM.hw + 1.6 && Math.abs(x) > 2.6 && !blocked(x, z, 0.2)
    })
    for (const [x, z] of pts) rock(x, z, R(0.45, 1.0), false)
  }
  // lamps along the south edge of the street and the road
  for (const x of [-24, -17.4, -6.2, 6.4, 12.6, 19.6, 26.6]) lampPost(x, 2.15)
  for (const [x, z] of [[-1.7, 5.4], [1.7, 14.6]]) lampPost(x, z)

  // ============================================================ STORY PROPS
  function bicycle(x, z, ry, { color = C.kawara, lean = 0, basket = true } = {}) {
    const g = at(x, z, ry)
    const b = new THREE.Group()
    b.rotation.z = lean
    g.add(b)
    const wheel = new THREE.TorusGeometry(0.33, 0.035, 6, 18)
    for (const wx of [-0.55, 0.55]) {
      put(b, fromGeo(wheel, C.ink), wx, 0.36, 0)
      put(b, cyl(0.03, 0.03, 0.1, C.stoneLight, 6), wx, 0.36, 0, 0, Math.PI / 2)
    }
    const tube = (x1, y1, x2, y2) => put(b, rbox(Math.hypot(x2 - x1, y2 - y1), 0.05, 0.05, color, 0.02), (x1 + x2) / 2, (y1 + y2) / 2, 0, 0, 0, Math.atan2(y2 - y1, x2 - x1))
    tube(-0.55, 0.36, -0.05, 0.4)
    tube(-0.05, 0.4, -0.15, 0.8)
    tube(-0.15, 0.78, 0.4, 0.8)
    tube(-0.05, 0.4, 0.4, 0.8)
    tube(0.4, 0.8, 0.55, 0.36)
    put(b, rbox(0.22, 0.05, 0.12, C.ink, 0.02), -0.18, 0.86, 0) // saddle
    put(b, rbox(0.05, 0.05, 0.46, C.ink, 0.02), 0.44, 0.95, 0) // handlebar
    if (basket) put(b, rbox(0.26, 0.18, 0.3, C.woodLight, 0.03), 0.62, 0.84, 0)
    blob(x, z, 1.0, 0.18)
    clear(x, z, 0.9)
  }
  // the postman's red bike, parked on its stand
  bicycle(-10.2, 18.6, 0.15, { color: C.red })
  circle(-10.2, 18.6, 0.6)
  // William's own bike: parked by the post box, and yours to ride (main.js
  // drives it). Not baked: it moves, so it is a handful of dynamic meshes.
  const BIKE_PARK = { x: -1.5, z: 16.55, heading: 2.45 }
  const rideBike = (() => {
    const color = C.hydrangeaBlue
    const root = new THREE.Group() // on the ground, turned to the heading
    const tilt = new THREE.Group() // pitch on slopes, lean through turns
    root.add(tilt)
    dynamicRoot.add(root)
    // frame: drawn along +x like the parked bikes, then turned to face +z
    const outer = new THREE.Group()
    const f = new THREE.Group()
    f.rotation.y = -Math.PI / 2
    outer.add(f)
    const tube = (x1, y1, x2, y2, w = 0.055, c = color) => put(f, rbox(Math.hypot(x2 - x1, y2 - y1), w, w, c, 0.02), (x1 + x2) / 2, (y1 + y2) / 2, 0, 0, 0, Math.atan2(y2 - y1, x2 - x1))
    tube(-0.55, 0.36, -0.05, 0.4) // chain stay
    tube(-0.05, 0.4, -0.22, 0.86) // seat tube
    tube(-0.2, 0.8, 0.42, 0.84) // top tube
    tube(-0.05, 0.4, 0.42, 0.84) // down tube
    tube(-0.2, 0.8, -0.55, 0.36) // seat stay
    tube(0.42, 0.84, 0.55, 0.36) // fork
    tube(0.42, 0.84, 0.36, 1.08, 0.045, C.stoneLight) // stem
    put(f, rbox(0.28, 0.07, 0.16, C.ink, 0.03), -0.23, 0.9, 0) // saddle
    put(f, rbox(0.05, 0.05, 0.6, C.stoneLight, 0.02), 0.36, 1.1, 0) // bars
    for (const gz of [-0.27, 0.27]) put(f, rbox(0.07, 0.07, 0.1, C.ink, 0.03), 0.36, 1.1, gz) // grips
    put(f, sphere(0.045, C.glow, 1), 0.38, 1.15, 0.17) // bell
    put(f, rbox(0.3, 0.2, 0.34, C.woodLight, 0.04), 0.68, 0.92, 0) // basket
    put(f, rbox(0.2, 0.05, 0.28, C.red, 0.02), 0.68, 1.03, 0) // furoshiki bundle in it
    put(f, rbox(0.4, 0.04, 0.2, C.stoneLight, 0.02), -0.55, 0.74, 0) // rear rack
    tube(-0.55, 0.36, -0.42, 0.74, 0.035, C.stoneLight)
    put(f, rbox(0.42, 0.03, 0.1, color, 0.015), -0.58, 0.72, 0, 0, 0, 0.12) // fender
    const frame = new THREE.Mesh(mergeColored(outer), vcToon())
    frame.castShadow = true
    addHull(frame, 0.018)
    tilt.add(frame)
    // kickstand: shown only when parked
    const stand = new THREE.Mesh(mergeColored((() => {
      const g = new THREE.Group()
      put(g, rbox(0.035, 0.42, 0.035, C.ink, 0.015), 0.16, 0.2, -0.05, 0, 0.15, 0.35)
      return g
    })()), vcToon())
    tilt.add(stand)
    // wheels and crank turn on their own pivots
    const wheelGeo = mergeColored((() => {
      const g = new THREE.Group()
      put(g, fromGeo(new THREE.TorusGeometry(0.33, 0.042, 6, 20), C.ink), 0, 0, 0, Math.PI / 2)
      put(g, rbox(0.018, 0.62, 0.018, C.stoneLight, 0.005), 0, 0, 0)
      put(g, rbox(0.018, 0.018, 0.62, C.stoneLight, 0.005), 0, 0, 0)
      put(g, cyl(0.05, 0.05, 0.12, C.stoneLight, 8), 0, 0, 0, 0, 0, Math.PI / 2)
      return g
    })())
    const wheels = [0.55, -0.55].map((wz) => {
      const w = new THREE.Mesh(wheelGeo, vcToon())
      w.position.set(0, 0.36, wz)
      w.castShadow = true
      tilt.add(w)
      return w
    })
    const crank = new THREE.Mesh(mergeColored((() => {
      const g = new THREE.Group()
      put(g, cyl(0.07, 0.07, 0.05, C.stoneLight, 10), 0, 0, 0, 0, 0, Math.PI / 2)
      put(g, rbox(0.03, 0.3, 0.04, C.ink, 0.01), 0.1, 0, 0)
      put(g, rbox(0.03, 0.3, 0.04, C.ink, 0.01), -0.1, 0, 0, 0, Math.PI)
      put(g, rbox(0.12, 0.04, 0.08, C.ink, 0.015), 0.17, 0.15, 0)
      put(g, rbox(0.12, 0.04, 0.08, C.ink, 0.015), -0.17, -0.15, 0)
      return g
    })()), vcToon())
    crank.position.set(0, 0.4, 0.05)
    tilt.add(crank)
    // soft contact shadow under both wheels
    const shadow = new THREE.Mesh(
      new THREE.CircleGeometry(0.5, 20),
      new THREE.MeshBasicMaterial({ color: '#3a2d48', transparent: true, opacity: 0.22, depthWrite: false }),
    )
    shadow.rotation.x = -Math.PI / 2
    shadow.scale.set(0.62, 1.45, 1)
    shadow.position.y = 0.04
    root.add(shadow)

    // a slim collider along the frame while it is parked
    const col = { type: 'seg', x1: 0, z1: 0, x2: 0, z2: 0, r: 0.2, off: false }
    colliders.push(col)
    const it = interactable({ id: 'bike', name: 'your bicycle', label: 'Bicycle', verb: 'Ride', anchor: root.position, height: 1.25, radius: 1.5, counts: false })
    it.kind = 'bike'
    let heading = 0
    let roll = 0
    let ridden = false
    let leanTarget = -0.09
    let bounce = 1
    // settles onto its stand after you hop off; dips when you land on the saddle
    updaters.push(({ dt }) => {
      if (!ridden) tilt.rotation.z += (leanTarget - tilt.rotation.z) * Math.min(1, dt * 6)
      if (bounce < 1) {
        bounce = Math.min(1, bounce + dt * 2.8)
        tilt.position.y = -Math.sin(bounce * Math.PI * 2.5) * 0.06 * (1 - bounce)
      }
    })

    function place(x, z, h, lean) {
      heading = h
      root.position.set(x, heightAt(x, z), z)
      root.rotation.y = h
      const sx = Math.sin(h) * 0.55
      const sz = Math.cos(h) * 0.55
      const pitch = Math.atan2(heightAt(x + sx, z + sz) - heightAt(x - sx, z - sz), 1.1)
      tilt.rotation.set(-pitch, 0, lean)
    }
    function park(x, z, h, solid = true) {
      ridden = false
      place(x, z, h, tilt.rotation.z)
      stand.visible = true
      const sx = Math.sin(h) * 0.5
      const sz = Math.cos(h) * 0.5
      Object.assign(col, { x1: x - sx, z1: z - sz, x2: x + sx, z2: z + sz, off: !solid })
      it.hidden = false
    }
    park(BIKE_PARK.x, BIKE_PARK.z, BIKE_PARK.heading)
    return {
      it,
      root,
      seat: tilt,
      get heading() {
        return heading
      },
      get crankAngle() {
        return roll / 0.85
      },
      get solid() {
        return !col.off
      },
      set solid(on) {
        col.off = !on
      },
      /** Taken: no collider, no tag or prompt of its own. */
      mount() {
        col.off = true
        it.hidden = true
        it.sparkle.visible = false
      },
      /** The rider lands on the saddle: stand up, a little dip on the springs. */
      seated() {
        ridden = true
        stand.visible = false
        bounce = 0
      },
      /** A small jolt as the rider hops off. */
      thump() {
        bounce = 0.35
      },
      park,
      /** While ridden: follow the rider; wheels and pedals turn with the distance covered. */
      ride(x, z, h, lean, dist) {
        place(x, z, h, lean)
        roll += dist
        for (const w of wheels) w.rotation.x = roll / 0.33
        crank.rotation.x = roll / 0.85
      },
    }
  })()

  // stepping stones out to the well
  for (const [sx, sz, sr] of [[-11.9, 1.75, 0.34], [-12.7, 2.45, 0.3], [-13.4, 2.95, 0.32]]) {
    const st = sphere(sr, C.stoneLight, 0)
    st.scale.set(1.1, 0.22, 0.85)
    put(staticRoot, st, sx, gh(sx, sz) + 0.02, sz, R(0, 3))
    clear(sx, sz, sr + 0.1)
  }
  // a stack of crates by the workshop
  {
    const cr = at(3.65, -3.15, 0.2)
    put(cr, rbox(0.7, 0.55, 0.6, C.woodLight, 0.04), 0, 0.28, 0)
    put(cr, rbox(0.6, 0.45, 0.55, C.wood, 0.04), 0.06, 0.78, 0.02, 0.35)
    for (let i = 0; i < 3; i++) put(cr, sphere(0.09, C.red, 1), -0.15 + i * 0.13, 0.62, 0.12) // a few apples on top
    circle(3.65, -3.15, 0.45)
  }
  // umbrella stand at the station office door, and one umbrella forgotten at the bus stop
  {
    const us = at(14.25, -4.1)
    put(us, cyl(0.16, 0.14, 0.42, C.stoneDark, 10), 0, 0.21, 0)
    put(us, cone(0.09, 0.85, C.red, 6), 0.04, 0.68, 0, 0, 0.06, 0)
    put(us, cone(0.09, 0.8, C.hydrangeaBlue, 6), -0.05, 0.64, 0.03, 0, -0.08, 0.05)
    circle(14.25, -4.1, 0.2)
    put(staticRoot, cone(0.08, 0.8, C.leafLight, 6), 4.0, gh(4.0, 17.2) + 0.62, 17.2, 0, 0, -1.35) // left on the bench
  }

  // ============================================================ CATS
  const catParts = (fur, belly, patch) => {
    const torso = new THREE.Group()
    put(torso, rbox(0.62, 0.34, 0.34, fur, 0.14), 0, 0.42, 0)
    put(torso, rbox(0.36, 0.22, 0.36, belly, 0.1), 0.12, 0.34, 0)
    if (patch) put(torso, rbox(0.3, 0.06, 0.3, patch, 0.03), -0.08, 0.6, 0)
    const head = new THREE.Group()
    put(head, rbox(0.42, 0.36, 0.4, fur, 0.15), 0, 0, 0)
    put(head, rbox(0.1, 0.12, 0.22, belly, 0.05), 0.19, -0.07, 0)
    for (const s of [-1, 1]) {
      put(head, cone(0.1, 0.17, fur, 4), -0.02, 0.24, s * 0.12, Math.PI / 4)
      put(head, rbox(0.035, 0.08, 0.06, C.ink, 0.015), 0.21, 0.04, s * 0.09)
    }
    put(head, rbox(0.03, 0.03, 0.05, C.hydrangeaPink, 0.01), 0.235, -0.03, 0)
    const tail = new THREE.Group()
    put(tail, rbox(0.08, 0.46, 0.08, fur, 0.035), 0, 0.21, 0)
    return { torso, head, tail }
  }
  const asMesh = (group) => {
    const m = new THREE.Mesh(mergeColored(group), vcToon())
    m.castShadow = true
    addHull(m, 0.022)
    return m
  }

  // Mochi: asleep on a sun-warmed stone across from the house (hobbies)
  {
    const x = -9.4
    const z = 3.5
    const stone = at(x, z, 0.4)
    const st = sphere(0.7, C.stoneLight, 0)
    st.scale.set(1.15, 0.42, 0.9)
    put(stone, st, 0, 0.18, 0)
    circle(x, z, 0.75)
    blob(x, z, 1.1, 0.25)
    clear(x, z, 1.0)
    const parts = catParts(C.ginger, C.catWhite)
    const cat = new THREE.Group()
    put(cat, rbox(0.62, 0.3, 0.5, C.ginger, 0.15), 0, 0.17, 0)
    put(cat, rbox(0.3, 0.16, 0.4, C.catWhite, 0.08), 0.18, 0.1, 0.05)
    parts.head.position.set(0.3, 0.26, 0.12)
    parts.head.rotation.set(0.25, 0.4, -0.35)
    parts.head.children.forEach((c) => {
      if (c.userData.swatch === C.ink) c.scale.y = 0.25
    })
    cat.add(parts.head)
    for (let i = 0; i < 4; i++) put(cat, rbox(0.1, 0.1, 0.16, C.ginger, 0.04), -0.32 + i * 0.12, 0.08, -0.26 - Math.sin(i * 0.8) * 0.06, i * 0.35)
    const mesh = asMesh(cat)
    const holder = new THREE.Group()
    holder.position.set(x, gh(x, z) + 0.34, z)
    holder.rotation.y = 0.6
    holder.add(mesh)
    dynamicRoot.add(holder)
    updaters.push(({ t }) => {
      const b = Math.sin(t * 1.4)
      mesh.scale.set(1, 1 + b * 0.035, 1 + b * 0.02)
    })
    interactable({ id: 'cat', name: CAT.title, label: 'Mochi · hobbies', verb: 'Pet', x, z: SOUTH_EDGE + 0.2, sz: z, height: 1.15, radius: 1.7, entry: CAT })
  }

  // Kaya and Anu: patrol the street together; pet one and she follows you
  function walkingCat({ id, entry, label, fur, belly, patch, x, z, side, area = { minX: -13, maxX: 13, minZ: -0.9, maxZ: 0.9 } }) {
    const parts = catParts(fur, belly, patch)
    const torso = asMesh(parts.torso)
    const head = asMesh(parts.head)
    const tail = asMesh(parts.tail)
    const root = new THREE.Group()
    const body = new THREE.Group()
    root.add(body)
    body.add(torso)
    head.position.set(0.38, 0.62, 0)
    body.add(head)
    tail.position.set(-0.3, 0.48, 0)
    tail.rotation.z = 0.5
    body.add(tail)
    const legs = []
    const legGeo = rbox(0.1, 0.26, 0.1, fur, 0.04).geometry.clone().translate(0, -0.13, 0)
    for (const [lx, lz] of [[0.2, 0.11], [0.2, -0.11], [-0.2, 0.11], [-0.2, -0.11]]) {
      const l = new THREE.Mesh(legGeo, mat(fur))
      l.position.set(lx, 0.27, lz)
      l.castShadow = true
      body.add(l)
      legs.push(l)
    }
    root.position.set(x, gh(x, z), z)
    dynamicRoot.add(root)
    const anchor = root.position
    const target = new THREE.Vector3(x, 0, z)
    let wait = 2
    let facing = 0
    let stuck = 0
    let following = false
    const it = interactable({ id, name: entry.title, label, verb: 'Pet', anchor, height: 1.3, radius: 1.5, entry })
    it.freeze = false
    // her tag's ✓ means "following you" rather than "found" (she still counts as found)
    it.check = false
    it.lookAt = (px, pz) => {
      facing = Math.atan2(-(pz - anchor.z), px - anchor.x)
      root.rotation.y = facing
    }
    it.onInteract = () => {
      following = !following
      it.check = following
      it.verb = following ? 'Let go' : 'Pet'
    }
    updaters.push(({ t, dt, focus }) => {
      tail.rotation.x = Math.sin(t * 2.6) * 0.4
      if (it.freeze) {
        head.rotation.y = Math.sin(t * 2) * 0.12
        return
      }
      if (following) {
        const fx = focus.x - anchor.x
        const fz = focus.z - anchor.z
        const fd = Math.hypot(fx, fz)
        if (fd > 1.9) {
          // trail behind you, a little to one side so two cats don't stack up
          target.set(focus.x - (fx / fd) * 1.4 - (fz / fd) * side, 0, focus.z - (fz / fd) * 1.4 + (fx / fd) * side)
          wait = 0
        }
      }
      if (wait > 0) {
        wait -= dt
        legs.forEach((l) => (l.rotation.z *= 0.8))
        body.position.y = Math.sin(t * 2) * 0.008
        return
      }
      const dx = target.x - anchor.x
      const dz = target.z - anchor.z
      const dist = Math.hypot(dx, dz)
      if (dist < 0.15) {
        wait = following ? 0.3 : R(1.5, 4.5)
        if (!following) target.set(R(area.minX, area.maxX), 0, R(area.minZ, area.maxZ))
        return
      }
      const sp = following ? (dist > 4 ? 4.4 : 2.6) : 0.9
      const nx = anchor.x + (dx / dist) * sp * dt
      const nz = anchor.z + (dz / dist) * sp * dt
      if (canStand(nx, nz)) {
        anchor.x = nx
        anchor.z = nz
        stuck = 0
      } else if (following) {
        stuck += dt
        if (stuck > 1.2 && canStand(focus.x + side * 1.4, focus.z + 0.8)) {
          anchor.x = focus.x + side * 1.4
          anchor.z = focus.z + 0.8
          stuck = 0
        }
      } else {
        wait = 0.5
        target.set(R(area.minX, area.maxX), 0, R(area.minZ, area.maxZ))
      }
      anchor.y = heightAt(anchor.x, anchor.z)
      let d = Math.atan2(-dz, dx) - facing
      d = Math.atan2(Math.sin(d), Math.cos(d))
      facing += d * Math.min(1, dt * 6)
      root.rotation.y = facing
      const freq = 8 + sp * 3
      legs.forEach((l, k) => (l.rotation.z = Math.sin(t * freq + (k % 2) * Math.PI + (k > 1 ? 0.6 : 0)) * 0.55))
      body.position.y = Math.abs(Math.sin(t * freq)) * 0.025
    })
  }

  walkingCat({ id: 'cat-kaya', entry: KAYA, label: 'Kaya', fur: C.catWhite, belly: C.catWhite, patch: mix(C.catWhite, C.catGray, 0.35), x: 4, z: 0.4, side: -0.7 })
  walkingCat({ id: 'cat-anu', entry: ANU, label: 'Anu', fur: C.catBrown, belly: mix(C.catBrown, C.earth, 0.45), patch: shade(C.catBrown, 0.7), x: -3, z: -0.3, side: 0.7 })

  // Kuro: the station master, on the bench in front of the hut
  {
    const bx = 15.3
    const bz = -2.75
    const bg = at(bx, bz)
    put(bg, rbox(1.9, 0.12, 0.55, C.woodLight, 0.04), 0, 0.48, 0)
    put(bg, rbox(1.9, 0.42, 0.1, C.woodLight, 0.04), 0, 0.78, -0.25)
    for (const sx of [-0.8, 0.8]) put(bg, rbox(0.12, 0.46, 0.46, C.woodDark, 0.03), sx, 0.23, 0)
    box(bx - 1.05, bx + 1.05, bz - 0.4, bz + 0.35)
    const parts = catParts(C.catBlack, C.catBlack)
    parts.head.children.forEach((c) => {
      if (c.userData.swatch === C.ink) c.userData.swatch = C.sun
    })
    const cat = new THREE.Group()
    put(cat, rbox(0.34, 0.44, 0.32, C.catBlack, 0.14), 0, 0.22, 0)
    parts.head.position.set(0.06, 0.58, 0)
    cat.add(parts.head)
    for (const s of [-1, 1]) put(cat, rbox(0.1, 0.06, 0.1, C.catBlack, 0.03), 0.16, 0.03, s * 0.08)
    put(cat, cyl(0.17, 0.19, 0.1, C.kawara, 12), 0.04, 0.84, 0)
    put(cat, rbox(0.16, 0.03, 0.26, C.ink, 0.01), 0.18, 0.79, 0)
    const mesh = asMesh(cat)
    const tail = asMesh(parts.tail)
    const holder = new THREE.Group()
    holder.position.set(bx + 0.4, gh(bx, bz) + 0.54, bz)
    holder.rotation.y = -Math.PI / 2 // facing the street
    holder.add(mesh)
    tail.position.set(-0.16, 0.06, 0)
    tail.rotation.set(0, 0, 1.3)
    holder.add(tail)
    dynamicRoot.add(holder)
    updaters.push(({ t }) => {
      tail.rotation.x = Math.sin(t * 1.6) * 0.5
      mesh.rotation.y = Math.sin(t * 0.4) * 0.08
    })
    interactable({ id: 'cat-kuro', name: KURO.title, label: 'Kuro · station master', verb: 'Salute', x: bx + 0.4, z: NORTH_EDGE, sz: bz, height: 1.8, radius: 1.2, entry: KURO })
  }

  // ======================================================== GROUND + WATER
  const terrain = new THREE.Mesh(buildTerrain(ao), toonMaterial({ vertexColors: true, smooth: true }))
  terrain.receiveShadow = true
  terrain.castShadow = true
  terrain.name = 'terrain'

  const waterMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.22, metalness: 0, transparent: true, opacity: 0.9 })
  waterMat.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = U.uTime
    shader.uniforms.uGlow = U.uGlow
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\nvarying vec3 vWPos;')
      .replace('#include <worldpos_vertex>', '#include <worldpos_vertex>\nvWPos = (modelMatrix * vec4(transformed, 1.0)).xyz;')
    shader.fragmentShader = shader.fragmentShader
      .replace('#include <common>', '#include <common>\nuniform float uTime;\nuniform float uGlow;\nvarying vec3 vWPos;')
      .replace(
        '#include <color_fragment>',
        `#include <color_fragment>
        float w1 = sin(vWPos.x * 2.1 + uTime * 0.9 + sin(vWPos.z * 1.3 + uTime * 0.6) * 1.4);
        float w2 = sin(vWPos.z * 2.4 - uTime * 0.7 + sin(vWPos.x * 1.1) * 1.2);
        diffuseColor.rgb += smoothstep(0.88, 1.0, w1 * w2) * 0.2;`,
      )
      .replace('#include <emissivemap_fragment>', '#include <emissivemap_fragment>\ntotalEmissiveRadiance += diffuseColor.rgb * 0.28 / max(1.0, uGlow * 1.6);')
  }
  const water = new THREE.Mesh(buildWater(puddles), waterMat)
  water.receiveShadow = true
  water.name = 'water'

  // ======================================================== GRASS, RICE, FLOWERS
  function tuftGeometry(h = 0.42, w = 0.075) {
    const pos = []
    for (let b = 0; b < 3; b++) {
      const a = (b / 3) * Math.PI * 2 + 0.3
      const ca = Math.cos(a)
      const sa = Math.sin(a)
      pos.push(-w * sa, 0, w * ca, w * sa, 0, -w * ca, ca * 0.12, h * (0.85 + b * 0.08), sa * 0.12)
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3))
    const nrm = []
    for (let i = 0; i < pos.length / 3; i++) nrm.push(0, 1, 0)
    g.setAttribute('normal', new THREE.Float32BufferAttribute(nrm, 3))
    return g
  }
  const dummy = new THREE.Object3D()
  const tint = new THREE.Color()
  const grassSpots = []
  const riceSpots = []
  const flowerSpots = []
  {
    const step = 0.4
    for (let z = PLAY.minZ - 3; z < PLAY.maxZ + 2; z += step) {
      for (let x = PLAY.minX - 4; x < PLAY.maxX + 4; x += step) {
        const jx = x + (random() - 0.5) * step * 1.4
        const jz = z + (random() - 0.5) * step * 1.4
        const s = sample(jx, jz)
        if (s.paddy || s.platform || s.track || s.stream > 0.15 || s.steps > 0.2 || s.pad > 0.6) continue
        if (blocked(jx, jz)) continue
        let d = 1 - s.path * 1.25
        d *= 0.3 + 0.9 * sstep(0.32, 0.62, N.fbm(jx * 0.22, jz * 0.22))
        if (s.rim > 2) d *= 0.35
        if (s.plateau > 0.5) d *= 0.25
        if (random() < d * 0.62) grassSpots.push([jx, s.h, jz, s.path])
        const edge = s.path > 0.05 && s.path < 0.6 ? 0.22 : 0
        if (random() < (edge + sstep(0.7, 0.85, N.noise(jx * 0.35 + 50, jz * 0.35)) * 0.12) * (1 - s.path)) flowerSpots.push([jx, s.h, jz])
      }
    }
    for (const p of PADDIES) {
      for (let x = p.minX + 0.7; x < p.maxX - 0.55; x += 0.48) {
        for (let z = p.minZ + 0.7; z < p.maxZ - 0.55; z += 0.45) riceSpots.push([x + R(-0.06, 0.06), p.level - 0.05, z + R(-0.06, 0.06)])
      }
    }
  }
  const grassMat = toonMaterial({ vertexColors: false, wind: 'instanced', side: THREE.DoubleSide, smooth: true })
  const grassCols = [C.grass, C.grassLight, C.grassDark, C.dryGrass].map((h) => new THREE.Color(h))
  const grass = new THREE.InstancedMesh(tuftGeometry(), grassMat, grassSpots.length)
  grass.name = 'grass'
  grassSpots.forEach(([x, y, z, path], i) => {
    const k = R(0.65, 1.3) * (1 - path * 0.5)
    dummy.position.set(x, y - 0.02, z)
    dummy.rotation.set(0, R(0, 6.28), 0)
    dummy.scale.set(k, k * R(0.8, 1.25), k)
    dummy.updateMatrix()
    grass.setMatrixAt(i, dummy.matrix)
    const n = N.fbm(x * 0.18, z * 0.18)
    tint.copy(grassCols[0]).lerp(n > 0.5 ? grassCols[1] : grassCols[2], Math.abs(n - 0.5) * 1.8)
    tint.lerp(grassCols[3], sstep(0.62, 0.8, N.fbm(x * 0.07 + 40, z * 0.07 - 12)) * 0.6)
    grass.setColorAt(i, tint.multiplyScalar(R(0.92, 1.08)))
  })
  grass.receiveShadow = true
  dynamicRoot.add(grass)

  const riceCol = new THREE.Color(C.leafLight)
  const rice = new THREE.InstancedMesh(tuftGeometry(), grassMat, riceSpots.length)
  rice.name = 'rice'
  riceSpots.forEach(([x, y, z], i) => {
    dummy.position.set(x, y, z)
    dummy.rotation.set(0, R(0, 6.28), 0)
    const k = R(1.1, 1.4)
    dummy.scale.set(k * 0.9, k * 1.5, k * 0.9)
    dummy.updateMatrix()
    rice.setMatrixAt(i, dummy.matrix)
    rice.setColorAt(i, tint.copy(riceCol).multiplyScalar(R(0.9, 1.1)))
  })
  rice.receiveShadow = false
  dynamicRoot.add(rice)

  const flowerCols = [C.plaster, mix(C.sun, C.plaster, 0.2), C.hydrangeaPink, C.hydrangeaBlue].map((h) => new THREE.Color(h))
  const flowers = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.075, 0), toonMaterial({ vertexColors: false }), Math.max(1, flowerSpots.length))
  flowerSpots.forEach(([x, y, z], i) => {
    dummy.position.set(x, y + R(0.16, 0.28), z)
    dummy.rotation.set(R(0, 3), R(0, 3), 0)
    dummy.scale.set(1, 0.55, 1)
    dummy.updateMatrix()
    flowers.setMatrixAt(i, dummy.matrix)
    flowers.setColorAt(i, flowerCols[N.noise(x * 0.5, z * 0.5) > 0.55 ? Math.floor(random() * 4) : random() > 0.3 ? 0 : 1])
  })
  flowers.receiveShadow = true
  dynamicRoot.add(flowers)

  // =============================================================== KOI in the stream
  {
    const koiGroup = new THREE.Group()
    put(koiGroup, rbox(0.42, 0.1, 0.16, C.ginger, 0.05), 0, 0, 0)
    put(koiGroup, rbox(0.14, 0.11, 0.17, C.plaster, 0.05), 0.06, 0.01, 0)
    put(koiGroup, cone(0.1, 0.18, C.ginger, 4), -0.27, 0, 0, 0, 0, Math.PI / 2)
    const KOI = 6
    const koi = new THREE.InstancedMesh(mergeColored(koiGroup), vcToon(), KOI)
    koi.frustumCulled = false
    const fish = Array.from({ length: KOI }, (_, i) => ({ s: R(0.36, 0.64), speed: R(0.006, 0.012) * (i % 2 ? 1 : -1), lane: R(-0.7, 0.7), wob: R(0, 6) }))
    const pts = STREAM.pts
    let total = 0
    for (let i = 1; i < pts.length; i++) total += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1])
    const pointAt = (u) => {
      let d = u * total
      for (let i = 0; i < pts.length - 1; i++) {
        const [ax, az] = pts[i]
        const [bx, bz] = pts[i + 1]
        const l = Math.hypot(bx - ax, bz - az)
        if (d <= l) return { x: ax + ((bx - ax) * d) / l, z: az + ((bz - az) * d) / l, tx: (bx - ax) / l, tz: (bz - az) / l }
        d -= l
      }
      return { x: 0, z: 10, tx: 1, tz: 0 }
    }
    dynamicRoot.add(koi)
    updaters.push(({ t, dt }) => {
      fish.forEach((f, i) => {
        f.s += f.speed * dt * 2
        if (f.s < 0.34 || f.s > 0.66) f.speed *= -1
        f.s = Math.min(0.66, Math.max(0.34, f.s))
        const p = pointAt(f.s)
        const lat = f.lane + Math.sin(t * 0.7 + f.wob) * 0.25
        dummy.position.set(p.x - p.tz * lat, -0.5, p.z + p.tx * lat)
        dummy.rotation.set(0, Math.atan2(-p.tz, p.tx) + (f.speed < 0 ? Math.PI : 0) + Math.sin(t * 5 + f.wob) * 0.18, 0)
        dummy.scale.setScalar(i % 3 === 0 ? 1.2 : 1)
        dummy.updateMatrix()
        koi.setMatrixAt(i, dummy.matrix)
      })
      koi.instanceMatrix.needsUpdate = true
    })
  }

  // ============================================================ LIT LAMPS on the station boards
  {
    const litMesh = new THREE.InstancedMesh(new THREE.BoxGeometry(0.24, 0.2, 0.2), new THREE.MeshBasicMaterial({ color: '#ffffff' }), litBoxes.length)
    const haloTex = (() => {
      const c = document.createElement('canvas')
      c.width = c.height = 64
      const x = c.getContext('2d')
      const g = x.createRadialGradient(32, 32, 0, 32, 32, 32)
      g.addColorStop(0, 'rgba(255,214,140,0.85)')
      g.addColorStop(0.45, 'rgba(255,190,110,0.3)')
      g.addColorStop(1, 'rgba(255,170,80,0)')
      x.fillStyle = g
      x.fillRect(0, 0, 64, 64)
      const t = new THREE.CanvasTexture(c)
      t.colorSpace = THREE.SRGBColorSpace
      return t
    })()
    const halos = new THREE.InstancedMesh(new THREE.PlaneGeometry(1.5, 1.5), new THREE.MeshBasicMaterial({ map: haloTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }), litBoxes.length)
    const off = new THREE.Color('#000000')
    const on = new THREE.Color(C.glow)
    const c = new THREE.Color()
    litBoxes.forEach((_, i) => {
      litMesh.setColorAt(i, off)
      halos.setColorAt(i, off)
    })
    litMesh.frustumCulled = halos.frustumCulled = false
    dynamicRoot.add(litMesh, halos)
    updaters.push(({ t, dt, camera }) => {
      let any = false
      litBoxes.forEach((b, i) => {
        litLevels[i] += (litTarget[i] - litLevels[i]) * Math.min(1, dt * 2.5)
        const k = litLevels[i] * (1 + Math.sin(t * 9 + i) * 0.05 + Math.sin(t * 23 + i * 3) * 0.04)
        const show = k > 0.01
        if (show) any = true
        litMesh.setColorAt(i, c.copy(off).lerp(on, Math.min(1, k)))
        halos.setColorAt(i, c.copy(off).lerp(on, Math.min(1, k * 0.9)))
        dummy.position.set(b.x, b.y, b.z)
        dummy.quaternion.identity()
        dummy.scale.setScalar(show ? 1 : 0.0001)
        dummy.updateMatrix()
        litMesh.setMatrixAt(i, dummy.matrix)
        dummy.quaternion.copy(camera.quaternion)
        dummy.updateMatrix()
        halos.setMatrixAt(i, dummy.matrix)
      })
      litMesh.instanceColor.needsUpdate = halos.instanceColor.needsUpdate = true
      litMesh.instanceMatrix.needsUpdate = halos.instanceMatrix.needsUpdate = true
      litMesh.visible = halos.visible = any
    })
  }

  // ============================================================ DANDELION FLUFF
  {
    const COUNT = 70
    const fluffMat = new THREE.MeshBasicMaterial({ color: C.plaster, transparent: true, opacity: 0.85 })
    const fluff = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.045, 0), fluffMat, COUNT)
    fluff.frustumCulled = false
    const motes = Array.from({ length: COUNT }, () => ({ x: R(-18, 18), y: R(0.3, 4), z: R(-14, 14), v: R(0.08, 0.25), p: R(0, 6) }))
    dynamicRoot.add(fluff)
    updaters.push(({ t, dt, focus }) => {
      fluffMat.opacity = 0.85 * (1 - nightness() * 0.9)
      fluff.visible = fluffMat.opacity > 0.05
      motes.forEach((m, i) => {
        m.x += (0.35 + Math.sin(t * 0.5 + m.p) * 0.25) * dt
        m.y += Math.sin(t * 0.9 + m.p) * m.v * dt
        m.z += Math.cos(t * 0.4 + m.p) * 0.12 * dt
        if (m.x - focus.x > 18 || Math.abs(m.z - focus.z) > 15) {
          m.x = focus.x - 18
          m.z = focus.z + R(-14, 14)
          m.y = gh(m.x, m.z) + R(0.4, 3.5)
        }
        dummy.position.set(m.x, m.y, m.z)
        dummy.quaternion.identity()
        dummy.scale.setScalar(1)
        dummy.updateMatrix()
        fluff.setMatrixAt(i, dummy.matrix)
      })
      fluff.instanceMatrix.needsUpdate = true
    })
  }

  // ============================================================ LIFE: fireflies, smoke, dragonflies, dust
  // How dark it is, from the lamp-glow level the sky sets (0 by day → 1 at night)
  function nightness() {
    return Math.min(1, Math.max(0, (U.uGlow.value - 1.3) / 1.1))
  }
  const glowTex = (() => {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const x = c.getContext('2d')
    const g = x.createRadialGradient(32, 32, 0, 32, 32, 32)
    g.addColorStop(0, 'rgba(255,255,220,1)')
    g.addColorStop(0.2, 'rgba(240,255,170,0.8)')
    g.addColorStop(1, 'rgba(200,255,120,0)')
    x.fillStyle = g
    x.fillRect(0, 0, 64, 64)
    const t = new THREE.CanvasTexture(c)
    t.colorSpace = THREE.SRGBColorSpace
    return t
  })()

  // Fireflies over the stream and the paddies, blinking after dusk
  {
    const COUNT = 64
    const ff = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.5, 0.5), new THREE.MeshBasicMaterial({ map: glowTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, fog: false }), COUNT)
    ff.frustumCulled = false
    const flies = Array.from({ length: COUNT }, (_, i) => {
      // mostly along the stream, some over the paddies and in the gardens off the street
      const where = i % 4
      const x = where === 0 ? R(-28, -16.5) : where === 1 ? R(-16, 16) : R(-26, 26)
      const z = where === 0 ? R(-8, -2.5) : where === 1 ? R(2.4, 6.5) : R(7.4, 12.8)
      return { x, z, y: R(0.35, 1.6), p: R(0, 6.28), rate: R(1.2, 2.6), r: R(0.4, 1.2) }
    })
    const warm = new THREE.Color('#e4ff8a')
    const c = new THREE.Color()
    flies.forEach((_, i) => ff.setColorAt(i, c.setRGB(0, 0, 0)))
    dynamicRoot.add(ff)
    updaters.push(({ t, camera }) => {
      const n = nightness()
      ff.visible = n > 0.02
      if (!ff.visible) return
      const slow = reducedMotion ? 0.3 : 1
      flies.forEach((f, i) => {
        const a = t * 0.35 * slow + f.p
        dummy.position.set(f.x + Math.cos(a) * f.r, f.y + Math.sin(t * 0.8 * slow + f.p) * 0.25, f.z + Math.sin(a * 1.3) * f.r)
        dummy.quaternion.copy(camera.quaternion)
        dummy.scale.setScalar(1)
        dummy.updateMatrix()
        ff.setMatrixAt(i, dummy.matrix)
        const blink = Math.pow(Math.max(0, Math.sin(t * f.rate * slow + f.p)), 3)
        ff.setColorAt(i, c.copy(warm).multiplyScalar(n * (0.4 + blink * 1.1)))
      })
      ff.instanceMatrix.needsUpdate = true
      ff.instanceColor.needsUpdate = true
    })
  }

  // Smoke: a lazy curl from the house chimney, and incense at the shrine
  {
    // incense burner in front of the shrine hall
    const ib = at(2.4, -16.15)
    put(ib, rbox(0.7, 0.3, 0.7, C.stoneDark, 0.06), 0, 0.15, 0)
    put(ib, cyl(0.3, 0.22, 0.4, C.ink, 12), 0, 0.5, 0)
    put(ib, cyl(0.34, 0.34, 0.06, C.woodDark, 12), 0, 0.72, 0)
    circle(2.4, -16.15, 0.32)
    const sources = [
      { x: -7.4, y: gh(-10, -6.1) + 5.25, z: -7.1, n: 12, size: 0.42, rise: 0.55, life: 4.2 },
      { x: 2.4, y: gh(2.4, -16.15) + 0.8, z: -16.15, n: 8, size: 0.14, rise: 0.35, life: 3.2 },
    ]
    const total = sources.reduce((a, s) => a + s.n, 0)
    const smoke = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), new THREE.MeshBasicMaterial({ color: '#f3efe6', transparent: true, opacity: 0.42, depthWrite: false }), total)
    smoke.frustumCulled = false
    const puffs = []
    sources.forEach((s) => {
      for (let i = 0; i < s.n; i++) puffs.push({ s, age: (i / s.n) * s.life, seed: R(0, 6) })
    })
    dynamicRoot.add(smoke)
    updaters.push(({ t, dt }) => {
      puffs.forEach((p, i) => {
        const s = p.s
        p.age += dt
        if (p.age > s.life) {
          p.age -= s.life
          p.seed = R(0, 6)
        }
        const k = p.age / s.life
        const grow = Math.sin(Math.min(1, k * 1.2) * Math.PI * 0.5)
        const fade = 1 - Math.pow(k, 2.2)
        dummy.position.set(s.x + k * 0.9 + Math.sin(t * 0.7 + p.seed) * 0.12 * k, s.y + k * s.rise * s.life, s.z - k * 0.4)
        dummy.quaternion.identity()
        dummy.scale.setScalar(s.size * (0.4 + grow * 1.1) * fade + 0.0001)
        dummy.updateMatrix()
        smoke.setMatrixAt(i, dummy.matrix)
      })
      smoke.instanceMatrix.needsUpdate = true
    })
  }

  // Red dragonflies (akatombo) darting over the paddies by day
  {
    const df = new THREE.Group()
    put(df, rbox(0.36, 0.05, 0.05, C.red, 0.02), 0, 0, 0)
    put(df, rbox(0.06, 0.012, 0.5, C.plaster, 0.005), 0.06, 0.02, 0)
    put(df, rbox(0.06, 0.012, 0.44, C.plaster, 0.005), -0.03, 0.02, 0)
    const COUNT = 5
    const dragon = new THREE.InstancedMesh(mergeColored(df), vcToon(), COUNT)
    dragon.frustumCulled = false
    const flies = Array.from({ length: COUNT }, (_, i) => {
      const home = i < 3 ? [R(-27, -17.5), R(-7.5, -3)] : [R(-12, 12), R(7.8, 12)]
      return { home, x: home[0], z: home[1], tx: home[0], tz: home[1], y: R(0.9, 1.6), wait: R(0, 2), face: 0 }
    })
    dynamicRoot.add(dragon)
    updaters.push(({ t, dt }) => {
      const day = 1 - Math.min(1, Math.max(0, (U.uGlow.value - 0.9) / 0.8))
      dragon.visible = day > 0.05
      if (!dragon.visible) return
      const speed = reducedMotion ? 0.35 : 1
      flies.forEach((f, i) => {
        f.wait -= dt * speed
        if (f.wait <= 0) {
          f.tx = f.home[0] + R(-3, 3)
          f.tz = f.home[1] + R(-2.2, 2.2)
          f.wait = R(0.8, 2.6)
        }
        const k = Math.min(1, dt * 3.2 * speed)
        const dx = f.tx - f.x
        const dz = f.tz - f.z
        f.x += dx * k
        f.z += dz * k
        if (Math.hypot(dx, dz) > 0.05) f.face = Math.atan2(-dz, dx)
        dummy.position.set(f.x, f.y + Math.sin(t * 3 + i) * 0.06, f.z)
        dummy.rotation.set(0, f.face, 0)
        dummy.scale.set(1.7, 1.7, 1.7 * (0.75 + Math.abs(Math.sin(t * 40 + i)) * 0.25)) // wing shimmer
        dummy.updateMatrix()
        dragon.setMatrixAt(i, dummy.matrix)
      })
      dragon.instanceMatrix.needsUpdate = true
    })
  }

  // Dust puffs at the avatar's feet (spawned from the walk cycle)
  const dustPool = []
  let spawnDust = () => {}
  if (!reducedMotion) {
    const COUNT = 24
    const dust = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.11, 0), new THREE.MeshBasicMaterial({ color: C.plaster, transparent: true, opacity: 0.72, depthWrite: false }), COUNT)
    dust.frustumCulled = false
    for (let i = 0; i < COUNT; i++) dustPool.push({ age: 9, x: 0, y: 0, z: 0, vx: 0, vz: 0 })
    let next = 0
    spawnDust = (x, y, z, facing) => {
      for (let k = 0; k < 2; k++) {
        const p = dustPool[next]
        next = (next + 1) % COUNT
        const side = k ? 1 : -1
        p.age = 0
        p.x = x + Math.cos(facing) * 0.14 * side
        p.z = z - Math.sin(facing) * 0.14 * side
        p.y = y + 0.06
        p.vx = -Math.sin(facing) * 0.35 + R(-0.15, 0.15)
        p.vz = -Math.cos(facing) * 0.35 + R(-0.15, 0.15)
      }
    }
    dynamicRoot.add(dust)
    updaters.push(({ dt }) => {
      dustPool.forEach((p, i) => {
        p.age += dt
        const k = Math.min(1, p.age / 0.55)
        dummy.position.set(p.x + p.vx * k * 0.5, p.y + k * 0.18, p.z + p.vz * k * 0.5)
        dummy.quaternion.identity()
        dummy.scale.setScalar(k >= 1 ? 0.0001 : (0.5 + k * 1.1) * (1 - k))
        dummy.updateMatrix()
        dust.setMatrixAt(i, dummy.matrix)
      })
      dust.instanceMatrix.needsUpdate = true
    })
  }

  // ---------------------------------------------------------- finish up
  const baked = bakeStatic(staticRoot, { groundAt: gh })
  dynamicRoot.add(terrain, water)

  // Places on the map; each lists the things you can discover there
  const ids = (prefix, n) => Array.from({ length: n }, (_, i) => `${prefix}-${i}`)
  const landmarks = [
    { key: 'rice', label: 'Rice paddies', short: 'Rice', x: -22.3, z: NORTH_EDGE, ids: ids('skill', SKILLS.length) },
    { key: 'home', label: 'Home', short: 'Home', x: -10, z: NORTH_EDGE, ids: ['house', 'cat'] },
    { key: 'shrine', label: 'Shrine', short: 'Shrine', x: 0, z: -15.2, ids: ids('hack', HACKATHONS.length) },
    { key: 'plaza', label: 'Plaza', short: 'Plaza', x: 0, z: 1.4, ids: ['board', 'cat-kaya', 'cat-anu'] },
    { key: 'workshop', label: 'Workshop', short: 'Shop', x: 6.3, z: NORTH_EDGE, ids: ['central-auto'] },
    { key: 'station', label: 'Station', short: 'Station', x: 21, z: NORTH_EDGE, ids: [...ids('career', CAREER.length), 'cat-kuro'] },
    { key: 'post', label: 'Post office', short: 'Post', x: -2.5, z: 18, ids: ['mailbox'] },
    { key: 'bus', label: 'Bus stop', short: 'Bus', x: 1.6, z: 17.2, ids: ['exit'] },
  ]

  // Districts: a title card slides in when you walk into one
  const inBox = (x, z, x0, x1, z0, z1) => x >= x0 && x <= x1 && z >= z0 && z <= z1
  const areas = [
    { key: 'shrine', title: 'Shrine of Wins', kicker: 'Hackathon victories', noun: 'plaques read', ids: ids('hack', HACKATHONS.length), test: (x, z) => z < -8.4 && Math.abs(x) < 9.5 },
    { key: 'rice', title: 'Rice Terraces', kicker: 'Skills I grow', noun: 'signs read', ids: ids('skill', SKILLS.length), test: (x, z) => inBox(x, z, -30, -15.4, -10, 2.6) },
    { key: 'home', title: "William's House", kicker: 'About me', noun: 'found', ids: ['house', 'cat'], test: (x, z) => inBox(x, z, -15.4, -3.2, -10, 2.6) },
    { key: 'plaza', title: 'Village Plaza', kicker: 'Start here', noun: 'found', ids: ['board', 'cat-kaya', 'cat-anu'], test: (x, z) => inBox(x, z, -3.2, 3.2, -8.4, 6.8) },
    { key: 'workshop', title: 'The Workshop', kicker: 'Projects', noun: 'found', ids: ['central-auto'], test: (x, z) => inBox(x, z, 3.2, 13.1, -10, 2.6) },
    { key: 'station', title: 'Career Line Station', kicker: 'Experience · one stop per role', noun: 'stops visited', ids: ids('career', CAREER.length), test: (x, z) => inBox(x, z, 13.1, 31, -10, 2.6) },
    { key: 'south', title: 'Post Office & Bus Stop', kicker: 'Say hello · or head back', noun: 'found', ids: ['mailbox'], test: (x, z) => z > 12.6 },
  ]
  const areaAt = (x, z) => areas.find((a) => a.test(x, z)) || null

  return {
    areaAt,
    spawnDust: (x, y, z, facing) => spawnDust(x, y, z, facing),
    setStationClock: (h, m) => setStationClock(h, m),
    staticRoot: baked,
    dynamicRoot,
    colliders,
    interactables,
    updaters,
    heightAt,
    canStand,
    route,
    landmarks,
    map: { paths: PATHS, stream: STREAM, paddies: PADDIES, platform: PLATFORM, pads: PADS, bounds: PLAY },
    spawn: { x: 0.45, z: 19.8, facing: Math.PI },
    bike: rideBike,
    stats: { bakedVertices: baked.userData.vertexCount, grass: grassSpots.length, rice: riceSpots.length, flowers: flowerSpots.length },
  }
}
