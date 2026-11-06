import * as THREE from 'three'
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { makeNoise } from './noise.js'
import { C } from './palette.js'

// ---------------------------------------------------------------------------
// One main street, everything on it. The camera looks north, so every
// landmark sits NORTH of the street and faces south, toward you.
//
//                    cedar forest ── shrine + ema racks (h=4.5) ── cedar forest
//                                       ▲ stone steps
//   rice paddies │ house (About)  ⛩ torii   workshop (Projects) │ hut │ station platform → track
//   ═══════════════════════════ MAIN STREET ═══ plaza ═══════════════════════════
//      well · Mochi on her stone     welcome sign · notice board        trees
//   ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ stream ~~ bridge ~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                     post office · post box │ bus stop (arrive / leave)
// ---------------------------------------------------------------------------

const N = makeNoise(11)
const sstep = (a, b, x) => {
  const t = Math.min(1, Math.max(0, (x - a) / (b - a)))
  return t * t * (3 - 2 * t)
}
const lerp = (a, b, t) => a + (b - a) * t

export const MESH = { minX: -40, maxX: 40, minZ: -30, maxZ: 31 }
export const PLAY = { minX: -29.5, maxX: 30.5, minZ: -20, maxZ: 21.6 }
export const WATER_Y = -0.42
export const HILL_TOP = 4.5
export const STREET_HW = 1.45

export const PATHS = [
  { id: 'street', kind: 'road', hw: STREET_HW, pts: [[-29, 0], [31, 0]] },
  { id: 'plaza', kind: 'road', hw: 3.1, pts: [[0, 1.2]] },
  { id: 'road-n', kind: 'road', hw: 1.15, pts: [[0, 1], [0, 7.4]] },
  { id: 'road-s', kind: 'road', hw: 1.15, pts: [[0, 12.4], [0.4, 19], [0.8, 32]] },
  { id: 'steps', kind: 'steps', hw: 1.05, pts: [[0, -1.6], [0, -15.3]] },
  { id: 'post', kind: 'path', hw: 0.85, pts: [[0.3, 17.6], [-4.8, 17.8]] },
  // the line worn down the street between the house and the workshop, walked every day
  { id: 'commute', kind: 'worn', hw: 0.5, pts: [[-10, -0.55], [-4, -0.35], [2, -0.45], [6.3, -0.6]] },
  // a little trodden track from the porch step to the street, used every morning
  { id: 'porch', kind: 'worn', hw: 0.55, pts: [[-10, -1.6], [-10, -2.2]] },
]

export const STREAM = { hw: 1.4, pts: [[-44, 10.6], [-20, 9.5], [-8, 10.6], [4, 9.4], [16, 10.5], [44, 9.1]] }
export const BRIDGE = { x: 0, hw: 1.15, z0: 7.2, z1: 12.6, rise: 0.4 }

// Three paddies side by side, each touching the street so its sign is on your way
export const PADDIES = [
  { minX: -28.4, maxX: -24.6, minZ: -8.2, maxZ: -2.3, level: 0.5 },
  { minX: -24.2, maxX: -20.4, minZ: -8.2, maxZ: -2.3, level: 0.36 },
  { minX: -20.0, maxX: -16.2, minZ: -8.2, maxZ: -2.3, level: 0.22 },
]
const BUND = 0.38

export const PADS = [
  { id: 'house', minX: -15.2, maxX: -4.8, minZ: -9.4, maxZ: -1.6, h: 0.05 },
  { id: 'workshop', minX: 3.4, maxX: 12.8, minZ: -9.4, maxZ: -1.6, h: 0.04 },
  { id: 'hut', minX: 13.2, maxX: 17.4, minZ: -8.4, maxZ: -1.6, h: 0.05 },
  { id: 'post', minX: -10.4, maxX: -2.8, minZ: 13.4, maxZ: 19.2, h: 0.08 },
  { id: 'busstop', minX: 2.2, maxX: 6.8, minZ: 15.4, maxZ: 19.2, h: 0.05 },
]

export const PLATFORM = { minX: 17.6, maxX: 30.2, minZ: -4.7, maxZ: -1.6, h: 0.22 }
export const TRACK = { minZ: -6.7, maxZ: -5.0, minX: 15.2, maxX: 31.4, h: 0.14 }

