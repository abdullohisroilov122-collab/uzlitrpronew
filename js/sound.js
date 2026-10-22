// ==========================================================================
// UzLitrPro — "chik" tap sound on buttons, with an on/off toggle in the
// header. Uses Web Audio so the sound plays without delay.
// ==========================================================================

(function () {
  const SOUND_URL = "assets/sounds/tap.mp3";
  const STORAGE_KEY = "uzlitr_sound";
  const VOLUME = 0.32;

  // Buttons and links that behave like buttons. Text fields never click.
  const TARGETS = [
    "button", ".btn", ".nav-cta", ".nav-links a", ".cart-toggle-btn",
    ".lang-current", ".lang-dropdown button", ".size-chip", ".qty-btn",
    ".op-channel", ".op-fab", ".social-icon", "[role='button']"
  ].join(", ");

  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  let audio = null;
  let buffer = null;

  function isOn() {
    try {
      return localStorage.getItem(STORAGE_KEY) !== "off";
    } catch (e) {
      return true;
    }
  }

  function save(on) {
    try { localStorage.setItem(STORAGE_KEY, on ? "on" : "off"); } catch (e) { /* storage unavailable */ }
  }

  // Load and decode the file once, so each tap only starts a buffer.
  function load() {
    if (!AudioCtx || audio) return;
    audio = new AudioCtx();
    fetch(SOUND_URL)
      .then((r) => r.arrayBuffer())
      .then((data) => new Promise((resolve, reject) => audio.decodeAudioData(data, resolve, reject)))
      .then((decoded) => { buffer = decoded; })
      .catch(() => { /* no sound is fine */ });
  }

  function play() {
    if (!audio || !buffer || !isOn()) return;
    if (audio.state === "suspended") audio.resume();
    const source = audio.createBufferSource();
    const gain = audio.createGain();
    gain.gain.value = VOLUME;
    source.buffer = buffer;
    source.connect(gain).connect(audio.destination);
    source.start(0);
  }

  function isTarget(el) {
    if (!el || !el.closest) return false;
    if (el.closest("input, textarea, select, [contenteditable='true']")) return false;
    return Boolean(el.closest(TARGETS));
  }

  document.addEventListener("pointerdown", (event) => {
    if (isTarget(event.target)) play();
  }, { passive: true });

  document.addEventListener("keydown", (event) => {
    if ((event.key === "Enter" || event.key === " ") && isTarget(document.activeElement)) play();
  });

  // Header toggle
  const ICON_ON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>';
  const ICON_OFF = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M11 5 6 9H2v6h4l5 4z"/><path d="m22 9-6 6M16 9l6 6"/></svg>';

  function addToggle() {
    const cart = document.querySelector(".cart-toggle-btn");
    if (!cart) return;
    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "sound-toggle";

    function render() {
      const on = isOn();
      toggle.innerHTML = on ? ICON_ON : ICON_OFF;
      toggle.setAttribute("aria-pressed", String(on));
      toggle.setAttribute("aria-label", on ? "Ovozni o'chirish" : "Ovozni yoqish");
      toggle.title = toggle.getAttribute("aria-label");
    }

    toggle.addEventListener("click", () => {
      save(!isOn());
      render();
      if (isOn()) play();
    });

    render();
    cart.parentNode.insertBefore(toggle, cart);
  }

  load();
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addToggle);
  } else {
    addToggle();
  }
})();
