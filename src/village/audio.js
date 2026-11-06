// Tiny synthesized sound effects: no audio files to download.
// The AudioContext is created on the first user gesture (browsers require it).

const STORE_KEY = 'village:sound'

export function createAudio() {
  let ctx = null
  let master = null
  let enabled = true
  try {
    enabled = localStorage.getItem(STORE_KEY) !== 'off'
  } catch {
    /* storage blocked: default to on */
  }

  function ensure() {
    if (ctx) return ctx
    const AC = window.AudioContext || window.webkitAudioContext
    if (!AC) return null
    ctx = new AC()
    master = ctx.createGain()
    master.gain.value = 0.22
    master.connect(ctx.destination)
    return ctx
  }

  function tone({ freq = 440, type = 'square', dur = 0.06, vol = 0.25, slide = 0, delay = 0 }) {
    if (!enabled || !ensure()) return
    if (ctx.state === 'suspended') ctx.resume()
    const t0 = ctx.currentTime + delay
    const osc = ctx.createOscillator()
    const g = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t0)
    if (slide) osc.frequency.exponentialRampToValueAtTime(freq * slide, t0 + dur)
    g.gain.setValueAtTime(0.0001, t0)
    g.gain.exponentialRampToValueAtTime(vol, t0 + 0.008)
    g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur)
    osc.connect(g).connect(master)
    osc.start(t0)
    osc.stop(t0 + dur + 0.02)
  }

  return {
    unlock: ensure,
    get enabled() {
      return enabled
    },
    setEnabled(on) {
      enabled = on
      try {
        localStorage.setItem(STORE_KEY, on ? 'on' : 'off')
      } catch {
        /* ignore */
      }
    },
    blip() {
      tone({ freq: 520 + Math.random() * 140, type: 'square', dur: 0.035, vol: 0.08 })
    },
    open() {
      tone({ freq: 660, type: 'triangle', dur: 0.09, vol: 0.2 })
      tone({ freq: 990, type: 'triangle', dur: 0.12, vol: 0.18, delay: 0.07 })
    },
    close() {
      tone({ freq: 700, type: 'triangle', dur: 0.08, vol: 0.15, slide: 0.6 })
    },
    discover() {
      ;[784, 988, 1175, 1568].forEach((f, i) => tone({ freq: f, type: 'triangle', dur: 0.18, vol: 0.16, delay: i * 0.08 }))
    },
    bell() {
      // ring-ring
      for (const d of [0, 0.16]) {
        tone({ freq: 2093, type: 'triangle', dur: 0.16, vol: 0.09, delay: d })
        tone({ freq: 2637, type: 'sine', dur: 0.12, vol: 0.05, delay: d })
      }
    },
    step() {
      tone({ freq: 140 + Math.random() * 30, type: 'sine', dur: 0.05, vol: 0.05, slide: 0.7 })
    },
  }
}
