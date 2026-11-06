import * as THREE from 'three'
import { rbox, sphere, put, mergeColored, vcToon, addHull } from './kit.js'

// A chibi William: swept black hair, black long-sleeve, light trousers.
// Built from rounded primitives, then merged so the whole avatar is a handful
// of draw calls. Faces +z.
const SKIN = '#f1c9a3'
const HAIR = '#2a2224'
const TOP = '#2c2a31'
const PANTS = '#e9e3d6'
const SHOES = '#4a4148'

function merged(group, hull = 0.024) {
  const m = new THREE.Mesh(mergeColored(group), vcToon())
  m.castShadow = true
  if (hull) addHull(m, hull)
  return m
}

export function createAvatar() {
  const root = new THREE.Group()
  const body = new THREE.Group() // bobs and squashes while walking
  root.add(body)

  const limb = (parts) => {
    const pivot = new THREE.Group()
    const g = new THREE.Group()
    parts(g)
    pivot.add(merged(g))
    return pivot
  }

  const legL = limb((g) => {
    put(g, rbox(0.24, 0.42, 0.26, PANTS, 0.1), 0, -0.21, 0)
    put(g, rbox(0.27, 0.15, 0.36, SHOES, 0.07), 0, -0.47, 0.04)
  })
  const legR = limb((g) => {
    put(g, rbox(0.24, 0.42, 0.26, PANTS, 0.1), 0, -0.21, 0)
    put(g, rbox(0.27, 0.15, 0.36, SHOES, 0.07), 0, -0.47, 0.04)
  })
  legL.position.set(-0.14, 0.55, 0)
  legR.position.set(0.14, 0.55, 0)
  body.add(legL, legR)

  const torso = new THREE.Group()
  put(torso, rbox(0.66, 0.62, 0.42, TOP, 0.16), 0, 0.84, 0)
  put(torso, rbox(0.34, 0.12, 0.3, TOP, 0.05), 0, 1.17, 0)
  body.add(merged(torso))

  const armParts = (g) => {
    put(g, rbox(0.19, 0.5, 0.21, TOP, 0.09), 0, -0.25, 0)
    put(g, sphere(0.1, SKIN, 1), 0, -0.55, 0)
  }
  const armL = limb(armParts)
  const armR = limb(armParts)
  armL.position.set(-0.43, 1.08, 0)
  armR.position.set(0.43, 1.08, 0)
  body.add(armL, armR)

  const head = new THREE.Group()
  head.position.set(0, 1.55, 0)
  body.add(head)
  const face = new THREE.Group()
  put(face, rbox(0.84, 0.76, 0.76, SKIN, 0.3), 0, 0, 0)
  put(face, sphere(0.09, SKIN, 1), -0.43, -0.02, 0)
  put(face, sphere(0.09, SKIN, 1), 0.43, -0.02, 0)
  // hair: cap, back and a fringe swept up and to the side
  put(face, rbox(0.92, 0.34, 0.82, HAIR, 0.16), 0, 0.33, -0.02)
  put(face, rbox(0.9, 0.5, 0.3, HAIR, 0.14), 0, 0.12, -0.27)
  put(face, rbox(0.14, 0.36, 0.6, HAIR, 0.06), -0.42, 0.13, -0.06)
  put(face, rbox(0.14, 0.36, 0.6, HAIR, 0.06), 0.42, 0.13, -0.06)
  put(face, rbox(0.62, 0.22, 0.22, HAIR, 0.09), 0.08, 0.36, 0.3, 0.1, -0.35, -0.18)
  put(face, rbox(0.4, 0.18, 0.2, HAIR, 0.08), -0.24, 0.3, 0.33, -0.2, -0.2, 0.25)
  put(face, rbox(0.3, 0.2, 0.3, HAIR, 0.09), 0.12, 0.54, 0.12, 0.3, 0.3, 0.2)
  put(face, rbox(0.12, 0.05, 0.02, '#c9796a', 0.02), 0, -0.2, 0.385)
  put(face, rbox(0.12, 0.06, 0.02, '#f0a8a0', 0.025), -0.27, -0.13, 0.38)
  put(face, rbox(0.12, 0.06, 0.02, '#f0a8a0', 0.025), 0.27, -0.13, 0.38)
  head.add(merged(face, 0.026))
  // eyes stay separate so they can blink
  const eyeL = rbox(0.08, 0.12, 0.04, '#231c1e', 0.035)
  const eyeR = rbox(0.08, 0.12, 0.04, '#231c1e', 0.035)
  put(head, eyeL, -0.17, -0.02, 0.385)
  put(head, eyeR, 0.17, -0.02, 0.385)

  // soft contact shadow so he never floats
  const blob = new THREE.Mesh(
    new THREE.CircleGeometry(0.5, 20),
    new THREE.MeshBasicMaterial({ color: '#3a2d48', transparent: true, opacity: 0.22, depthWrite: false }),
  )
  blob.rotation.x = -Math.PI / 2
  blob.position.y = 0.04
  root.add(blob)

  let phase = 0
  let blinkT = 2
  let wave = 0
  let lastStep = 0
  let riding = false

  return {
    root,
    head,
    /** speed: 0 idle → 1 walk → ~1.7 run (on the bike: the pedal angle). Returns true on the frame a foot lands. */
    animate(dt, t, speed, still = false) {
      const ease = Math.min(1, dt * 14)
      if (riding) {
        // seated on the saddle, hands on the bars, pedalling with the speed
        // `speed` here is the pedal angle, so the feet stay on the pedals
        const pedal = Math.sin(speed) * 0.42
        legL.rotation.x += (-0.5 + pedal - legL.rotation.x) * ease
        legR.rotation.x += (-0.5 - pedal - legR.rotation.x) * ease
        armL.rotation.x += (-0.95 - armL.rotation.x) * ease
        armR.rotation.x += (-0.95 - armR.rotation.x) * ease
        armR.rotation.z += (0 - armR.rotation.z) * ease
        wave = 0
        body.position.set(0, 0.4 + Math.abs(Math.sin(speed)) * 0.012, -0.21)
        body.scale.set(1, 1, 1)
        body.rotation.set(0.12, 0, 0)
        head.rotation.z = Math.sin(t * 1.3) * 0.02
        blinkT -= dt
        eyeL.scale.y = eyeR.scale.y = blinkT < 0.12 ? 0.15 : 1
        if (blinkT < 0) blinkT = 2 + Math.random() * 3
        return false
      }
      body.position.z += (0 - body.position.z) * ease
      body.rotation.x += (0 - body.rotation.x) * ease
      const moving = speed > 0.05 && !still
      phase += dt * (moving ? 7 + speed * 4.5 : 0)
      const swing = moving ? Math.sin(phase) * Math.min(0.75, 0.45 + speed * 0.18) : 0
      legL.rotation.x += (swing - legL.rotation.x) * ease
      legR.rotation.x += (-swing - legR.rotation.x) * ease
      let armSwingR = swing * 0.9
      if (wave > 0) {
        wave -= dt
        armR.rotation.z += (2.6 - armR.rotation.z) * ease
        armSwingR = Math.sin(t * 14) * 0.35
      } else {
        armR.rotation.z += (0 - armR.rotation.z) * ease
      }
      armL.rotation.x += (-swing * 0.9 - armL.rotation.x) * ease
      armR.rotation.x += (armSwingR - armR.rotation.x) * ease
      // squash on contact, stretch at the top of each step
      const bounce = moving ? Math.abs(Math.sin(phase)) : 0
      body.position.y = moving ? bounce * 0.08 : Math.sin(t * 2.2) * 0.012
      const sq = moving ? (1 - bounce) * 0.06 * Math.min(1, speed) : 0
      body.scale.set(1 + sq * 0.6, 1 - sq + bounce * 0.025, 1 + sq * 0.6)
      body.rotation.z = moving ? Math.sin(phase) * 0.03 : 0
      head.rotation.z = moving ? -Math.sin(phase) * 0.025 : Math.sin(t * 1.3) * 0.03
      blinkT -= dt
      eyeL.scale.y = eyeR.scale.y = blinkT < 0.12 ? 0.15 : 1
      if (blinkT < 0) blinkT = 2 + Math.random() * 3
      // footfall: phase crosses a multiple of π
      const step = Math.floor(phase / Math.PI)
      const landed = moving && step !== lastStep
      lastStep = step
      return landed
    },
    wave(seconds = 1.6) {
      wave = seconds
    },
    setRiding(on) {
      riding = on
      blob.visible = !on // the bike brings its own shadow
    },
  }
}
