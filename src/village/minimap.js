import { C } from './palette.js'

// A small parchment map in the corner: where everything is, what you've
// found, and a tap target for travelling there.
const LABEL_SIDE = { rice: 'below', home: 'above', shrine: 'right', plaza: 'right', workshop: 'above', station: 'below', post: 'left', bus: 'right' }

export function createMinimap({ canvas, world, onTravel }) {
  const B = world.map.bounds
  const pad = 2
  const minX = B.minX - pad
  const maxX = B.maxX + pad
  const minZ = B.minZ - pad
  const maxZ = B.maxZ + pad
  const W = canvas.clientWidth || 220
  const H = Math.round((W * (maxZ - minZ)) / (maxX - minX))
  canvas.style.height = `${H}px`
  const dpr = Math.min(window.devicePixelRatio || 1, 2)
  canvas.width = Math.round(W * dpr)
  canvas.height = Math.round(H * dpr)
  const ctx = canvas.getContext('2d')
  const sx = W / (maxX - minX)
  const toX = (x) => (x - minX) * sx
  const toY = (z) => (z - minZ) * sx

  // static base layer, drawn once
  const base = document.createElement('canvas')
  base.width = canvas.width
  base.height = canvas.height
  const b = base.getContext('2d')
  b.scale(dpr, dpr)
  b.fillStyle = '#f3e6c6'
  b.fillRect(0, 0, W, H)
  // hill and forest to the north and around the edge
  const hill = b.createLinearGradient(0, toY(-20), 0, toY(-8))
  hill.addColorStop(0, '#9fb47a')
  hill.addColorStop(1, 'rgba(159,180,122,0)')
  b.fillStyle = hill
  b.fillRect(0, 0, W, toY(-8))
  b.fillStyle = 'rgba(122,148,96,0.35)'
  b.fillRect(0, 0, W, 3)
  b.fillRect(0, H - 3, W, 3)
  // stream
  const stroke = (pts, width, color) => {
    b.beginPath()
    pts.forEach(([x, z], i) => (i ? b.lineTo(toX(x), toY(z)) : b.moveTo(toX(x), toY(z))))
    b.lineWidth = width
    b.strokeStyle = color
    b.lineCap = 'round'
    b.lineJoin = 'round'
    b.stroke()
  }
  stroke(world.map.stream.pts, world.map.stream.hw * 2 * sx, '#86b7c3')
  // paddies
  b.fillStyle = '#b9d0c6'
  for (const p of world.map.paddies) b.fillRect(toX(p.minX), toY(p.minZ), (p.maxX - p.minX) * sx, (p.maxZ - p.minZ) * sx)
  // paths
  for (const p of world.map.paths) {
    if (p.pts.length === 1) {
      b.beginPath()
      b.arc(toX(p.pts[0][0]), toY(p.pts[0][1]), p.hw * sx, 0, Math.PI * 2)
      b.fillStyle = '#ddc08e'
      b.fill()
    } else stroke(p.pts, Math.max(2, p.hw * 2 * sx), p.kind === 'steps' ? '#c9c2b2' : '#ddc08e')
  }
  // bridge
  b.fillStyle = '#a0703f'
  b.fillRect(toX(-1.3), toY(7.2), 2.6 * sx, 5.4 * sx)
  // buildings and the platform
  const pl = world.map.platform
  b.fillStyle = '#d6d0c2'
  b.fillRect(toX(pl.minX), toY(pl.minZ), (pl.maxX - pl.minX) * sx, (pl.maxZ - pl.minZ) * sx)
  b.fillStyle = '#7d6a57'
  b.fillRect(toX(15.2), toY(-6.3), (B.maxX + pad - 15.2) * sx, 0.9 * sx)
  b.fillStyle = '#8a6d55'
  for (const p of world.map.pads) {
    if (p.id === 'busstop') continue
    b.fillRect(toX(p.minX + 0.6), toY(p.minZ + 0.8), (p.maxX - p.minX - 1.2) * sx, (p.maxZ - p.minZ - 2.4) * sx)
  }
  b.fillRect(toX(-3.2), toY(-20.5), 6.4 * sx, 4.6 * sx) // shrine
  b.fillStyle = C.red
  b.fillRect(toX(-2.3) - 1, toY(-3.5) - 1, 4.6 * sx + 2, 2)

  const lms = world.landmarks.map((l) => ({ ...l, px: toX(l.x), py: toY(l.z) }))
  let hover = null

  function draw(player, facing, isFound, bike) {
    ctx.setTransform(1, 0, 0, 1, 0, 0)
    ctx.drawImage(base, 0, 0)
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    ctx.font = '10px "DotGothic16", ui-monospace, monospace'
    ctx.textBaseline = 'middle'
    for (const l of lms) {
      const total = l.ids.length
      const got = l.ids.filter(isFound).length
      const done = total > 0 && got === total
      const r = hover === l ? 5.5 : 4.2
      ctx.beginPath()
      ctx.arc(l.px, l.py, r, 0, Math.PI * 2)
      ctx.fillStyle = l.key === 'bus' ? '#fff8e8' : done ? '#6f9a48' : '#e9a23b'
      ctx.fill()
      ctx.lineWidth = 1.5
      ctx.strokeStyle = '#5b3a20'
      ctx.stroke()
      const text = l.key === 'bus' ? l.short : `${l.short} ${got}/${total}`
      const w = ctx.measureText(text).width
      const side = LABEL_SIDE[l.key] || 'right'
      let tx = l.px + 7
      let ty = l.py
      if (side === 'left') tx = l.px - 7 - w
      if (side === 'above') {
        tx = l.px - w / 2
        ty = l.py - 10
      }
      if (side === 'below') {
        tx = l.px - w / 2
        ty = l.py + 10
      }
      tx = Math.max(2, Math.min(W - w - 2, tx))
      ctx.fillStyle = 'rgba(251,241,218,0.85)'
      ctx.fillRect(tx - 2, ty - 6, w + 4, 12)
      ctx.fillStyle = '#4a2e18'
      ctx.fillText(text, tx, ty + 0.5)
    }
    // where you left the bike
    if (bike) {
      const bx = toX(bike.x)
      const by = toY(bike.z)
      ctx.lineWidth = 1.4
      ctx.strokeStyle = '#3f5f9e'
      ctx.fillStyle = '#fff8e8'
      for (const ox of [-2.6, 2.6]) {
        ctx.beginPath()
        ctx.arc(bx + ox, by, 2.3, 0, Math.PI * 2)
        ctx.fill()
        ctx.stroke()
      }
      ctx.beginPath()
      ctx.moveTo(bx - 2.6, by)
      ctx.lineTo(bx, by - 2.4)
      ctx.lineTo(bx + 2.6, by)
      ctx.stroke()
    }
    // you
    const px = toX(player.x)
    const py = toY(player.z)
    ctx.save()
    ctx.translate(px, py)
    ctx.rotate(-facing + Math.PI)
    ctx.beginPath()
    ctx.moveTo(0, -6)
    ctx.lineTo(4, 4)
    ctx.lineTo(0, 2)
    ctx.lineTo(-4, 4)
    ctx.closePath()
    ctx.fillStyle = C.red
    ctx.fill()
    ctx.lineWidth = 1.2
    ctx.strokeStyle = '#fff8e8'
    ctx.stroke()
    ctx.restore()
  }

  const pick = (e) => {
    const rect = canvas.getBoundingClientRect()
    const mx = ((e.clientX - rect.left) / rect.width) * W
    const my = ((e.clientY - rect.top) / rect.height) * H
    let best = null
    let bd = 16
    for (const l of lms) {
      const d = Math.hypot(l.px - mx, l.py - my)
      if (d < bd) {
        bd = d
        best = l
      }
    }
    return { best, x: mx / sx + minX, z: my / sx + minZ }
  }
  canvas.addEventListener('pointermove', (e) => {
    hover = pick(e).best
    canvas.style.cursor = hover ? 'pointer' : 'crosshair'
    canvas.title = hover ? `Walk to ${hover.label}` : 'Tap to walk here'
  })
  canvas.addEventListener('pointerleave', () => (hover = null))
  canvas.addEventListener('pointerdown', (e) => {
    e.stopPropagation()
    const { best, x, z } = pick(e)
    onTravel(best || { x, z, label: null })
  })

  return { draw }
}
