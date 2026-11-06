import * as THREE from 'three'

// ---------------------------------------------------------------------------
// Art direction: rural Japan, early summer, late afternoon.
// Eight base colours. Every other colour in the village is mixed from these,
// which keeps the whole scene in one family.
// ---------------------------------------------------------------------------
export const BASE = {
  sun: '#ffd49e', // warm low sunlight (light colour only)
  grass: '#86a35b', // muted field green
  leaf: '#4c6b3d', // deep foliage, cedar
  earth: '#c49a6b', // worn paths, dry soil
  wood: '#8a5d3b', // weathered timber
  plaster: '#efe2c8', // walls, paper, pale stone
  kawara: '#5d6d82', // roof tiles, stone, shadow family (gray-blue)
  red: '#c64a32', // the single accent: torii, post box
}

const tmpA = new THREE.Color()
const tmpB = new THREE.Color()
const hex = (c) => '#' + c.getHexString()

/** Mix two colours in sRGB space (what an artist mixing paint expects). */
export function mix(a, b, t) {
  tmpA.set(a)
  tmpB.set(b)
  return hex(tmpA.lerp(tmpB, t))
}
/** Darken (k < 1) or lighten (k > 1) a colour. */
export function shade(a, k) {
  tmpA.set(a)
  tmpA.r = Math.min(1, tmpA.r * k)
  tmpA.g = Math.min(1, tmpA.g * k)
  tmpA.b = Math.min(1, tmpA.b * k)
  return hex(tmpA)
}

const B = BASE
export const C = {
  ...B,
  // ground
  grassLight: mix(B.grass, B.plaster, 0.2),
  grassDark: shade(mix(B.grass, B.leaf, 0.45), 0.95),
  dryGrass: mix(B.grass, B.earth, 0.5),
  moss: mix(B.leaf, B.grass, 0.45),
  earthLight: mix(B.earth, B.plaster, 0.32),
  earthDark: shade(B.earth, 0.74),
  mud: shade(mix(B.earth, B.kawara, 0.3), 0.55),
  wetEarth: shade(mix(B.earth, B.kawara, 0.45), 0.62),
  forestFloor: shade(mix(B.leaf, B.earth, 0.25), 0.82),
  // timber
  woodLight: mix(B.wood, B.earth, 0.5),
  woodDark: shade(B.wood, 0.62),
  woodPale: mix(B.wood, B.plaster, 0.45),
  // stone and roof
  stone: mix(B.kawara, B.plaster, 0.5),
  stoneLight: mix(B.kawara, B.plaster, 0.68),
  stoneDark: mix(B.kawara, B.plaster, 0.28),
  roof: B.kawara,
  roofDark: shade(B.kawara, 0.78),
  ink: shade(B.kawara, 0.36),
  // foliage
  cedar: shade(B.leaf, 0.82),
  leafLight: mix(B.leaf, B.grass, 0.55),
  hydrangeaBlue: mix(mix(B.kawara, '#8f86e0', 0.6), B.plaster, 0.22), // blue-violet, the shadow family
  hydrangeaPink: mix(B.red, B.plaster, 0.42),
  // accents
  rust: mix(B.red, B.wood, 0.55),
  redDark: shade(B.red, 0.72),
  paper: B.plaster,
  glow: mix(B.sun, B.plaster, 0.3),
  water: mix(mix(B.kawara, B.leaf, 0.22), B.plaster, 0.38),
  waterDeep: mix(B.kawara, B.leaf, 0.3),
  paddyWater: mix('#9db3d6', B.plaster, 0.28), // the blue sky caught in the flooded paddies
  // cats
  ginger: mix(B.earth, B.red, 0.3),
  catWhite: mix(B.plaster, '#ffffff', 0.4),
  catGray: mix(B.kawara, B.plaster, 0.2),
  catBrown: shade(mix(B.wood, B.kawara, 0.18), 0.62), // dark chocolate brown
  catBlack: shade(B.kawara, 0.3),
}

// Lighting and atmosphere
export const ATMOS = {
  fog: '#e3d4b8', // warm late-afternoon haze; also the sky behind the hills
  skyFill: '#9db3d6', // hemisphere sky: blue
  groundFill: '#7d7346', // hemisphere ground: warm green-brown
  shadowTint: '#aeb0e2', // cool blue-violet pushed into shadowed areas
  outline: '#3a2d38', // soft warm-violet ink for outlines
  sunIntensity: 2.05,
  fillIntensity: 3.0,
  // sun from the west-south-west, ~25° above the horizon
  sunDir: new THREE.Vector3(-0.78, 0.42, 0.45).normalize(),
}

/** Category of a colour, used for wear: wood darkens near the ground, stone grows moss, paint fades in the sun. */
const CATS = new Map()
for (const k of ['wood', 'woodLight', 'woodDark', 'woodPale']) CATS.set(C[k], 'wood')
for (const k of ['stone', 'stoneLight', 'stoneDark']) CATS.set(C[k], 'stone')
for (const k of ['red', 'redDark', 'roof', 'roofDark', 'rust']) CATS.set(C[k], 'paint')
for (const k of ['leaf', 'cedar', 'leafLight', 'grass', 'grassDark', 'moss', 'hydrangeaBlue', 'hydrangeaPink']) CATS.set(C[k], 'leaf')
export const categoryOf = (color) => CATS.get(color) || 'plain'
