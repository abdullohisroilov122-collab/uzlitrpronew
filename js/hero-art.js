// ==========================================================================
// UzLitrPro — Hero art variant. Preview others with ?hero=sphere / ?hero=holo
// ==========================================================================

(function () {
  const hero = document.querySelector(".hero[data-hero]");
  if (!hero) return;
  const VARIANTS = ["drop", "sphere", "holo"];
  const asked = new URLSearchParams(location.search).get("hero");
  if (VARIANTS.includes(asked)) hero.dataset.hero = asked;
})();