// ----------------------------------------------------------------- helpers
function distToPolyline(x, z, pts) {
  if (pts.length === 1) return { d: Math.hypot(x - pts[0][0], z - pts[0][1]) }
  let best = Infinity
  for (let i = 0; i < pts.length - 1; i++) {
    const [ax, az] = pts[i]
    const [bx, bz] = pts[i + 1]
    const vx = bx - ax
    const vz = bz - az
    let t = ((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz)
    t = Math.max(0, Math.min(1, t))
    const dx = x - (ax + vx * t)
    const dz = z - (az + vz * t)
    best = Math.min(best, dx * dx + dz * dz)
  }
  return { d: Math.sqrt(best) }
}
const inRect = (r, x, z, m = 0) => x >= r.minX - m && x <= r.maxX + m && z >= r.minZ - m && z <= r.maxZ + m
const rectEdgeDist = (r, x, z) => Math.min(x - r.minX, r.maxX - x, z - r.minZ, r.maxZ - z)

// The stair ramp: mostly linear so no stretch is too steep to climb
const hillRamp = (z) => {
  const t = Math.min(1, Math.max(0, (-8.4 - z) / 6.4))
  return HILL_TOP * (0.6 * t + 0.4 * sstep(0, 1, t))
}

/** Everything about the ground at (x, z): height plus what it is made of. */
export function sample(x, z) {
  const out = { h: 0, path: 0, kind: null, stream: 0, paddy: null, rim: 0, platform: false, track: false, steps: 0, plateau: 0, pad: 0 }

  // gentle field undulation
  let h = (N.fbm(x * 0.06, z * 0.06) - 0.5) * 0.4

  // terraced hillside behind the street, stone-faced risers every 1.25
  const t = sstep(-8.6, -15, z)
  if (t > 0) {
    const hill = HILL_TOP * t + t * (1 - t) * 2.6 * (N.fbm(x * 0.09 + 7, z * 0.09) - 0.5)
    const s = hill / 1.25
    const f = s - Math.floor(s)
    h += 1.25 * (Math.floor(s) + sstep(0.7, 1.0, f))
  }
  // shrine plateau
  const plateau = (1 - sstep(7.5, 9.5, Math.abs(x))) * sstep(-14.2, -15.0, z)
  if (plateau > 0) h = lerp(h, HILL_TOP + (N.noise(x * 0.4, z * 0.4) - 0.5) * 0.06, plateau)
  out.plateau = plateau

  // rice paddies, stepping down gently from west to east
  if (x < -15.6 && x > -29 && z > -8.8 && z < -1.7) {
    for (const p of PADDIES) {
      if (inRect(p, x, z)) {
        const e = rectEdgeDist(p, x, z)
        if (e < BUND) {
          out.paddy = 'bund'
          h = p.level + 0.15 - (e / BUND) * 0.04
        } else {
          out.paddy = 'mud'
          h = p.level - 0.15
        }
        break
      }
    }
    if (!out.paddy) h = lerp(h, 0.4, 0.6) // the bunds between paddies
  }

  // building pads
  for (const p of PADS) {
    if (inRect(p, x, z, 1.2)) {
      const w = sstep(-1.2, 0.3, rectEdgeDist(p, x, z))
      h = lerp(h, p.h, w)
      out.pad = Math.max(out.pad, w)
    }
  }

  // paths
  for (const path of PATHS) {
    const { d } = distToPolyline(x, z, path.pts)
    if (path.kind === 'steps') {
      const w = 1 - sstep(path.hw + 0.25, path.hw + 1.1, d)
      if (w > 0) {
        h = lerp(h, hillRamp(z), w)
        const surface = 1 - sstep(path.hw - 0.1, path.hw + 0.3, d)
        if (z < -8.4) {
          out.steps = Math.max(out.steps, surface)
        } else if (surface > out.path) {
          // the paved approach between the house and the workshop
          out.path = surface
          out.kind = 'road'
        }
      }
      continue
    }
    const w = 1 - sstep(path.hw, path.hw + 0.75, d)
    if (w > 0) {
      h = lerp(h, h * 0.4 - 0.03, w)
      if (w > out.path) {
        out.path = w
        out.kind = path.kind
      }
    }
  }

  // station platform and the track behind it
  if (inRect(PLATFORM, x, z)) {
    h = PLATFORM.h
    out.platform = true
  }
  if (x > TRACK.minX - 0.6 && x < TRACK.maxX && z > TRACK.minZ - 0.6 && z < TRACK.maxZ + 0.6) {
    const w = 1 - sstep(0, 0.6, Math.max(TRACK.minZ - z, z - TRACK.maxZ, TRACK.minX - x, 0))
    h = lerp(h, TRACK.h, w)
    out.track = w > 0.5
  }

  // forested rim that frames the valley
  const rim = Math.max(Math.abs(x + 0.5) - 30.5, -20 - z, 0)
  const south = Math.max(z - 21.6, 0)
  if (rim > 0 || south > 0) {
    const n = N.fbm(x * 0.12 + 3, z * 0.12)
    h += 5 * sstep(0, 7, rim) * (0.75 + n * 0.5) + 1.3 * sstep(0, 5, south) * (0.6 + n * 0.8)
    out.rim = Math.max(rim, south * 0.6)
  }

  // the stream carves through everything
  const sd = distToPolyline(x, z, STREAM.pts).d
  const sw = 1 - sstep(STREAM.hw - 0.3, STREAM.hw + 1.0, sd)
  if (sw > 0) {
    h = lerp(h, -1.05, sw)
    out.stream = sw
  }

  out.h = h
  return out
}

export function groundHeight(x, z) {
  return sample(x, z).h
}

/** Where feet go: ground, or the bridge deck over the stream. */
export function heightAt(x, z) {
  if (Math.abs(x - BRIDGE.x) < BRIDGE.hw + 0.3 && z > BRIDGE.z0 && z < BRIDGE.z1) {
    const t = (z - BRIDGE.z0) / (BRIDGE.z1 - BRIDGE.z0)
    const ends = lerp(groundHeight(x, BRIDGE.z0), groundHeight(x, BRIDGE.z1), t)
    return Math.max(ends, 0) + 0.2 + Math.sin(Math.PI * t) * BRIDGE.rise
  }
  return groundHeight(x, z)
}

// -------------------------------------------------------------- walkability
const WR = 0.5
const WW = Math.round((PLAY.maxX - PLAY.minX) / WR) + 1
const WH = Math.round((PLAY.maxZ - PLAY.minZ) / WR) + 1
let walkGrid = null

function buildWalkGrid() {
  walkGrid = new Uint8Array(WW * WH)
  const e = 0.3
  for (let j = 0; j < WH; j++) {
    for (let i = 0; i < WW; i++) {
      const x = PLAY.minX + i * WR
      const z = PLAY.minZ + j * WR
      const s = sample(x, z)
      let ok = !s.paddy && s.stream < 0.35 && !s.track && s.rim === 0
      if (ok) {
        const dx = groundHeight(x + e, z) - groundHeight(x - e, z)
        const dz = groundHeight(x, z + e) - groundHeight(x, z - e)
        ok = Math.hypot(dx, dz) / (2 * e) < 0.95
      }
      walkGrid[i + j * WW] = ok ? 1 : 0
    }
  }
}

export function canStand(x, z) {
  if (Math.abs(x - BRIDGE.x) < BRIDGE.hw && z > BRIDGE.z0 - 0.4 && z < BRIDGE.z1 + 0.4) return true
  if (x < PLAY.minX || x > PLAY.maxX || z < PLAY.minZ || z > PLAY.maxZ) return false
  if (!walkGrid) buildWalkGrid()
  const i0 = Math.floor((x - PLAY.minX) / WR)
  const j0 = Math.floor((z - PLAY.minZ) / WR)
  for (let j = j0; j <= j0 + 1; j++) {
    for (let i = i0; i <= i0 + 1; i++) {
      if (i < 0 || j < 0 || i >= WW || j >= WH || !walkGrid[i + j * WW]) return false
    }
  }
  return true
}

// ------------------------------------------------------------------- mesh
const col = new THREE.Color()
const tmp = new THREE.Color()
const lin = (hex) => new THREE.Color(hex)
const SW = Object.fromEntries(
  ['grass', 'grassLight', 'grassDark', 'dryGrass', 'moss', 'earth', 'earthLight', 'earthDark', 'mud', 'wetEarth', 'forestFloor', 'stone', 'stoneLight', 'stoneDark', 'plaster', 'kawara', 'leaf'].map((k) => [k, lin(C[k])]),
)

/** Ground mesh; `ao` holds {x, z, r, k} contact-shadow blobs so nothing looks pasted on. */
export function buildTerrain(ao = []) {
  const step = 0.4
  const nx = Math.round((MESH.maxX - MESH.minX) / step) + 1
  const nz = Math.round((MESH.maxZ - MESH.minZ) / step) + 1
  const geo = new THREE.PlaneGeometry(MESH.maxX - MESH.minX, MESH.maxZ - MESH.minZ, nx - 1, nz - 1)
  geo.rotateX(-Math.PI / 2)
  geo.translate((MESH.minX + MESH.maxX) / 2, 0, (MESH.minZ + MESH.maxZ) / 2)
  const pos = geo.attributes.position
  const colors = new Float32Array(pos.count * 3)
  const samples = new Array(pos.count)
  for (let i = 0; i < pos.count; i++) {
    const s = sample(pos.getX(i), pos.getZ(i))
    samples[i] = s
    pos.setY(i, s.h)
  }
  geo.computeVertexNormals()
  const nrm = geo.attributes.normal

  const aoAt = (x, z) => {
    let k = 0
    for (const b of ao) {
      const dx = x - b.x
      const dz = z - b.z
      const d2 = dx * dx + dz * dz
      if (d2 < b.r * b.r) k = Math.max(k, (1 - Math.sqrt(d2) / b.r) * (b.k ?? 0.35))
    }
    return k
  }

  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i)
    const z = pos.getZ(i)
    const s = samples[i]
    const ny = nrm.getY(i)
    const n1 = N.fbm(x * 0.18, z * 0.18)
    const n2 = N.fbm(x * 0.07 + 40, z * 0.07 - 12)
    const n3 = N.noise(x * 1.7, z * 1.7)

    col.copy(SW.grass).lerp(n1 > 0.5 ? SW.grassLight : SW.grassDark, Math.abs(n1 - 0.5) * 1.6)
    col.lerp(SW.dryGrass, sstep(0.6, 0.78, n2) * 0.55)

    const forest = Math.max(sstep(0, 4, s.rim), sstep(-11, -18, z) * sstep(8, 14, Math.abs(x)) * 0.6)
    if (forest > 0) col.lerp(SW.forestFloor, forest * 0.85)

    const steep = sstep(0.82, 0.55, ny)
    if (steep > 0 && !s.stream) {
      tmp.copy(SW.stone).lerp(n3 > 0.5 ? SW.stoneLight : SW.stoneDark, Math.abs(n3 - 0.5) * 1.4)
      tmp.lerp(SW.moss, sstep(0.55, 0.8, N.noise(x * 0.9 + 9, z * 0.9)) * 0.7)
      col.lerp(tmp, steep)
    }

    if (s.path > 0) {
      const ragged = sstep(0.32, 0.6, s.path + (n3 - 0.5) * 0.5)
      if (s.kind === 'worn') tmp.copy(SW.earth).lerp(SW.earthDark, 0.15 + n3 * 0.2)
      else tmp.copy(SW.earthLight).lerp(SW.earth, 0.3 + (n3 - 0.5) * 0.35 + (1 - sstep(0.7, 1, s.path)) * 0.3)
      col.lerp(tmp, ragged)
    }
    if (s.steps > 0) col.lerp(tmp.copy(SW.stone).lerp(SW.stoneDark, n3 * 0.4), s.steps)
    if (s.plateau > 0.5 && s.path === 0) col.lerp(tmp.copy(SW.earthLight).lerp(SW.plaster, 0.25 + n3 * 0.15), (s.plateau - 0.5) * 1.6 * sstep(6, 4, Math.abs(x)))

    if (s.paddy === 'mud') col.copy(SW.mud)
    else if (s.paddy === 'bund') col.lerp(SW.grassDark, 0.5)

    if (s.platform) col.copy(SW.stoneLight).lerp(SW.plaster, 0.25 + n3 * 0.1)
    if (s.track) col.copy(SW.stoneDark).lerp(SW.earthDark, 0.35 + n3 * 0.3)
    if (s.stream > 0) col.lerp(tmp.copy(SW.wetEarth).lerp(SW.stoneDark, n3 * 0.5), sstep(0, 0.6, s.stream))

    const k = aoAt(x, z)
    if (k > 0) col.multiplyScalar(1 - k)

    colors[i * 3] = col.r
    colors[i * 3 + 1] = col.g
    colors[i * 3 + 2] = col.b
  }
  geo.setAttribute('color', new THREE.BufferAttribute(colors, 3))
  geo.deleteAttribute('uv')
  return geo
}

