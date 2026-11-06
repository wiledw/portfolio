// DOM side of the village: dialog box, interaction prompt, HUD, toasts, help.
// Everything here is plain HTML so text stays selectable, links are real
// links, and screen readers get the content through aria-live.

const $ = (sel) => document.querySelector(sel)

function el(tag, cls, text) {
  const n = document.createElement(tag)
  if (cls) n.className = cls
  if (text != null) n.textContent = text
  return n
}

export function createUI({ audio, reducedMotion }) {
  const dialog = $('#dialog')
  const nameTag = $('#dialog-name')
  const kicker = $('#dialog-kicker')
  const media = $('#dialog-media')
  const text = $('#dialog-text')
  const extras = $('#dialog-extras')
  const hint = $('#dialog-hint')
  const prompt = $('#prompt')
  const promptVerb = $('#prompt-verb')
  const promptName = $('#prompt-name')
  const progress = $('#progress')
  const progressBar = $('#progress-bar')
  const toastBox = $('#toast')
  const help = $('#help')

  let current = null // { entry, page, typing, timer, onClose }

  function renderExtras(entry) {
    extras.replaceChildren()
    if (entry.list) {
      const h = el('p', 'd-list-heading', entry.list.heading)
      const ol = el('ol', 'd-list')
      for (const [title, desc] of entry.list.items) {
        const li = el('li')
        li.append(el('strong', null, title), el('span', null, ' ' + desc))
        ol.append(li)
      }
      extras.append(h, ol)
    }
    if (entry.tags?.length) {
      const wrap = el('div', 'd-tags')
      for (const t of entry.tags) wrap.append(el('span', 'd-tag', t))
      extras.append(wrap)
    }
    const actions = [...(entry.actions || [])]
    if (entry.more) actions.push({ label: entry.more.label, href: entry.more.href, sameTab: true })
    if (actions.length) {
      const wrap = el('div', 'd-actions')
      actions.forEach((a, i) => {
        const link = el('a', 'd-action' + (a.primary ? ' is-primary' : ''))
        link.href = a.href
        if (!a.sameTab && !a.href.startsWith('mailto:')) {
          link.target = '_blank'
          link.rel = 'noopener noreferrer'
        }
        link.append(el('kbd', null, String(i + 1)))
        link.append(document.createTextNode(a.label))
        wrap.append(link)
      })
      extras.append(wrap)
    }
  }

  function setPage(i) {
    const { entry } = current
    current.page = i
    const full = entry.pages[i] ?? ''
    const last = i >= entry.pages.length - 1
    extras.hidden = true
    hint.textContent = ''
    clearInterval(current.timer)

    const finish = () => {
      clearInterval(current.timer)
      current.typing = false
      text.textContent = full
      if (last) {
        extras.hidden = !extras.childElementCount
        const links = extras.querySelectorAll('.d-action').length
        hint.innerHTML = links
          ? `<kbd>1</kbd>${links > 1 ? `–<kbd>${links}</kbd>` : ''} open link · <kbd>E</kbd> close`
          : '<kbd>E</kbd> close'
      } else {
        hint.innerHTML = '<kbd>E</kbd> next <span class="d-caret">▼</span>'
      }
    }
    current.finish = finish

    if (reducedMotion) return finish()
    current.typing = true
    let n = 0
    text.textContent = ''
    current.timer = setInterval(() => {
      n += 1
      text.textContent = full.slice(0, n)
      if (n % 3 === 0 && full[n - 1] !== ' ') audio.blip()
      if (n >= full.length) finish()
    }, 16)
  }

  function open(entry, { onClose } = {}) {
    if (current) close(true)
    current = { entry, page: 0, typing: false, timer: null, onClose }
    nameTag.textContent = entry.title
    kicker.textContent = entry.kicker || ''
    media.replaceChildren()
    media.hidden = !entry.image
    if (entry.image) {
      const img = el('img')
      img.src = entry.image.src
      img.alt = entry.image.alt
      img.decoding = 'async'
      media.classList.toggle('is-dark', !!entry.image.dark)
      media.classList.toggle('is-cover', !!entry.image.cover)
      media.append(img)
    }
    renderExtras(entry)
    dialog.hidden = false
    requestAnimationFrame(() => dialog.classList.add('is-open'))
    audio.open()
    setPage(0)
  }

  function close(silent) {
    if (!current) return
    clearInterval(current.timer)
    const cb = current.onClose
    current = null
    dialog.classList.remove('is-open')
    dialog.hidden = true
    if (!silent) audio.close()
    cb?.()
  }

  /** E / Space / Enter / click: finish typing → next page → close. */
  function advance() {
    if (!current) return
    if (current.typing) return current.finish()
    if (current.page < current.entry.pages.length - 1) return setPage(current.page + 1)
    close()
  }

  function activateAction(n) {
    if (!current || current.typing) return false
    if (current.page < current.entry.pages.length - 1) return false
    const link = extras.querySelectorAll('.d-action')[n - 1]
    if (!link) return false
    link.click()
    return true
  }

  dialog.addEventListener('click', (e) => {
    if (e.target.closest('a')) return
    advance()
  })

  // ----------------------------------------------------------- prompt
  let promptFor = null
  function showPrompt(it, x, y, touch) {
    if (promptFor !== it) {
      promptFor = it
      promptVerb.textContent = it.verb
      promptName.textContent = it.name
      prompt.querySelector('kbd').textContent = touch ? 'Tap' : 'E'
    }
    prompt.style.transform = `translate(${Math.round(x)}px, ${Math.round(y)}px) translate(-50%, -100%)`
    prompt.classList.add('is-on')
  }
  function hidePrompt() {
    promptFor = null
    prompt.classList.remove('is-on')
  }

  // ------------------------------------------------------------- HUD
  function setProgress(found, total) {
    progress.textContent = `${found} / ${total}`
    progressBar.style.width = `${(found / total) * 100}%`
  }

  let toastTimer = null
  function toast(html, ms = 2600) {
    toastBox.innerHTML = html
    toastBox.classList.add('is-on')
    clearTimeout(toastTimer)
    toastTimer = setTimeout(() => toastBox.classList.remove('is-on'), ms)
  }

  // District title card: kicker, title, and how much of it you've found
  const banner = $('#area-banner')
  let bannerTimer = null
  function showArea({ title, kicker, found, total, noun }) {
    banner.querySelector('.area-kicker').textContent = kicker
    banner.querySelector('.area-title').textContent = title
    const count = banner.querySelector('.area-count')
    const done = total > 0 && found === total
    count.textContent = total ? (done ? `All ${total} ${noun} ✓` : `${found} of ${total} ${noun}`) : ''
    count.classList.toggle('is-done', done)
    banner.classList.add('is-on')
    clearTimeout(bannerTimer)
    bannerTimer = setTimeout(() => banner.classList.remove('is-on'), 3200)
  }
  function hideArea() {
    clearTimeout(bannerTimer)
    banner.classList.remove('is-on')
  }

  // clicking the dimmed backdrop (outside the card) closes help too
  help.addEventListener('pointerdown', (e) => {
    if (e.target === help) toggleHelp(false)
  })

  // The help card pops in, and on close fades and shrinks away before hiding.
  // The game treats it as closed the moment you dismiss it.
  let helpShown = false
  let helpTimer = null
  function toggleHelp(force) {
    const show = force ?? !helpShown
    if (show === helpShown) return show
    helpShown = show
    clearTimeout(helpTimer)
    if (show) {
      help.classList.remove('is-closing')
      help.hidden = false
    } else {
      help.classList.add('is-closing')
      helpTimer = setTimeout(() => {
        help.hidden = true
        help.classList.remove('is-closing')
      }, reducedMotion ? 0 : 240)
    }
    return show
  }

  return {
    open,
    close,
    advance,
    activateAction,
    get isOpen() {
      return !!current
    },
    get helpOpen() {
      return helpShown
    },
    showPrompt,
    hidePrompt,
    setProgress,
    toast,
    toggleHelp,
    showArea,
    hideArea,
  }
}
