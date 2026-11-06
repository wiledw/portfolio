import * as THREE from 'three'
import { buildWorld } from './world.js'
import { createAvatar } from './player.js'
import { createUI } from './ui.js'
import { createMinimap } from './minimap.js'
import { createNameplates } from './nameplates.js'
import { createAudio } from './audio.js'
import { WELCOME } from './content.js'
import { U } from './toon.js'
import { setSignLight } from './kit.js'
import { sampleSky, periodOf, PREVIEWS, localHour } from './timeofday.js'
import { ATMOS, BASE } from './palette.js'

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
const coarse = window.matchMedia('(pointer: coarse)').matches
const PROGRESS_KEY = 'village:found'

const title = document.getElementById('title')
const startBtn = document.getElementById('start')
const stage = document.getElementById('stage')

function fail(message) {
  document.getElementById('title-status').textContent = message
  startBtn.disabled = true
  startBtn.textContent = 'Village unavailable'
  document.getElementById('fallback').hidden = false
}

boot().catch((err) => {
  console.error(err)
  fail('The village could not load in this browser.')
})

async function boot() {
  // Sign textures are drawn with the village font, so wait for it first.
  try {
    await Promise.race([
      Promise.all([document.fonts.load('64px "DotGothic16"'), document.fonts.load('16px "M PLUS Rounded 1c"')]),
      new Promise((r) => setTimeout(r, 2500)),
    ])
  } catch {
    /* fall back to system fonts */
  }

  let renderer
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' })
  } catch {
    return fail('Your browser has WebGL turned off, so the village cannot be drawn.')
  }
  // Quality steps down (never back up) if frames run slow: sharpness first, then shadow detail.
  const QUALITY = [
    { pixelRatio: 2, shadow: 2048 },
    { pixelRatio: 1.5, shadow: 1024 },
    { pixelRatio: 1, shadow: 1024 },
  ]
  // machines with few cores start one step down
  let quality = (navigator.hardwareConcurrency || 8) <= 4 ? 1 : 0
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, QUALITY[quality].pixelRatio))
  renderer.setSize(window.innerWidth, window.innerHeight)
  renderer.outputColorSpace = THREE.SRGBColorSpace
  // Neutral tone mapping keeps the palette's hues instead of bending them
  renderer.toneMapping = THREE.NeutralToneMapping
  renderer.toneMappingExposure = 1.0
  renderer.shadowMap.enabled = true
  renderer.shadowMap.type = THREE.PCFShadowMap
  stage.appendChild(renderer.domElement)

  const scene = new THREE.Scene()
  scene.background = new THREE.Color(ATMOS.fog)
  scene.fog = new THREE.Fog(ATMOS.fog, 36, 80)

  const camera = new THREE.PerspectiveCamera(28, window.innerWidth / window.innerHeight, 0.5, 200)
  const CAM_OFFSET = new THREE.Vector3(0, 23, 19)
  let zoom = 1

  // ---------------------------------------------------------------- light
  // Cool blue sky fill from above, warm green-brown bounce from the fields
  const hemi = new THREE.HemisphereLight(ATMOS.skyFill, ATMOS.groundFill, ATMOS.fillIntensity)
  scene.add(hemi)
  // One warm, low late-afternoon sun; its shadow box follows the player
  const sun = new THREE.DirectionalLight(BASE.sun, ATMOS.sunIntensity)
  sun.castShadow = true
  sun.shadow.mapSize.setScalar(QUALITY[quality].shadow)
  sun.shadow.camera.left = -24
  sun.shadow.camera.right = 24
  sun.shadow.camera.top = 22
  sun.shadow.camera.bottom = -22
  sun.shadow.camera.near = 1
  sun.shadow.camera.far = 120
  sun.shadow.bias = -0.0006
  sun.shadow.normalBias = 0.045
  scene.add(sun, sun.target)
  const SUN_OFFSET = ATMOS.sunDir.clone().multiplyScalar(55)
  if (reducedMotion) U.uWind.value = 0.15

  // ---------------------------------------------------------------- world
  const world = buildWorld({ reducedMotion })
  scene.add(world.staticRoot, world.dynamicRoot)

  const avatar = createAvatar()
  scene.add(avatar.root)
  const player = {
    pos: new THREE.Vector3(world.spawn.x, world.heightAt(world.spawn.x, world.spawn.z), world.spawn.z),
    facing: world.spawn.facing,
    speed: 0,
  }
  avatar.root.position.copy(player.pos)
  avatar.root.rotation.y = player.facing

  const audio = createAudio()
  const ui = createUI({ audio, reducedMotion })

  // ------------------------------------------------------------- progress
  const counted = world.interactables.filter((i) => i.counts)
  let found = new Set()
  try {
    found = new Set(JSON.parse(localStorage.getItem(PROGRESS_KEY) || '[]'))
  } catch {
    /* fresh start */
  }
  for (const it of world.interactables) {
    if (found.has(it.id)) {
      it.discovered = true
      it.sparkle.visible = false
      it.light?.()
    }
  }
  const foundCount = () => counted.filter((i) => i.discovered).length
  ui.setProgress(foundCount(), counted.length)

  const byId = Object.fromEntries(world.interactables.map((i) => [i.id, i]))
  const isFound = (id) => !!byId[id]?.discovered
  const nameplates = createNameplates({ container: document.getElementById('nameplates'), items: world.interactables, camera })
  const minimap = createMinimap({
    canvas: document.getElementById('minimap'),
    world,
    onTravel: (place) => {
      if (!started || ui.isOpen) return
      if (place.label) ui.toast(`Walking to <strong>${place.label}</strong>`, 1600)
      travelTo(place.x, place.z)
    },
  })

  function markFound(it) {
    if (it.discovered) return
    it.discovered = true
    it.sparkle.visible = false
    if (!it.counts) return
    found.add(it.id)
    try {
      localStorage.setItem(PROGRESS_KEY, JSON.stringify([...found]))
    } catch {
      /* not persisted, still counted this visit */
    }
    const n = foundCount()
    ui.setProgress(n, counted.length)
    audio.discover()
    if (n === counted.length) {
      ui.toast('<strong>You found everything!</strong> Thanks for visiting. The post box by the post office is the best way to say hi.', 6000)
    } else {
      ui.toast(`<strong>Discovered</strong> ${it.name} · ${n}/${counted.length}`)
    }
  }

  // ------------------------------------------------------- GitHub board
  const board = world.interactables.find((i) => i.id === 'board')
  fetch('https://github-contributions-api.jogruber.de/v4/wiledw?y=last')
    .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
    .then((data) => {
      const days = data.contributions || []
      if (!days.length) return
      const total = data.total?.lastYear ?? Object.values(data.total || {}).reduce((a, b) => a + b, 0)
      board.setContributions({ total, days })
      board.entry = {
        ...board.entry,
        pages: [`${total.toLocaleString('en-CA')} contributions on GitHub over the last 12 months. The board shows the last six months, one square per day.`],
      }
    })
    .catch(() => {
      /* the board keeps its default copy */
    })

  // ----------------------------------------------------------- collision
  const PLAYER_R = 0.4
  function blocked(x, z) {
    // the ground itself: water, paddies, steep stone risers and the rim are off limits
    if (!world.canStand(x, z)) return true
    for (const c of world.colliders) {
      if (c.off) continue
      if (c.type === 'circle') {
        const dx = x - c.x
        const dz = z - c.z
        const rr = c.r + PLAYER_R
        if (dx * dx + dz * dz < rr * rr) return true
      } else if (c.type === 'box') {
        if (x > c.minX - PLAYER_R && x < c.maxX + PLAYER_R && z > c.minZ - PLAYER_R && z < c.maxZ + PLAYER_R) return true
      } else {
        const vx = c.x2 - c.x1
        const vz = c.z2 - c.z1
        const t = Math.max(0, Math.min(1, ((x - c.x1) * vx + (z - c.z1) * vz) / (vx * vx + vz * vz)))
        const dx = x - (c.x1 + vx * t)
        const dz = z - (c.z1 + vz * t)
        const rr = c.r + PLAYER_R
        if (dx * dx + dz * dz < rr * rr) return true
      }
    }
    return false
  }

  /** Move with wall-sliding; returns the distance actually travelled. */
  function tryMove(dx, dz) {
    const { pos } = player
    if (!blocked(pos.x + dx, pos.z + dz)) {
      pos.x += dx
      pos.z += dz
      return Math.hypot(dx, dz)
    }
    if (dx && !blocked(pos.x + dx, pos.z)) {
      pos.x += dx
      return Math.abs(dx)
    }
    if (dz && !blocked(pos.x, pos.z + dz)) {
      pos.z += dz
      return Math.abs(dz)
    }
    return 0
  }

  // --------------------------------------------------------------- input
  const keys = new Set()
  let started = false
  let walkTarget = null // { x, z, interact? }
  let walkQueue = [] // further waypoints after walkTarget (travel along the street)

  /** Walk to (x, z) along the village's streets; optionally interact on arrival. */
  function travelTo(x, z, it) {
    const pts = world.route(player.pos.x, player.pos.z, x, z).map(([px, pz]) => ({ x: px, z: pz }))
    if (it) pts[pts.length - 1].interact = it
    walkTarget = pts.shift() || null
    walkQueue = pts
    stuckFor = 0
  }

  const DIRS = {
    KeyW: [0, -1],
    ArrowUp: [0, -1],
    KeyS: [0, 1],
    ArrowDown: [0, 1],
    KeyA: [-1, 0],
    ArrowLeft: [-1, 0],
    KeyD: [1, 0],
    ArrowRight: [1, 0],
  }

  function start() {
    if (started) return
    started = true
    audio.unlock()
    title.classList.add('is-gone')
    setTimeout(() => (title.hidden = true), 700)
    document.body.classList.add('is-playing')
    let seen = false
    try {
      seen = localStorage.getItem('village:welcomed') === '1'
      localStorage.setItem('village:welcomed', '1')
    } catch {
      /* ignore */
    }
    avatar.wave(2.2)
    if (!seen) setTimeout(() => ui.open(WELCOME), 550)
    else ui.toast('Welcome back! Your discoveries are where you left them.')
  }
  startBtn.addEventListener('click', start)
  title.addEventListener('click', (e) => {
    if (!e.target.closest('a') && !startBtn.disabled) start()
  })

  function interact(it) {
    if (!it || hop) return
    if (it.kind === 'bike') return mount()
    walkTarget = null
    walkQueue = []
    rideV = 0
    const look = it.spot || it.pos
    if (!riding) player.facing = Math.atan2(look.x - player.pos.x, look.z - player.pos.z)
    it.onInteract?.()
    // characters stop and look at you while you talk
    if ('freeze' in it) it.freeze = true
    it.lookAt?.(player.pos.x, player.pos.z)
    ui.hidePrompt()
    ui.open(it.entry, {
      onClose: () => {
        if ('freeze' in it) it.freeze = false
      },
    })
    markFound(it)
  }

  // ------------------------------------------------------------- the bike
  // Parked by the post box on every visit. Ride it anywhere; it stays wherever
  // you hop off until you ride it again (in memory only, so a refresh resets it).
  const bike = world.bike
  const hopBtn = document.getElementById('btn-hop')
  let riding = false
  let rideV = 0
  let lean = 0
  let lastHeading = 0
  let toldBike = false

  // Hopping on and off is a short arc between the ground and the saddle.
  let hop = null // { t, dur, from, to, yaw0, yaw1, lift, done }
  function stepHop(dt) {
    hop.t += dt
    const k = Math.min(1, hop.t / hop.dur)
    const e = k * k * (3 - 2 * k)
    avatar.root.position.lerpVectors(hop.from, hop.to, e)
    avatar.root.position.y += Math.sin(k * Math.PI) * hop.lift
    let dy = hop.yaw1 - hop.yaw0
    dy = Math.atan2(Math.sin(dy), Math.cos(dy))
    avatar.root.rotation.set(0, hop.yaw0 + dy * Math.min(1, e * 1.4), 0)
    if (k >= 1) {
      const done = hop.done
      hop = null
      done()
    }
  }

  function mount() {
    if (riding || hop || !started) return
    walkTarget = null
    walkQueue = []
    rideV = 0
    lean = 0
    const b = bike.root.position
    const h = bike.heading
    bike.mount()
    ui.hidePrompt()
    hop = {
      t: 0,
      dur: reducedMotion ? 0.18 : 0.38,
      from: avatar.root.position.clone(),
      to: b.clone(),
      yaw0: avatar.root.rotation.y,
      yaw1: h,
      lift: 0.8,
      done: () => {
        riding = true
        avatar.root.position.set(0, 0, 0)
        avatar.root.rotation.set(0, 0, 0)
        bike.seat.add(avatar.root)
        bike.seated()
        audio.bell()
        hopBtn.hidden = false
        if (!toldBike) {
          toldBike = true
          ui.toast(coarse ? '<strong>On your bike!</strong> Tap Hop off to park it anywhere.' : '<strong>On your bike!</strong> Shift to go faster, B to hop off and park it anywhere.', 3600)
        }
      },
    }
    player.pos.x = b.x
    player.pos.z = b.z
    player.facing = lastHeading = h
    avatar.setRiding(true) // tuck into the seated pose on the way up
    audio.step()
  }

  function dismount() {
    if (!riding || hop) return
    riding = false
    rideV = 0
    const h = player.facing
    const { x, z } = player.pos
    const from = new THREE.Vector3()
    avatar.root.getWorldPosition(from)
    bike.park(x, z, h, true)
    bike.thump()
    // step off to a side, else behind or ahead; of each pair, the one nearer
    // the camera (south), so you never land hidden behind a roof or a tree
    const lx = Math.cos(h)
    const lz = -Math.sin(h)
    const fx = Math.sin(h)
    const fz = Math.cos(h)
    const pair = (ax, az, d) => (az >= 0 ? [[ax, az, d], [-ax, -az, d]] : [[-ax, -az, d], [ax, az, d]])
    const spots = [...pair(lx, lz, 0.95), ...pair(fx, fz, 1.2), ...pair(lx, lz, 1.4)]
    const spot = spots.find(([dx, dz, d]) => !blocked(x + dx * d, z + dz * d))
    if (spot) {
      player.pos.x = x + spot[0] * spot[2]
      player.pos.z = z + spot[1] * spot[2]
    } else {
      bike.solid = false // nowhere to step: it turns solid once you walk away
    }
    player.pos.y = world.heightAt(player.pos.x, player.pos.z)
    scene.add(avatar.root)
    avatar.root.position.copy(from)
    avatar.root.rotation.set(0, h, 0)
    avatar.setRiding(false)
    hopBtn.hidden = true
    hop = {
      t: 0,
      dur: reducedMotion ? 0.16 : 0.32,
      from,
      to: player.pos.clone(),
      yaw0: h,
      yaw1: h,
      lift: 0.55,
      done: () => audio.step(),
    }
  }
  hopBtn.addEventListener('click', (e) => {
    dismount()
    e.currentTarget.blur()
  })

  window.addEventListener('keydown', (e) => {
    if (e.metaKey || e.ctrlKey || e.altKey) return
    if (!started) {
      if (e.code === 'Tab') return
      if (!title.hidden) {
        e.preventDefault()
        start()
      }
      return
    }
    if (e.code === 'Escape') {
      if (ui.helpOpen) ui.toggleHelp(false)
      else if (ui.isOpen) ui.close()
      return
    }
    if (ui.helpOpen) {
      if (['KeyH', 'Slash', 'KeyE', 'Space', 'Enter'].includes(e.code)) {
        e.preventDefault()
        ui.toggleHelp(false)
      }
      return
    }
    if (ui.isOpen) {
      if (['KeyE', 'Space', 'Enter'].includes(e.code)) {
        // Let Enter/Space activate a focused link normally
        if (e.code !== 'KeyE' && document.activeElement?.closest?.('#dialog a')) return
        e.preventDefault()
        ui.advance()
      } else if (/^Digit[1-9]$/.test(e.code)) {
        if (ui.activateAction(Number(e.code.slice(5)))) e.preventDefault()
      }
      return
    }
    if (DIRS[e.code]) {
      e.preventDefault()
      keys.add(e.code)
      walkTarget = null
      walkQueue = []
    } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
      keys.add('Shift')
    } else if (['KeyE', 'Space', 'Enter'].includes(e.code)) {
      e.preventDefault()
      if (nearest) interact(nearest)
      else if (riding) dismount()
    } else if (e.code === 'KeyB') {
      if (riding) dismount()
      else if (Math.hypot(bike.root.position.x - player.pos.x, bike.root.position.z - player.pos.z) < bike.it.radius + 0.4) mount()
      else ui.toast('Your bike is where you left it. Look for it on the map.', 2400)
    } else if (e.code === 'KeyH' || e.code === 'Slash') {
      ui.toggleHelp(true)
    } else if (e.code === 'KeyM') {
      document.getElementById('btn-map').click()
    }
  })
  window.addEventListener('keyup', (e) => {
    keys.delete(e.code)
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') keys.delete('Shift')
  })
  window.addEventListener('blur', () => keys.clear())

  // Click / tap to walk; clicking near something walks there and interacts.
  const raycaster = new THREE.Raycaster()
  const ndc = new THREE.Vector2()
  const ground = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0)
  const hitPoint = new THREE.Vector3()
  renderer.domElement.addEventListener('pointerdown', (e) => {
    if (!started) return start()
    if (ui.isOpen) return ui.advance()
    if (ui.helpOpen) return ui.toggleHelp(false)
    ndc.set((e.clientX / window.innerWidth) * 2 - 1, -(e.clientY / window.innerHeight) * 2 + 1)
    raycaster.setFromCamera(ndc, camera)
    if (!raycaster.ray.intersectPlane(ground, hitPoint)) return
    // Prefer an interactable whose spot is near the click (in screen space)
    let pick = null
    let best = 46
    const v = new THREE.Vector3()
    for (const it of world.interactables) {
      if (it.hidden) continue
      const p = it.spot || it.pos
      v.set(p.x, p.y + Math.min(it.height, 1.6), p.z).project(camera)
      const sx = ((v.x + 1) / 2) * window.innerWidth
      const sy = ((1 - v.y) / 2) * window.innerHeight
      const d = Math.hypot(sx - e.clientX, sy - e.clientY)
      if (d < best) {
        best = d
        pick = it
      }
    }
    if (pick) travelTo(pick.pos.x, pick.pos.z, pick)
    else if (Math.hypot(hitPoint.x - player.pos.x, hitPoint.z - player.pos.z) > 8) travelTo(hitPoint.x, hitPoint.z)
    else {
      walkTarget = { x: hitPoint.x, z: hitPoint.z }
      walkQueue = []
      stuckFor = 0
    }
  })

  renderer.domElement.addEventListener(
    'wheel',
    (e) => {
      e.preventDefault()
      zoom = THREE.MathUtils.clamp(zoom + e.deltaY * 0.0012, 0.6, 1.5)
    },
    { passive: false },
  )

  // HUD buttons
  const soundBtn = document.getElementById('btn-sound')
  const syncSound = () => {
    soundBtn.setAttribute('aria-pressed', String(audio.enabled))
    soundBtn.title = audio.enabled ? 'Sound on' : 'Sound off'
    soundBtn.classList.toggle('is-off', !audio.enabled)
  }
  syncSound()
  soundBtn.addEventListener('click', () => {
    audio.setEnabled(!audio.enabled)
    syncSound()
    soundBtn.blur()
  })
  document.getElementById('btn-help').addEventListener('click', (e) => {
    ui.toggleHelp()
    e.currentTarget.blur()
  })
  document.getElementById('help-close').addEventListener('click', () => ui.toggleHelp(false))
  const mapBox = document.querySelector('.hud-map')
  const mapBtn = document.getElementById('btn-map')
  const setMap = (show) => {
    mapBox.hidden = !show
    mapBtn.setAttribute('aria-pressed', String(show))
    try {
      localStorage.setItem('village:map', show ? 'on' : 'off')
    } catch {
      /* ignore */
    }
  }
  try {
    if (localStorage.getItem('village:map') === 'off') setMap(false)
  } catch {
    /* ignore */
  }
  mapBtn.addEventListener('click', (e) => {
    setMap(mapBox.hidden)
    e.currentTarget.blur()
  })

  // ------------------------------------------------------- time of day
  // The sky follows the visitor's own clock; the HUD clock can preview other times.
  let skyMode = 0 // index into PREVIEWS; 0 = live
  let skyHour = localHour()
  let lastClockText = ''
  const clockBtn = document.getElementById('clock')
  const clockText = document.getElementById('clock-text')
  function targetHour() {
    const p = PREVIEWS[skyMode]
    return p.mode === 'live' ? localHour() : p.hour
  }
  function applySky(h) {
    const s = sampleSky(h)
    sun.color.copy(s.sun)
    sun.intensity = s.int
    SUN_OFFSET.copy(s.dir).multiplyScalar(55)
    hemi.color.copy(s.sky)
    hemi.groundColor.copy(s.ground)
    hemi.intensity = s.fill
    scene.fog.color.copy(s.fog)
    scene.background.copy(s.fog)
    U.uShadowTint.value.copy(s.tint)
    U.uSunNorm.value = Math.max(0.3, s.int) / Math.PI
    U.uGlow.value = s.glow
    renderer.toneMappingExposure = s.exposure
    setSignLight(s.signs)
    clockBtn.classList.toggle('is-night', s.night)
  }
  function updateClockLabel() {
    const p = PREVIEWS[skyMode]
    const live = p.mode === 'live'
    const h = live ? localHour() : p.hour
    const d = new Date()
    if (!live) d.setHours(Math.floor(h), Math.round((h % 1) * 60))
    const time = d.toLocaleTimeString(undefined, { hour: 'numeric', minute: '2-digit' })
    const text = `${time} · ${periodOf(h)}${live ? '' : ' (preview)'}`
    if (text !== lastClockText) {
      lastClockText = text
      clockText.textContent = text
      clockBtn.title = live ? 'Lit by your local time. Click to preview other times of day.' : `Previewing ${p.label}. Click for the next one.`
      world.setStationClock(d.getHours(), d.getMinutes())
    }
  }
  clockBtn.addEventListener('click', (e) => {
    skyMode = (skyMode + 1) % PREVIEWS.length
    updateClockLabel()
    ui.toast(PREVIEWS[skyMode].mode === 'live' ? 'Back to <strong>your local time</strong>' : `Previewing <strong>${PREVIEWS[skyMode].label}</strong>`, 1500)
    e.currentTarget.blur()
  })
  applySky(skyHour)
  updateClockLabel()

  // --------------------------------------------------------------- loop
  const timer = new THREE.Timer()
  timer.connect(document)
  const camTarget = new THREE.Vector3().copy(player.pos)
  const tmp = new THREE.Vector3()
  let nearest = null
  let stuckFor = 0
  let frameNo = 0
  // district title cards: shown on entering an area, not when hovering on its border
  let areaKey = null
  let areaCandidate = null
  let areaSince = 0
  const areaShownAt = {}
  let stepAcc = 0
  const screen = new THREE.Vector3()
  const ctx = { t: 0, dt: 0, focus: player.pos, camera }

  // frame-time watchdog: averages over ~2 s of play, ignoring hidden tabs and hitches
  let perfSum = 0
  let perfN = 0
  function setQuality(level) {
    quality = level
    const q = QUALITY[level]
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, q.pixelRatio))
    renderer.setSize(window.innerWidth, window.innerHeight)
    if (sun.shadow.mapSize.x !== q.shadow) {
      sun.shadow.mapSize.setScalar(q.shadow)
      sun.shadow.map?.dispose()
      sun.shadow.map = null
    }
  }
  function watchFrames(raw) {
    if (!started || document.hidden || quality >= QUALITY.length - 1 || raw > 0.25) return
    perfSum += raw
    if (++perfN < 120) return
    const avg = perfSum / perfN
    perfSum = perfN = 0
    if (avg > 1 / 45) setQuality(quality + 1) // under ~45 fps: step down
  }

  function frame(time) {
    timer.update(time)
    const raw = timer.getDelta()
    watchFrames(raw)
    const dt = Math.min(raw, 0.05)
    const t = timer.getElapsed()
    U.uTime.value = t
    // ease toward the target time (forward round the clock), so previews glide
    {
      let diff = targetHour() - skyHour
      diff = ((diff % 24) + 24) % 24
      if (diff > 0.001) skyHour = (skyHour + Math.min(diff, Math.max(0.02, diff * dt * 1.8))) % 24
      applySky(skyHour)
      if ((frameNo & 63) === 0) updateClockLabel()
    }

    // ---- movement
    let mx = 0
    let mz = 0
    const canMove = started && !ui.isOpen && !ui.helpOpen && !hop
    if (canMove) {
      for (const k of keys) {
        const d = DIRS[k]
        if (d) {
          mx += d[0]
          mz += d[1]
        }
      }
      if (!mx && !mz && walkTarget) {
        const dx = walkTarget.x - player.pos.x
        const dz = walkTarget.z - player.pos.z
        const dist = Math.hypot(dx, dz)
        const arrive = walkTarget.interact ? walkTarget.interact.radius * 0.6 : walkQueue.length ? 0.45 : 0.15
        if (dist <= arrive) {
          const it = walkTarget.interact
          walkTarget = walkQueue.shift() || null
          if (riding && !walkTarget) rideV = Math.min(rideV, 1.2)
          if (it) interact(it)
        } else {
          mx = dx / dist
          mz = dz / dist
        }
      }
    }
    let len = Math.hypot(mx, mz)
    const running = keys.has('Shift') || (walkTarget && !keys.size && (walkQueue.length > 0 || Math.hypot(walkTarget.x - player.pos.x, walkTarget.z - player.pos.z) > 7))
    const maxSpeed = riding ? (running ? 11 : 7.4) : running ? 8.2 : 4.8
    const steering = riding && len > 0 && !walkTarget // keys: the bike goes where it points
    if (riding) {
      // the bike picks up speed and coasts to a stop instead of starting and stopping dead
      let want = len > 0 && canMove ? maxSpeed : 0
      if (want && walkTarget && !walkQueue.length) want = Math.min(want, 1.6 + Math.hypot(walkTarget.x - player.pos.x, walkTarget.z - player.pos.z) * 3)
      rideV += (want - rideV) * Math.min(1, dt * (want > rideV ? 2.4 : 3.2))
      if (!canMove) rideV = 0
      if (len === 0 && rideV > 0.2) {
        mx = Math.sin(player.facing)
        mz = Math.cos(player.facing)
        len = 1
      }
    }
    let moved = 0
    if (len > 0) {
      mx /= len
      mz /= len
      const want = Math.atan2(mx, mz)
      let diff = want - player.facing
      diff = Math.atan2(Math.sin(diff), Math.cos(diff))
      player.facing += diff * Math.min(1, dt * (riding ? 7.5 : 14))
      if (steering) {
        mx = Math.sin(player.facing)
        mz = Math.cos(player.facing)
      }
      const v = riding ? rideV : maxSpeed
      moved = tryMove(mx * v * dt, mz * v * dt)
      if (riding && moved < v * dt * 0.4) rideV *= 0.7 // bumped into something
      if (walkTarget) {
        if (moved < (riding ? Math.max(rideV, 1.5) : maxSpeed) * dt * 0.2) stuckFor += dt
        else stuckFor = 0
        if (stuckFor > 0.35 && walkQueue.length) {
          walkTarget = walkQueue.shift()
          stuckFor = 0
        } else if (stuckFor > 0.35) {
          const it = walkTarget.interact
          walkTarget = null
          // Close enough to reach it? Then interact anyway.
          if (it && Math.hypot(it.pos.x - player.pos.x, it.pos.z - player.pos.z) < it.radius + 0.6) interact(it)
        }
      }
    }
    const actual = dt > 0 ? moved / dt : 0
    player.speed += (actual / 4.8 - player.speed) * Math.min(1, dt * 12)
    if (actual > 0.5 && !riding) {
      stepAcc += moved
      if (stepAcc > (running ? 1.5 : 1.15)) {
        stepAcc = 0
        audio.step()
      }
    }

    player.pos.y = world.heightAt(player.pos.x, player.pos.z)
    if (hop) {
      stepHop(dt)
      avatar.animate(dt, t, bike.crankAngle, true)
    } else if (riding) {
      // lean into turns, more the faster you go
      let turn = player.facing - lastHeading
      turn = Math.atan2(Math.sin(turn), Math.cos(turn))
      lastHeading = player.facing
      const wantLean = THREE.MathUtils.clamp(dt > 0 ? (-turn / dt) * 0.07 * Math.min(1, rideV / 5) : 0, -0.3, 0.3)
      lean += (wantLean - lean) * Math.min(1, dt * 7)
      bike.ride(player.pos.x, player.pos.z, player.facing, lean, moved)
      avatar.animate(dt, t, bike.crankAngle)
      if (rideV > 6.5) {
        stepAcc += moved
        if (stepAcc > 1.8) {
          stepAcc = 0
          world.spawnDust(player.pos.x - Math.sin(player.facing) * 0.55, player.pos.y, player.pos.z - Math.cos(player.facing) * 0.55, player.facing)
        }
      }
    } else {
      avatar.root.position.copy(player.pos)
      let rd = player.facing - avatar.root.rotation.y
      rd = Math.atan2(Math.sin(rd), Math.cos(rd))
      avatar.root.rotation.y += rd * Math.min(1, dt * 16)
      // a little dust kicks up on each footfall on the move
      if (avatar.animate(dt, t, player.speed) && player.speed > 0.5) world.spawnDust(player.pos.x, player.pos.y, player.pos.z, player.facing)
      // parked where there was no room to step off: solid again once you're clear
      if (!bike.solid && Math.hypot(bike.root.position.x - player.pos.x, bike.root.position.z - player.pos.z) > 1.1) bike.solid = true
    }

    // ---- world animation
    ctx.t = t
    ctx.dt = dt
    for (const u of world.updaters) u(ctx)

    // ---- camera follow
    camTarget.lerp(player.pos, reducedMotion ? 1 : Math.min(1, dt * 5))
    tmp.copy(CAM_OFFSET).multiplyScalar(zoom)
    camera.position.copy(camTarget).add(tmp)
    camera.lookAt(camTarget.x, camTarget.y + 0.8, camTarget.z)
    sun.position.copy(camTarget).add(SUN_OFFSET)
    sun.target.position.copy(camTarget)

    // ---- nearest interactable + prompt
    nearest = null
    if (started && !ui.isOpen) {
      let bestD = Infinity
      for (const it of world.interactables) {
        if (it.hidden) continue
        const d = Math.hypot(it.pos.x - player.pos.x, it.pos.z - player.pos.z)
        if (d < it.radius && d < bestD) {
          bestD = d
          nearest = it
        }
      }
    }
    if (nearest && !ui.helpOpen) {
      const p = nearest.spot || nearest.pos
      screen.set(p.x, p.y + nearest.height + 0.55, p.z).project(camera)
      ui.showPrompt(nearest, ((screen.x + 1) / 2) * window.innerWidth, ((1 - screen.y) / 2) * window.innerHeight, coarse)
    } else {
      ui.hidePrompt()
    }

    if (started && (frameNo & 3) === 0) {
      const area = world.areaAt(player.pos.x, player.pos.z)
      const key = area ? area.key : null
      if (key !== areaCandidate) {
        areaCandidate = key
        areaSince = t
      }
      if (key !== areaKey && t - areaSince > 0.35 && !ui.isOpen) {
        areaKey = key
        if (area && t - (areaShownAt[key] ?? -99) > 8) {
          areaShownAt[key] = t
          ui.showArea({ ...area, found: area.ids.filter(isFound).length, total: area.ids.length })
        }
      }
    }
    if (ui.isOpen) ui.hideArea()

    const platesOn = started && !ui.isOpen && !ui.helpOpen
    nameplates.visible = platesOn
    if (platesOn) nameplates.update(player.pos, nearest, window.innerWidth, window.innerHeight)
    if ((frameNo++ & 1) === 0) minimap.draw(player.pos, riding ? player.facing : avatar.root.rotation.y, isFound, riding ? null : bike.root.position)
    renderer.render(scene, camera)
  }

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight
    // Keep the whole width readable on narrow and portrait screens
    camera.fov = camera.aspect < 1 ? 44 : 28
    camera.updateProjectionMatrix()
    renderer.setSize(window.innerWidth, window.innerHeight)
  })
  window.dispatchEvent(new Event('resize'))

  // Tapping the prompt interacts too (handy on touch screens)
  document.getElementById('prompt').addEventListener('click', () => interact(nearest))

  renderer.setAnimationLoop(frame)
  if (import.meta.env.DEV) window.__village = { player, world, camera, ui, start, renderer, scene, travelTo, mount, dismount, get riding() { return riding }, get quality() { return quality } }
  document.getElementById('title-status').textContent = coarse ? 'Tap anywhere to start' : 'Press any key to start'
  startBtn.disabled = false
  startBtn.textContent = 'Enter the village'
  startBtn.classList.add('is-ready')
  startBtn.focus({ preventScroll: true })
}
