// ==========================================================================
// UzLitrPro — About page accents from the design: the founding year in the
// story is bold blue, and the end of the headline is highlighted.
// Runs again after every language switch, because that replaces the text.
// ==========================================================================

(function () {
  function escape(text) {
    return text.replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  }

  function accent() {
    const story = document.querySelector('[data-i18n="about_p"]');
    if (story && !story.querySelector(".accent-year")) {
      story.innerHTML = escape(story.textContent).replace(/(2025[-\s]?\S*)/, '<strong class="accent-year">$1</strong>');
    }
    const title = document.querySelector('.about-hero [data-i18n="about_h1"]');
    if (title && !title.querySelector(".accent-words")) {
      const words = title.textContent.trim().split(/\s+/);
      const tail = words.splice(-2).join(" ");
      title.innerHTML = `${escape(words.join(" "))} <span class="accent-words">${escape(tail)}</span>`;
    }
  }

  accent();
  document.addEventListener("litrpro:langchange", accent);
})();
