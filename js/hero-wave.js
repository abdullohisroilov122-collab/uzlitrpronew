// ==========================================================================
// UzLitrPro — Hero background: a flowing "silk" water surface along the
// bottom of the hero, made of many fine lines that bunch up and shine on
// the crests, over a faint digital layer (binary columns + circuit traces).
// ==========================================================================

(function () {
  const canvas = document.querySelector(".hero-particle-wave");
  if (!canvas || !canvas.getContext) return;

  const ctx = canvas.getContext("2d");
  const hero = canvas.closest(".hero");
  const digital = document.createElement("canvas");

  const BUCKETS = 10;
  let width = 0;
  let height = 0;
  let dpr = 1;
  let lines = 0;
  let step = 6;
  let top = 0;
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

    const small = width < 700;
    lines = small ? 36 : 60;
    step = small ? 7 : 6;
    // The water only fills the bottom band of the hero, below the buttons.
    top = height * (small ? 0.84 : 0.72);

    drawDigitalLayer(small);
  }

  // Static background drawn once per resize: binary number columns and
  // right-angled circuit traces, fading in towards the bottom.
  function drawDigitalLayer(small) {
    digital.width = canvas.width;
    digital.height = canvas.height;
    const d = digital.getContext("2d");
    d.setTransform(dpr, 0, 0, dpr, 0, 0);
    const y0 = top + 10;

    d.font = `${small ? 8 : 9}px ui-monospace, Menlo, Consolas, monospace`;
    const colW = small ? 30 : 34;
    for (let x = 6; x < width; x += colW) {
      for (let y = y0 + Math.random() * 20; y < height; y += 12) {
        const depth = (y - y0) / (height - y0);
        if (Math.random() < 0.35) continue;
        d.fillStyle = `rgba(110, 210, 235, ${0.05 + depth * 0.16})`;
        let bits = "";
        for (let i = 0; i < 4; i++) bits += Math.random() < 0.5 ? "0" : "1";
        d.fillText(bits, x, y);
      }
    }

    // Circuit traces on the right side
    d.lineWidth = 1;
    const traces = small ? 6 : 12;
    for (let i = 0; i < traces; i++) {
      let x = width * (0.6 + Math.random() * 0.38);
      let y = y0 + 20 + Math.random() * (height - y0 - 30);
      d.strokeStyle = "rgba(0, 200, 230, 0.16)";
      d.beginPath();
      d.moveTo(x, y);
      for (let k = 0; k < 4; k++) {
        if (k % 2 === 0) x += (Math.random() - 0.3) * 90;
        else y += (Math.random() - 0.5) * 40;
        d.lineTo(x, y);
      }
      d.stroke();
      d.fillStyle = "rgba(0, 220, 240, 0.28)";
      d.beginPath();
      d.arc(x, y, 2, 0, Math.PI * 2);
      d.fill();
    }
  }

  // Vertical offset of a line at x. Lines share the same swells with a small
  // phase shift each, so they bunch together on the crests like silk.
  function swell(u, z, t) {
    return (
      Math.sin(u * 4.6 - t * 0.45 + z * 1.4) * 34 +
      Math.sin(u * 10.5 + t * 0.6 + z * 2.6) * 10 +
      Math.sin(u * 2.1 - t * 0.22 + z * 0.6) * 28
    );
  }
  const MAX_SWELL = 72;

  function draw(now) {
    if (!running) return;
    const t = now / 1000;
    ctx.clearRect(0, 0, width, height);

    // Digital layer with a soft fade at its top edge
    ctx.drawImage(digital, 0, 0, width, height);

    // Glow under the water
    const glow = ctx.createLinearGradient(0, top - 60, 0, height);
    glow.addColorStop(0, "rgba(0, 150, 200, 0)");
    glow.addColorStop(0.45, "rgba(0, 150, 200, 0.12)");
    glow.addColorStop(1, "rgba(0, 120, 170, 0.22)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, top - 60, width, height - top + 60);

    // Every segment goes into one of a few brightness buckets, so the whole
    // surface is drawn with BUCKETS strokes instead of thousands.
    const paths = Array.from({ length: BUCKETS }, () => new Path2D());
    const band = height - top;

    for (let i = 0; i < lines; i++) {
      const z = i / (lines - 1);                 // 0 = far, 1 = near
      const yBase = top + Math.pow(z, 1.35) * band * 0.95;
      const amp = 0.45 + z * 0.75;
      let px = -step;
      let py = yBase - swell(px / width, z, t) * amp;

      for (let x = 0; x <= width + step; x += step) {
        const s = swell(x / width, z, t);
        const y = yBase - s * amp;
        // Crest factor: 0 in the troughs, 1 at the highest point
        const c = Math.max(0, Math.min(1, (s + MAX_SWELL) / (2 * MAX_SWELL)));
        const level = Math.min(BUCKETS - 1, Math.floor(Math.pow(c, 1.4) * (0.45 + z * 0.55) * BUCKETS * 1.45));
        paths[level].moveTo(px, py);
        paths[level].lineTo(x, y);
        px = x;
        py = y;
      }
    }

    ctx.globalCompositeOperation = "lighter";
    ctx.lineWidth = 1;
    for (let b = 0; b < BUCKETS; b++) {
      const k = (b + 1) / BUCKETS;
      ctx.strokeStyle = `hsla(${196 - k * 10}, 100%, ${46 + k * 48}%, ${0.06 + k * 0.7})`;
      ctx.stroke(paths[b]);
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
