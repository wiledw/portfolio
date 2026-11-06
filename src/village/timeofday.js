import * as THREE from 'three'
import { BASE, ATMOS } from './palette.js'

// The sky over the village follows the visitor's own clock. Each key is a
// moment of the day; everything in between is blended.
//   az: compass direction of the sun/moon (0 = from the south, toward the
//       camera; negative = west, positive = east). el: height above horizon.
const KEYS = [
  { h: 0, sun: '#a8baf0', int: 0.75, el: 45, az: -25, sky: '#55659c', ground: '#383a4c', fill: 2.3, fog: '#26304f', tint: '#97a2dc', glow: 2.6, signs: 0.72, exposure: 1.15 },
  { h: 5, sun: '#c2a8d8', int: 0.5, el: 14, az: 95, sky: '#7078a8', ground: '#4a4548', fill: 2.4, fog: '#6c6f92', tint: '#a3a3d8', glow: 2.0, signs: 0.82, exposure: 1.1 },
  { h: 7, sun: '#ffd6ae', int: 1.8, el: 22, az: 72, sky: '#b4c6e4', ground: '#857e58', fill: 2.9, fog: '#e6dccb', tint: '#b2b4e2', glow: 0.6, signs: 0.97, exposure: 1.0 },
  { h: 12, sun: '#fff1d8', int: 2.25, el: 58, az: 10, sky: '#a8c1e3', ground: '#8a8458', fill: 3.0, fog: '#dde0d6', tint: '#bcbee6', glow: 0.35, signs: 1, exposure: 0.98 },
  { h: 16.5, sun: BASE.sun, int: ATMOS.sunIntensity, el: 25, az: -60, sky: ATMOS.skyFill, ground: ATMOS.groundFill, fill: ATMOS.fillIntensity, fog: ATMOS.fog, tint: ATMOS.shadowTint, glow: 1.0, signs: 1, exposure: 1.0 },
  { h: 18.6, sun: '#ffa070', int: 1.65, el: 17, az: -76, sky: '#a49fcf', ground: '#7a604a', fill: 2.8, fog: '#dcae90', tint: '#b4a6dc', glow: 1.6, signs: 0.95, exposure: 1.03 },
  { h: 20.2, sun: '#8a92cf', int: 0.7, el: 14, az: -90, sky: '#5e66a0', ground: '#3e3640', fill: 2.4, fog: '#4f5380', tint: '#9198d4', glow: 2.4, signs: 0.78, exposure: 1.12 },
  { h: 24, sun: '#a8baf0', int: 0.75, el: 45, az: -25, sky: '#55659c', ground: '#383a4c', fill: 2.3, fog: '#26304f', tint: '#97a2dc', glow: 2.6, signs: 0.72, exposure: 1.15 },
]
const COLOR_KEYS = ['sun', 'sky', 'ground', 'fog', 'tint']
const NUM_KEYS = ['int', 'el', 'az', 'fill', 'glow', 'signs', 'exposure']
const parsed = KEYS.map((k) => ({ ...k, ...Object.fromEntries(COLOR_KEYS.map((c) => [c, new THREE.Color(k[c])])) }))

const out = { dir: new THREE.Vector3(), ...Object.fromEntries(COLOR_KEYS.map((c) => [c, new THREE.Color()])) }

/** Lighting for an hour of the day (0–24, fractional). */
export function sampleSky(hour) {
  const h = ((hour % 24) + 24) % 24
  let i = 0
  while (i < parsed.length - 2 && parsed[i + 1].h <= h) i++
  const a = parsed[i]
  const b = parsed[i + 1]
  const t = (h - a.h) / (b.h - a.h)
  const s = t * t * (3 - 2 * t)
  for (const c of COLOR_KEYS) out[c].copy(a[c]).lerp(b[c], s)
  for (const n of NUM_KEYS) out[n] = a[n] + (b[n] - a[n]) * s
  const el = THREE.MathUtils.degToRad(out.el)
  const az = THREE.MathUtils.degToRad(out.az)
  out.dir.set(Math.cos(el) * Math.sin(az), Math.sin(el), Math.cos(el) * Math.cos(az)).normalize()
  out.night = h < 5.2 || h > 20.4
  return out
}

export function periodOf(hour) {
  const h = ((hour % 24) + 24) % 24
  if (h >= 5 && h < 8) return 'Early morning'
  if (h >= 8 && h < 11) return 'Morning'
  if (h >= 11 && h < 14) return 'Midday'
  if (h >= 14 && h < 17.5) return 'Afternoon'
  if (h >= 17.5 && h < 19.6) return 'Evening'
  if (h >= 19.6 && h < 21) return 'Dusk'
  return 'Night'
}

export const PREVIEWS = [
  { mode: 'live', label: 'Live' },
  { mode: 'fixed', hour: 7.5, label: 'Morning' },
  { mode: 'fixed', hour: 12.5, label: 'Noon' },
  { mode: 'fixed', hour: 18.7, label: 'Evening' },
  { mode: 'fixed', hour: 22.5, label: 'Night' },
]

export function localHour(date = new Date()) {
  return date.getHours() + date.getMinutes() / 60 + date.getSeconds() / 3600
}
