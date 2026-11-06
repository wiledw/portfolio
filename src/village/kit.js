import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'
import { mergeGeometries, mergeVertices } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
import { C, ATMOS, categoryOf } from './palette.js'
import { makeNoise } from './noise.js'
import { toonMaterial, outlineMaterial } from './toon.js'

export { C }

// Primitives carry their palette swatch on the mesh; the bake step turns that
// into per-vertex colour with wear, so these shared materials are only used
// for things that stay dynamic (the avatar, cats, animated props).
const matCache = new Map()
export function mat(color, opts = {}) {
  const key = color + JSON.stringify(opts)
  let m = matCache.get(key)
  if (!m) {
    m = toonMaterial({ color, vertexColors: false, ...opts })
    matCache.set(key, m)
  }
  return m
}

const geoCache = new Map()
function cachedGeo(key, make) {
  let g = geoCache.get(key)
  if (!g) {
    g = make()
    geoCache.set(key, g)
  }
  return g
}

function tag(mesh, color, extra) {
  mesh.userData.swatch = color
  if (extra) Object.assign(mesh.userData, extra)
  mesh.castShadow = true
  mesh.receiveShadow = true
  return mesh
}

/** Rounded box, the basic clay building block. */
export function rbox(w, h, d, color, r = 0.1, extra) {
  const radius = Math.min(r, w / 2 - 0.001, h / 2 - 0.001, d / 2 - 0.001)
  const seg = radius > 0.06 ? 2 : 1
  const geo = cachedGeo(`rb${w}|${h}|${d}|${radius}|${seg}`, () => new RoundedBoxGeometry(w, h, d, seg, Math.max(radius, 0.001)))
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}
export function cyl(rTop, rBottom, h, color, seg = 10, extra) {
  const geo = cachedGeo(`cy${rTop}|${rBottom}|${h}|${seg}`, () => new THREE.CylinderGeometry(rTop, rBottom, h, seg))
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}
export function sphere(r, color, detail = 1, extra) {
  const geo = cachedGeo(`ic${r}|${detail}`, () => new THREE.IcosahedronGeometry(r, detail))
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}
export function cone(r, h, color, seg = 8, extra) {
  const geo = cachedGeo(`co${r}|${h}|${seg}`, () => new THREE.ConeGeometry(r, h, seg))
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}
export function fromGeo(geo, color, extra) {
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}

/**
 * A slab that sags in the middle of its span and flares up at both ends, the
 * way old kawara roofs settle. Bends along local x; y is the slab's normal.
 */
export function bentSlab(w, h, d, color, { sag = 0.08, flare = 0.25, seg = 16 } = {}, extra) {
  const key = `bent${w}|${h}|${d}|${sag}|${flare}|${seg}`
  const geo = cachedGeo(key, () => {
    const g = new THREE.BoxGeometry(w, h, d, seg, 1, 2)
    const p = g.attributes.position
    for (let i = 0; i < p.count; i++) {
      const u = (2 * p.getX(i)) / w
      p.setY(i, p.getY(i) - sag * (1 - u * u) + flare * Math.pow(Math.abs(u), 6))
    }
    g.computeVertexNormals()
    return g
  })
  return tag(new THREE.Mesh(geo, mat(color)), color, extra)
}

/** Glowing parts (paper windows, lantern boxes): emissive after baking. */
export const GLOW = { glow: 1 }
/** Foliage parts sway in the wind after baking. */
export const SWAY = { sway: 1 }
/** Hanging cloth (laundry, noren, streamers): fixed at the top, swings at the bottom. */
export const HANG = { sway: 1, hang: 1 }

export function put(parent, mesh, x = 0, y = 0, z = 0, ry = 0, rx = 0, rz = 0) {
  mesh.position.set(x, y, z)
  mesh.rotation.set(rx, ry, rz)
  parent.add(mesh)
  return mesh
}

