import * as THREE from 'three'
import { ATMOS } from './palette.js'

// Shared uniforms: every toon material reads the same time, wind and tint,
// so one update per frame drives the whole village.
export const U = {
  uTime: { value: 0 },
  uWind: { value: 1 }, // 0 when the visitor prefers reduced motion
  uShadowTint: { value: new THREE.Color(ATMOS.shadowTint) },
  uSunNorm: { value: ATMOS.sunIntensity / Math.PI },
  uGlow: { value: 1.0 }, // windows and lanterns brighten as it gets dark
}

const gradients = {}
/**
 * Props get four crisp light bands (shadow side, terminator, lit, full sun).
 * The ground and grass get the same ramp, smoothed: low sun on gently rolling
 * terrain would otherwise flicker between bands in blotches.
 */
function gradientMap(smooth = false) {
  const key = smooth ? 'smooth' : 'bands'
  if (gradients[key]) return gradients[key]
  const g = new THREE.DataTexture(new Uint8Array([88, 150, 210, 255]), 4, 1, THREE.RedFormat)
  g.minFilter = g.magFilter = smooth ? THREE.LinearFilter : THREE.NearestFilter
  g.generateMipmaps = false
  g.needsUpdate = true
  gradients[key] = g
  return g
}

const WIND_FN = /* glsl */ `
  uniform float uTime;
  uniform float uWind;
  vec2 windAt(vec3 wp, float bend) {
    float gust = 0.55 + 0.45 * sin(uTime * 0.6 + wp.x * 0.05 + wp.z * 0.04);
    float a = sin(uTime * 1.9 + wp.x * 0.42 + wp.z * 0.31);
    float b = sin(uTime * 3.1 + wp.x * 0.9 - wp.z * 0.7) * 0.35;
    return vec2(a + b, (a - b) * 0.45) * bend * gust * uWind;
  }
`

/**
 * Toon material with the village's lighting rules baked in.
 *  - vertexColors: colour comes from the geometry (baked variation + wear)
 *  - glow: an `aGlow` attribute marks windows and lanterns as emissive
 *  - wind: 'instanced' sways InstancedMesh blades by local height;
 *          'attr' sways vertices by an `aSway` attribute (foliage in the static batch)
 */
export function toonMaterial({ color = '#ffffff', vertexColors = true, glow = false, wind = null, side = THREE.FrontSide, smooth = false } = {}) {
  const m = new THREE.MeshToonMaterial({ color, vertexColors, gradientMap: gradientMap(smooth), side })
  m.onBeforeCompile = (shader) => {
    shader.uniforms.uTime = U.uTime
    shader.uniforms.uWind = U.uWind
    shader.uniforms.uShadowTint = U.uShadowTint
    shader.uniforms.uSunNorm = U.uSunNorm
    shader.uniforms.uGlow = U.uGlow

    let vHead = ''
    let vBody = ''
    if (glow) {
      vHead += 'attribute float aGlow;\nvarying float vGlow;\n'
      vBody += 'vGlow = aGlow;\n'
    }
    if (wind === 'instanced') {
      vHead += WIND_FN
      vBody += `
        vec3 iwp = (modelMatrix * instanceMatrix * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
        float bend = position.y * position.y * 1.6;
        transformed.xz += windAt(iwp, bend) * 0.16;
      `
    } else if (wind === 'attr') {
      vHead += 'attribute float aSway;\n' + WIND_FN
      vBody += `
        if (aSway > 0.0) {
          vec3 swp = (modelMatrix * vec4(position, 1.0)).xyz;
          transformed.xz += windAt(swp * 0.35, aSway) * 0.06;
        }
      `
    }
    shader.vertexShader = shader.vertexShader
      .replace('#include <common>', '#include <common>\n' + vHead)
      .replace('#include <begin_vertex>', '#include <begin_vertex>\n' + vBody)
    if (wind === 'instanced') {
      // Sample shadows at the tuft's root so every blade takes the ground's
      // shadow (thin vertical blades otherwise speckle with shadow acne).
      shader.vertexShader = shader.vertexShader.replace(
        '#include <shadowmap_vertex>',
        '{ vec4 worldPosition = modelMatrix * instanceMatrix * vec4(0.0, 0.06, 0.0, 1.0);\n#include <shadowmap_vertex>\n}',
      )
    }

    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        `#include <common>
        uniform vec3 uShadowTint;
        uniform float uSunNorm;
        uniform float uGlow;
        ${glow ? 'varying float vGlow;' : ''}`,
      )
      .replace(
        '#include <lights_fragment_end>',
        `#include <lights_fragment_end>
        {
          // How much direct sun reaches this pixel (0 in cast shadow / far side)
          float base = max(dot(diffuseColor.rgb, vec3(0.3333)), 1e-3);
          float lit = clamp(dot(reflectedLight.directDiffuse, vec3(0.3333)) / (base * uSunNorm), 0.0, 1.0);
          // Shadows lean cool blue-violet instead of going gray
          reflectedLight.indirectDiffuse *= mix(uShadowTint * 1.08, vec3(1.0), smoothstep(0.05, 0.55, lit));
        }`,
      )
    if (wind === 'instanced') {
      // blades shade like the ground under them, whichever side faces the camera
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <normal_fragment_begin>',
        '#include <normal_fragment_begin>\nnormal = normalize((viewMatrix * vec4(0.0, 1.0, 0.0, 0.0)).xyz);',
      )
    }
    if (glow) {
      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\n// after dark, paper windows and lanterns glow warm amber\ntotalEmissiveRadiance += mix(diffuseColor.rgb, vec3(1.0, 0.74, 0.42), clamp((uGlow - 1.0) * 0.45, 0.0, 0.65)) * vGlow * 1.35 * uGlow;',
      )
    }
  }
  m.customProgramCacheKey = () => `toon|${glow}|${wind}`
  return m
}

/**
 * Soft outline: an inverted hull pushed out along smoothed normals.
 * One extra draw per static chunk, no post-processing pass.
 */
export function outlineMaterial(width = 0.035) {
  const m = new THREE.MeshBasicMaterial({ color: ATMOS.outline, side: THREE.BackSide })
  m.onBeforeCompile = (shader) => {
    shader.vertexShader = shader.vertexShader.replace(
      '#include <begin_vertex>',
      `#include <begin_vertex>
      transformed += normalize(normal) * ${width.toFixed(4)};`,
    )
  }
  m.customProgramCacheKey = () => `outline|${width}`
  return m
}
