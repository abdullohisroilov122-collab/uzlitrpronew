// ==========================================================================
// UzLitrPro — Hero background: animated particle "water surface" and
// flowing light strands, drawn on a canvas behind the hero content.
// ==========================================================================

(function () {
  const canvas = document.querySelector(".hero-particle-wave");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const hero = canvas.closest(".hero");

  let width = 0;
  let height = 0;
  let dpr = 1;
  let cols = 0;
  let rows = 0;
  let strands = [];
  let running = false;
  let visible = true;
  let frame = 0;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = rect.width;
    height = rect.height;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    // Fewer particles on small screens to stay smooth on phones.
    const small = width < 700;
    cols = small ? 70 : 150;
    rows = small ? 22 : 34;

    const count = small ? 16 : 34;
    strands = Array.from({ length: count }, (_, i) => ({
      offset: (i / count) * Math.PI * 2,
      spread: 0.35 + Math.random() * 0.65,
      speed: 0.25 + Math.random() * 0.35,
      hue: Math.random() < 0.7 ? 185 + Math.random() * 20 : 265 + Math.random() * 30,
      width: 0.6 + Math.random() * 0.9
    }));
  }

  // Particle surface: a grid seen in perspective, rows further back are
  // smaller, dimmer and packed closer together near the horizon.
  function drawSurface(t) {
    const horizon = height * 0.62;
    const depth = height - horizon + 40;

    for (let r = 0; r < rows; r++) {
      const z = r / (rows - 1);              // 0 = back, 1 = front
      const persp = 0.35 + z * 0.65;
      const yBase = horizon + Math.pow(z, 1.6) * depth;
      const alpha = 0.12 + z * 0.75;
      const size = 0.6 + z * 1.9;

      for (let c = 0; c < cols; c++) {
        const u = c / (cols - 1) - 0.5;
        const x = width / 2 + u * width * (0.9 + (1 - persp) * 0.4) * 1.25;
        if (x < -10 || x > width + 10) continue;

        const wave =
          Math.sin(u * 9 + t * 0.9 + z * 3) * 14 +
          Math.sin(u * 4 - t * 0.6 + z * 5) * 22 +
          Math.cos(u * 15 + t * 1.3) * 6;
        const y = yBase - wave * persp;

        // Brighter crests read as light catching the water.
        const crest = Math.max(0, Math.sin(u * 9 + t * 0.9 + z * 3));
        const a = Math.min(1, alpha * (0.55 + crest * 0.7));
        ctx.fillStyle = `hsla(${186 + crest * 14}, 95%, ${55 + crest * 20}%, ${a})`;
        ctx.fillRect(x, y, size, size);
      }
    }
  }

  // Light strands: soft sine ribbons flowing in from the left, with a bright
  // pulse travelling along each one.
  function drawStrands(t) {
    const startY = height * 0.72;
    for (const s of strands) {
      const grad = ctx.createLinearGradient(0, 0, width * 0.75, 0);
      grad.addColorStop(0, `hsla(${s.hue}, 90%, 60%, 0)`);
      grad.addColorStop(0.35, `hsla(${s.hue}, 90%, 62%, 0.22)`);
      grad.addColorStop(1, `hsla(${s.hue}, 90%, 62%, 0)`);
      ctx.strokeStyle = grad;
      ctx.lineWidth = s.width;
      ctx.beginPath();
      const steps = 60;
      let px = 0;
      let py = 0;
      for (let i = 0; i <= steps; i++) {
        const k = i / steps;
        const x = k * width * 0.75;
        const y =
          startY -
          k * height * 0.28 * s.spread +
          Math.sin(k * 6 + t * s.speed + s.offset) * 26 * (1 - k * 0.5);
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
        if (i === Math.floor(((t * s.speed * 0.25 + s.offset) % 1) * steps)) {
          px = x;
          py = y;
        }
      }
      ctx.stroke();

      if (px) {
        ctx.fillStyle = `hsla(${s.hue}, 100%, 75%, 0.9)`;
        ctx.beginPath();
        ctx.arc(px, py, 1.6, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }

  function draw(now) {
    if (!running) return;
    const t = now / 1000;
    ctx.clearRect(0, 0, width, height);
    ctx.globalCompositeOperation = "lighter";
    drawStrands(t);
    drawSurface(t);
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
  window.addEventListener("resize", () => {
    resize();
    if (!running) draw(performance.now());
  });

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