/** Water: the stream ribbon, the flooded paddies and the puddle by the well, as one mesh. */
export function buildWater(extraDiscs = []) {
  const parts = []
  const colorize = (g, hex, deepHex) => {
    const c1 = lin(hex)
    const c2 = lin(deepHex ?? hex)
    const p = g.attributes.position
    const arr = new Float32Array(p.count * 3)
    for (let i = 0; i < p.count; i++) {
      tmp.copy(c1).lerp(c2, N.noise(p.getX(i) * 0.3, p.getZ(i) * 0.3))
      arr[i * 3] = tmp.r
      arr[i * 3 + 1] = tmp.g
      arr[i * 3 + 2] = tmp.b
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3))
    g.deleteAttribute('uv')
    return g
  }
  {
    const pts = STREAM.pts
    const verts = []
    const idx = []
    const halfW = STREAM.hw + 0.55
    let k = 0
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i]
      const [bx, bz] = pts[i + 1]
      const len = Math.hypot(bx - ax, bz - az)
      const n = Math.ceil(len / 0.8)
      for (let j = 0; j <= n; j++) {
        if (i > 0 && j === 0) continue
        const t = j / n
        const x = ax + (bx - ax) * t
        const z = az + (bz - az) * t
        const nx = -(bz - az) / len
        const nz = (bx - ax) / len
        verts.push(x + nx * halfW, WATER_Y, z + nz * halfW, x - nx * halfW, WATER_Y, z - nz * halfW)
        if (k > 0) {
          const a = (k - 1) * 2
          idx.push(a, a + 2, a + 1, a + 1, a + 2, a + 3)
        }
        k++
      }
    }
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.Float32BufferAttribute(verts, 3))
    g.setIndex(idx)
    g.computeVertexNormals()
    parts.push(colorize(g.toNonIndexed(), C.water, C.waterDeep))
  }
  for (const p of PADDIES) {
    const g = new THREE.PlaneGeometry(p.maxX - p.minX - BUND * 2 + 0.1, p.maxZ - p.minZ - BUND * 2 + 0.1, 3, 6).rotateX(-Math.PI / 2)
    g.translate((p.minX + p.maxX) / 2, p.level - 0.03, (p.minZ + p.maxZ) / 2)
    parts.push(colorize(g.toNonIndexed(), C.paddyWater, C.water))
  }
  for (const d of extraDiscs) {
    const g = new THREE.CircleGeometry(d.r, 18).rotateX(-Math.PI / 2)
    g.scale(1, 1, d.sz ?? 0.7)
    g.translate(d.x, groundHeight(d.x, d.z) + 0.035, d.z)
    parts.push(colorize(g.toNonIndexed(), C.waterDeep, C.water))
  }
  return mergeGeometries(parts, false)
}

