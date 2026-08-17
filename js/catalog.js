// ==========================================================================
// UzLitrPro — Products catalog: search, filter, sort, and card -> detail linking
// ==========================================================================

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("catalog-grid");
  if (!grid) return;

  const searchInput = document.getElementById("catalog-search");
  const sizeFilter = document.getElementById("catalog-size-filter");
  const sortSelect = document.getElementById("catalog-sort");
  const emptyMsg = document.getElementById("catalog-empty");
  const cards = Array.from(grid.querySelectorAll(".catalog-card-item"));
  const defaultOrder = cards.slice();

  function applyFilters() {
    const query = (searchInput.value || "").trim().toLowerCase();
    const size = sizeFilter.value;
    let visibleCount = 0;

    cards.forEach((card) => {
      const name = (card.dataset.name || "").toLowerCase();
      const matchesQuery = !query || name.includes(query);
      const matchesSize = size === "all" || card.dataset.size === size;
      const show = matchesQuery && matchesSize;
      card.style.display = show ? "" : "none";
      if (show) visibleCount++;
    });

    if (emptyMsg) emptyMsg.style.display = visibleCount === 0 ? "block" : "none";
  }

  function applySort() {
    const mode = sortSelect.value;
    let ordered;
    if (mode === "size-asc") {
      ordered = cards.slice().sort((a, b) => parseInt(a.dataset.size, 10) - parseInt(b.dataset.size, 10));
    } else if (mode === "size-desc") {
      ordered = cards.slice().sort((a, b) => parseInt(b.dataset.size, 10) - parseInt(a.dataset.size, 10));
    } else {
      ordered = defaultOrder;
    }
    ordered.forEach((card) => grid.appendChild(card));
  }

  searchInput.addEventListener("input", applyFilters);
  sizeFilter.addEventListener("change", applyFilters);
  sortSelect.addEventListener("change", applySort);

  // Clicking a catalog card selects that size in the detail section below
  cards.forEach((card) => {
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
