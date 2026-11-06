// Deterministic randomness: the village looks the same on every visit.

/** mulberry32: small, fast, seeded PRNG returning [0, 1). */
export function rng(seed) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/** 2D value noise + fBm, seeded. Smooth, cheap, good enough for masks and terrain. */
export function makeNoise(seed = 1) {
  const s = Math.imul(seed, 0x9e3779b1)
  const hash = (ix, iz) => {
    let h = Math.imul(ix, 374761393) ^ Math.imul(iz, 668265263) ^ s
    h = Math.imul(h ^ (h >>> 13), 1274126177)
    h ^= h >>> 16
    return (h >>> 0) / 4294967296
  }
  const fade = (t) => t * t * (3 - 2 * t)
  function noise(x, z) {
    const ix = Math.floor(x)
    const iz = Math.floor(z)
    const fx = fade(x - ix)
    const fz = fade(z - iz)
    const a = hash(ix, iz)
    const b = hash(ix + 1, iz)
    const c = hash(ix, iz + 1)
    const d = hash(ix + 1, iz + 1)
    return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz
  }
  function fbm(x, z, octaves = 4) {
    let amp = 0.5
    let f = 1
    let sum = 0
    let norm = 0
    for (let i = 0; i < octaves; i++) {
      sum += amp * noise(x * f, z * f)
      norm += amp
      amp *= 0.5
      f *= 2.03
    }
    return sum / norm
  }
  return { noise, fbm, hash }
}

/**
 * Poisson-disc sampling (Bridson) inside a rectangle. `accept(x, z)` can veto
 * points (paths, water, buildings), so props cluster naturally around them.
 */
export function poissonDisc({ minX, maxX, minZ, maxZ }, r, random, accept = () => true, k = 18, max = Infinity) {
  const cell = r / Math.SQRT2
  const gw = Math.ceil((maxX - minX) / cell)
  const gh = Math.ceil((maxZ - minZ) / cell)
  const grid = new Int32Array(gw * gh).fill(-1)
  const pts = []
  const active = []
  const gi = (x, z) => Math.floor((x - minX) / cell) + Math.floor((z - minZ) / cell) * gw
  const fits = (x, z) => {
    if (x < minX || x >= maxX || z < minZ || z >= maxZ) return false
    const cx = Math.floor((x - minX) / cell)
    const cz = Math.floor((z - minZ) / cell)
    for (let j = Math.max(0, cz - 2); j <= Math.min(gh - 1, cz + 2); j++) {
      for (let i = Math.max(0, cx - 2); i <= Math.min(gw - 1, cx + 2); i++) {
        const p = grid[i + j * gw]
        if (p >= 0) {
          const dx = pts[p][0] - x
          const dz = pts[p][1] - z
          if (dx * dx + dz * dz < r * r) return false
        }
      }
    }
    return true
  }
  // seed a few starts so disconnected regions get filled
  for (let s = 0; s < 40 && pts.length < max; s++) {
    const x = minX + random() * (maxX - minX)
    const z = minZ + random() * (maxZ - minZ)
    if (fits(x, z)) {
      grid[gi(x, z)] = pts.length
      active.push(pts.length)
      pts.push([x, z])
    }
  }
  while (active.length && pts.length < max) {
    const ai = Math.floor(random() * active.length)
    const [px, pz] = pts[active[ai]]
    let found = false
    for (let t = 0; t < k; t++) {
      const a = random() * Math.PI * 2
      const d = r * (1 + random())
      const x = px + Math.cos(a) * d
      const z = pz + Math.sin(a) * d
      if (fits(x, z)) {
        grid[gi(x, z)] = pts.length
        active.push(pts.length)
        pts.push([x, z])
        found = true
        break
      }
    }
    if (!found) active.splice(ai, 1)
  }
  return pts.filter(([x, z]) => accept(x, z))
}