// ----------------------------------------------------------------- routing
// The village is a tree of three spines meeting at the plaza: the street,
// the road south over the bridge, and the shrine steps. Travel follows them.
const PLAZA = [0, 0]
const SPINES = {
  street: [[-28, 0], [30, 0]],
  south: [[0, 0], [0, 7.2], [0, 12.6], [0.4, 18.6]],
  steps: [[0, 0], [0, -15.2]],
}
function projectOnSpines(x, z) {
  let best = null
  for (const [name, pts] of Object.entries(SPINES)) {
    for (let i = 0; i < pts.length - 1; i++) {
      const [ax, az] = pts[i]
      const [bx, bz] = pts[i + 1]
      const vx = bx - ax
      const vz = bz - az
      let t = ((x - ax) * vx + (z - az) * vz) / (vx * vx + vz * vz)
      t = Math.max(0, Math.min(1, t))
      const px = ax + vx * t
      const pz = az + vz * t
      const d = Math.hypot(x - px, z - pz)
      if (!best || d < best.d) best = { name, x: px, z: pz, d }
    }
  }
  return best
}

/** Waypoints from (fx, fz) to (tx, tz), walking along the spines through the plaza. */
export function route(fx, fz, tx, tz) {
  const a = projectOnSpines(fx, fz)
  const b = projectOnSpines(tx, tz)
  const pts = []
  if (a.d > 0.6) pts.push([a.x, a.z])
  if (a.name !== b.name) pts.push(PLAZA)
  pts.push([b.x, b.z])
  pts.push([tx, tz])
  return pts
}

export { distToPolyline, sstep, lerp }