// ---------------------------------------------------------------------------
// Text on wood: canvas textures drawn with the village fonts.
// ---------------------------------------------------------------------------
export function textTexture(lines, { width = 512, height = 256, bg = C.woodPale, fg = '#4a2e18', font = 'DotGothic16', size = 64, border = C.woodDark, align = 'center' } = {}) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (bg) {
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, width, height)
    ctx.globalAlpha = 0.1
    ctx.strokeStyle = border
    ctx.lineWidth = 3
    for (let y = 18; y < height; y += 26) {
      ctx.beginPath()
      ctx.moveTo(0, y + Math.sin(y) * 3)
      ctx.bezierCurveTo(width * 0.3, y - 6, width * 0.6, y + 6, width, y)
      ctx.stroke()
    }
    ctx.globalAlpha = 1
    if (border) {
      ctx.lineWidth = 10
      ctx.strokeRect(5, 5, width - 10, height - 10)
    }
  }
  ctx.fillStyle = fg
  ctx.textAlign = align
  ctx.textBaseline = 'middle'
  const list = Array.isArray(lines) ? lines : [lines]
  const lineH = size * 1.15
  const startY = height / 2 - ((list.length - 1) * lineH) / 2
  list.forEach((line, i) => {
    let s = size
    ctx.font = `${s}px "${font}", sans-serif`
    while (ctx.measureText(line).width > width - 40 && s > 12) {
      s -= 2
      ctx.font = `${s}px "${font}", sans-serif`
    }
    ctx.fillText(line, align === 'center' ? width / 2 : 24, startY + i * lineH)
  })
  const tex = new THREE.CanvasTexture(canvas)
  tex.colorSpace = THREE.SRGBColorSpace
  tex.anisotropy = 4
  return tex
}

const panelMats = new Map()
const SIGN_BASE = new THREE.Color('#f4efe4')
/** Dim sign faces a little after dark so the unlit text doesn't glare. */
export function setSignLight(k) {
  for (const m of panelMats.values()) m.color.copy(SIGN_BASE).multiplyScalar(k)
}
/** A sign face. Unlit on purpose: text stays readable in shadow and at any sun angle. */
export function panel(w, h, texture) {
  let m = panelMats.get(texture)
  if (!m) {
    m = new THREE.MeshBasicMaterial({ map: texture, color: '#f4efe4' })
    panelMats.set(texture, m)
  }
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(w, h), m)
  mesh.receiveShadow = true
  mesh.userData.textured = true
  return mesh
}

// ---------------------------------------------------------------------------
// Bake: static props → a few vertex-coloured chunks with wear and outlines.
// ---------------------------------------------------------------------------
const N = makeNoise(23)
const SUN = ATMOS.sunDir
const MOSS = new THREE.Color(C.moss)
const FADE = new THREE.Color(C.plaster)

