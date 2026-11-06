import * as THREE from 'three'

// Floating name tags over interactable things. Plain DOM text (crisp at any
// zoom, no draw calls), faded in by distance. Where several things sit close
// together, the nearest tags win and overlapping ones step aside.
export function createNameplates({ container, items, camera }) {
  const plates = items.map((it) => {
    const el = document.createElement('div')
    el.className = 'np'
    const check = document.createElement('span')
    check.className = 'np-check'
    check.setAttribute('aria-hidden', 'true')
    check.textContent = '✓'
    const text = document.createElement('span')
    text.textContent = it.label
    el.append(check, text)
    container.append(el)
    return { it, el, w: 0, h: 0, op: -1, done: null, x: 0, y: 0, d: 0, visible: false }
  })
  const v = new THREE.Vector3()
  const placed = []

  function update(player, active, width, height) {
    const candidates = []
    for (const p of plates) {
      const at = p.it.spot || p.it.pos
      p.d = Math.hypot(at.x - player.x, at.z - player.z)
      const range = p.it.plateRange ?? 9
      const near = Math.min(4.5, range * 0.55)
      let op = p.d < near ? 1 : p.d < range ? 1 - (p.d - near) / (range - near) : 0
      if (p.it === active || p.it.hidden) op = 0
      p.target = op
      if (op > 0.01) {
        v.set(at.x, at.y + p.it.height + 0.62, at.z).project(camera)
        if (v.z < 1 && v.x > -1.2 && v.x < 1.2 && v.y > -1.2 && v.y < 1.2) {
          p.x = ((v.x + 1) / 2) * width
          p.y = ((1 - v.y) / 2) * height
          candidates.push(p)
          continue
        }
      }
      p.target = 0
    }
    // nearest first; skip any tag that would overlap one already placed
    candidates.sort((a, b) => a.d - b.d)
    placed.length = 0
    // keep clear of the interaction prompt bubble
    if (active) {
      const at = active.spot || active.pos
      v.set(at.x, at.y + active.height + 0.55, at.z).project(camera)
      const x = ((v.x + 1) / 2) * width
      const y = ((1 - v.y) / 2) * height
      placed.push({ l: x - 130, r: x + 130, t: y - 70, b: y + 6 })
    }
    for (const p of candidates) {
      if (!p.w) {
        p.w = p.el.offsetWidth || 120
        p.h = p.el.offsetHeight || 24
      }
      const r = { l: p.x - p.w / 2 - 4, r: p.x + p.w / 2 + 4, t: p.y - p.h - 2, b: p.y + 2 }
      if (placed.some((q) => r.l < q.r && r.r > q.l && r.t < q.b && r.b > q.t)) {
        p.target = 0
        continue
      }
      placed.push(r)
      p.el.style.transform = `translate(${Math.round(p.x)}px, ${Math.round(p.y)}px) translate(-50%, -100%)`
    }
    for (const p of plates) {
      if (Math.abs(p.target - p.op) > 0.02) {
        p.op = p.target
        p.el.style.opacity = p.op.toFixed(2)
      }
      if (p.done !== p.it.discovered) {
        p.done = p.it.discovered
        p.el.classList.toggle('is-done', p.done)
      }
    }
  }

  return {
    update,
    set visible(on) {
      container.hidden = !on
    },
  }
}
