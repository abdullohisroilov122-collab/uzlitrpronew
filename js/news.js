// ==========================================================================
// UzLitrPro — News page: category filter tabs
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("news-grid");
  if (!grid) return;

  const buttons = Array.from(document.querySelectorAll(".news-filter-btn"));
  const cards = Array.from(grid.querySelectorAll(".news-card"));
  const emptyMsg = document.getElementById("news-empty");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const category = btn.dataset.category;
      let visibleCount = 0;
      cards.forEach((card) => {
        const show = category === "all" || card.dataset.category === category;
        card.style.display = show ? "" : "none";
        if (show) visibleCount++;
      });
      if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? "block" : "none";
    });
  });
});