export function bakeStatic(root, { groundAt, chunk = 18, outline = true } = {}) {
  root.updateMatrixWorld(true)
  const buckets = new Map()
  const keep = []
  const base = new THREE.Color()
  const c = new THREE.Color()
  const v = new THREE.Vector3()
  const n = new THREE.Vector3()
  const center = new THREE.Vector3()
  const nm = new THREE.Matrix3()

  root.traverse((o) => {
    if (!o.isMesh) return
    if (o.userData.textured || o.userData.noBake) {
      keep.push(o)
      return
    }
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()
    for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal') g.deleteAttribute(name)
    g.applyMatrix4(o.matrixWorld)
    nm.getNormalMatrix(o.matrixWorld)

    const swatch = o.userData.swatch || '#' + o.material.color.getHexString()
    base.set(swatch)
    const cat = categoryOf(swatch)
    const glow = o.userData.glow ? 1 : 0
    const sway = o.userData.sway ? 1 : 0
    const hang = o.userData.hang ? 1 : 0
    const pos = g.attributes.position
    const nor = g.attributes.normal
    const count = pos.count
    const colors = new Float32Array(count * 3)
    const glows = new Float32Array(count).fill(glow)
    const sways = new Float32Array(count)

    g.computeBoundingBox()
    g.boundingBox.getCenter(center)
    const gy = groundAt ? groundAt(center.x, center.z) : 0
    const minY = g.boundingBox.min.y
    const sizeY = Math.max(0.001, g.boundingBox.max.y - minY)
    // irregular surfaces: tiny per-object hue/value drift
    const objDrift = (N.hash(Math.round(center.x * 13), Math.round(center.z * 7)) - 0.5) * 0.08

    for (let i = 0; i < count; i++) {
      v.fromBufferAttribute(pos, i)
      n.fromBufferAttribute(nor, i)
      c.copy(base)
      const k = 1 + objDrift + (N.noise(v.x * 1.9 + v.y, v.z * 1.9 - v.y) - 0.5) * 0.1
      c.multiplyScalar(k)
      const above = v.y - gy
      if (!glow) {
        // contact darkening near the ground
        c.multiplyScalar(1 - 0.28 * (1 - Math.min(1, Math.max(0, above / 0.65))))
        if (cat === 'wood') {
          // timber stays darker where rain splashes up
          c.multiplyScalar(1 - 0.18 * (1 - Math.min(1, Math.max(0, above / 0.9))))
        } else if (cat === 'stone') {
          // moss on top faces and low, shaded stone
          const m = Math.min(1, Math.max(0, (N.noise(v.x * 2.3, v.z * 2.3 + v.y) - 0.52) * 4))
          const where = Math.max(n.y > 0.4 ? 0.85 : 0, above < 0.35 ? 0.7 : 0, n.dot(SUN) < -0.2 ? 0.55 : 0)
          c.lerp(MOSS, m * where)
        } else if (cat === 'paint') {
          // sun-faded on the sun-facing side
          c.lerp(FADE, Math.max(0, n.dot(SUN)) * 0.16)
        }
      }
      colors[i * 3] = c.r
      colors[i * 3 + 1] = c.g
      colors[i * 3 + 2] = c.b
      if (hang) sways[i] = Math.pow((g.boundingBox.max.y - v.y) / sizeY, 1.3) * (1.4 + sizeY * 1.6)
      else if (sway) sways[i] = Math.pow((v.y - minY) / sizeY, 1.5) * (0.6 + sizeY * 0.3)
    }
    g.setAttribute('color', new THREE.BufferAttribute(colors, 3))
    g.setAttribute('aGlow', new THREE.BufferAttribute(glows, 1))
    g.setAttribute('aSway', new THREE.BufferAttribute(sways, 1))

    const key = `${Math.floor(center.x / chunk)}|${Math.floor(center.z / chunk)}`
    if (!buckets.has(key)) buckets.set(key, [])
    buckets.get(key).push(g)
  })

  const out = new THREE.Group()
  out.name = 'static-baked'
  const material = toonMaterial({ glow: true, wind: 'attr' })
  const hullMat = outline ? outlineMaterial(0.032) : null
  let vertexCount = 0
  for (const geos of buckets.values()) {
    const geo = mergeGeometries(geos, false)
    geos.forEach((g) => g.dispose())
    if (!geo) continue
    geo.computeBoundingSphere()
    vertexCount += geo.attributes.position.count
    const mesh = new THREE.Mesh(geo, material)
    mesh.castShadow = true
    mesh.receiveShadow = true
    out.add(mesh)
    if (hullMat) {
      // smooth normals so the hull doesn't split at hard edges
      const hg = new THREE.BufferGeometry()
      hg.setAttribute('position', geo.attributes.position.clone())
      const welded = mergeVertices(hg, 1e-3)
      welded.computeVertexNormals()
      const hull = new THREE.Mesh(welded, hullMat)
      hull.castShadow = false
      hull.receiveShadow = false
      out.add(hull)
    }
  }
  for (const o of keep) {
    const m = o.matrixWorld.clone()
    o.parent.remove(o)
    m.decompose(o.position, o.quaternion, o.scale)
    out.add(o)
  }
  out.userData.vertexCount = vertexCount
  return out
}

/** Give a dynamic mesh group an outline hull (avatar, cats). */
export function addHull(mesh, width = 0.03) {
  const hg = new THREE.BufferGeometry()
  const src = mesh.geometry.index ? mesh.geometry.toNonIndexed() : mesh.geometry
  hg.setAttribute('position', src.attributes.position.clone())
  const welded = mergeVertices(hg, 1e-3)
  welded.computeVertexNormals()
  const hull = new THREE.Mesh(welded, outlineMaterial(width))
  hull.castShadow = false
  mesh.add(hull)
  return hull
}

/** Merge a group of swatch-tagged meshes into one vertex-coloured geometry (for animated parts). */
export function mergeColored(group) {
  group.updateMatrixWorld(true)
  const inv = new THREE.Matrix4().copy(group.matrixWorld).invert()
  const geos = []
  const c = new THREE.Color()
  group.traverse((o) => {
    if (!o.isMesh || o === group) return
    let g = o.geometry.index ? o.geometry.toNonIndexed() : o.geometry.clone()
    for (const name of Object.keys(g.attributes)) if (name !== 'position' && name !== 'normal') g.deleteAttribute(name)
    g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inv, o.matrixWorld))
    c.set(o.userData.swatch || '#' + o.material.color.getHexString())
    const arr = new Float32Array(g.attributes.position.count * 3)
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = c.r
      arr[i + 1] = c.g
      arr[i + 2] = c.b
    }
    g.setAttribute('color', new THREE.BufferAttribute(arr, 3))
    geos.push(g)
  })
  return mergeGeometries(geos, false)
}

const vcMat = { m: null }
/** Shared vertex-coloured toon material for merged dynamic parts. */
export function vcToon() {
  if (!vcMat.m) vcMat.m = toonMaterial({ vertexColors: true })
  return vcMat.m
}
