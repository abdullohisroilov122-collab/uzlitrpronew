// ==========================================================================
// UzLitrPro — Hero art variant and colour theme.
// Preview with ?hero=drop|sphere|holo|dropholo and ?bg=indigo|royal|violet|ocean
// ==========================================================================

(function () {
  const hero = document.querySelector(".hero[data-hero]");
  if (!hero) return;
  const params = new URLSearchParams(location.search);
  const VARIANTS = ["drop", "sphere", "holo", "dropholo"];
  const THEMES = ["indigo", "royal", "violet", "ocean"];
  const asked = params.get("hero");
  if (VARIANTS.includes(asked)) hero.dataset.hero = asked;
  const bg = params.get("bg");
  if (THEMES.includes(bg)) {
    if (bg === "ocean") delete hero.dataset.bg;
    else hero.dataset.bg = bg;
    // let the wave pick up the new colours
    window.dispatchEvent(new Event("resize"));
  }
})();
