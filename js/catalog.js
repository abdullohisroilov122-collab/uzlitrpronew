// ==========================================================================
// UzLitrPro — Products catalog: card -> detail linking
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  // Clicking a meter card selects that size in the detail section below
  grid.querySelectorAll(".catalog-card-item[data-size]").forEach((card) => {
    card.addEventListener("click", () => {
      const size = card.dataset.size;
      const chip = document.querySelector(`.size-chip[data-size="${size}"]`);
      if (chip) {
        document.querySelectorAll(".size-chip").forEach((c) => c.classList.remove("active"));
        chip.classList.add("active");
        if (typeof renderSpecTable === "function") renderSpecTable(size);
      }
    });
  });
});
