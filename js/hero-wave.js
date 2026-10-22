// ==========================================================================
// UzLitrPro — Hero background: animated water surface along the bottom of
// the hero, made of fine glowing ridge lines and particles.
// ==========================================================================

(function () {
  const canvas = document.querySelector(".hero-particle-wave");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const hero = canvas.closest(".hero");

  let width = 0;
  let height = 0;
  let rows = 0;
  let step = 0;
  let running = false;
  let visible = true;
  let frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const small = width < 700;
    rows = small ? 26 : 42;
    step = small ? 7 : 6;
  }

  // Height of the water at horizontal position x for a row at depth z
  // (0 = far, 1 = near). Several swells moving at different speeds give a
  // rolling, liquid look instead of a single sine.
  function surface(x, z, t) {
    const u = x / width;
    return (
      Math.sin(u * 7 - t * 0.55 + z * 2.2) * 22 +
      Math.sin(u * 13 + t * 0.8 + z * 4.0) * 9 +
      Math.sin(u * 3.2 - t * 0.3) * 30 * (0.4 + z)
    );
  }

  function draw(now) {
    if (!running) return;
    const t = now / 1000;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";

    // The water only fills the bottom band of the hero, below the buttons.
    const top = height * (width < 700 ? 0.84 : 0.74);
    const band = height - top + 30;

    // Soft glow under the water so it reads as a lit surface, not loose dots.
    const glow = ctx.createLinearGradient(0, top - 40, 0, height);
    glow.addColorStop(0, "rgba(0, 170, 210, 0)");
    glow.addColorStop(0.5, "rgba(0, 170, 210, 0.10)");
    glow.addColorStop(1, "rgba(0, 200, 190, 0.18)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, top - 40, width, height - top + 40);

    for (let r = 0; r < rows; r++) {
      const z = r / (rows - 1);
      const yBase = top + Math.pow(z, 1.5) * band;
      const amp = 0.35 + z * 0.9;
      const lineAlpha = 0.07 + z * 0.33;

      // Ridge line
      ctx.beginPath();
      for (let x = -step; x <= width + step; x += step) {
        const y = yBase - surface(x, z, t) * amp;
        if (x === -step) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.strokeStyle = `hsla(190, 100%, 66%, ${lineAlpha})`;
      ctx.lineWidth = 0.6 + z * 0.8;
      ctx.stroke();

      // Particles, brightest on the crests where light catches the water
      // Every other column, shifted per row, so dots don't form vertical stripes.
      for (let x = (r % 2) * step; x <= width; x += step * 2) {
        const h = surface(x, z, t);
        const crest = Math.max(0, h / 45);
        const a = Math.min(1, (0.12 + z * 0.6) * (0.35 + crest * 1.8));
        if (a < 0.06) continue;
        const y = yBase - h * amp;
        const size = 0.8 + z * 1.6 + crest * 1.0;
        ctx.fillStyle = `hsla(${188 + crest * 10}, 100%, ${62 + crest * 28}%, ${a})`;
        ctx.fillRect(x, y, size, size);
      }
    }

    ctx.globalCompositeOperation = "source-over";
    frame = requestAnimationFrame(draw);
  }

  function start() {
    if (running || !visible || document.hidden) return;
    running = true;
    frame = requestAnimationFrame(draw);
  }

  function stop() {
    running = false;
    cancelAnimationFrame(frame);
  }

  resize();
  window.addEventListener("resize", resize);

  // Only animate while the hero is on screen and the tab is visible.
  if ("IntersectionObserver" in window && hero) {
    new IntersectionObserver((entries) => {
      visible = entries[0].isIntersecting;
      visible ? start() : stop();
    }).observe(hero);
  }
  document.addEventListener("visibilitychange", () => (document.hidden ? stop() : start()));

  start();
})();
