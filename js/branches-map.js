// =================================
// UZBEKISTAN REGIONS MAP
// Labels sit on the map itself, inside each region.
// =================================

document.addEventListener("DOMContentLoaded", async () => {
  const mapContainer = document.getElementById("branches-map");
  const infoBox = document.getElementById("branches-map-info");
  const infoLabel = document.getElementById("region-selection-label");

  if (!mapContainer) return;

  const SVG_NS = "http://www.w3.org/2000/svg";

  const REGION_NAMES = {
    uz: {
      UZQR: "Qoraqalpog‘iston",
      UZXO: "Xorazm",
      UZBU: "Buxoro",
      UZNW: "Navoiy",
      UZSA: "Samarqand",
      UZJI: "Jizzax",
      UZSI: "Sirdaryo",
      UZTO: "Toshkent viloyati",
      UZTK: "Toshkent shahri",
      UZNG: "Namangan",
      UZAN: "Andijon",
      UZFA: "Farg‘ona",
      UZQA: "Qashqadaryo",
      UZSU: "Surxondaryo"
    },
    ru: {
      UZQR: "Каракалпакстан",
      UZXO: "Хорезм",
      UZBU: "Бухара",
      UZNW: "Навои",
      UZSA: "Самарканд",
      UZJI: "Джизак",
      UZSI: "Сырдарья",
      UZTO: "Ташкентская обл.",
      UZTK: "г. Ташкент",
      UZNG: "Наманган",
      UZAN: "Андижан",
      UZFA: "Фергана",
      UZQA: "Кашкадарья",
      UZSU: "Сурхандарья"
    },
    en: {
      UZQR: "Karakalpakstan",
      UZXO: "Khorezm",
      UZBU: "Bukhara",
      UZNW: "Navoi",
      UZSA: "Samarkand",
      UZJI: "Jizzakh",
      UZSI: "Syrdarya",
      UZTO: "Tashkent region",
      UZTK: "Tashkent city",
      UZNG: "Namangan",
      UZAN: "Andijan",
      UZFA: "Fergana",
      UZQA: "Kashkadarya",
      UZSU: "Surkhandarya"
    }
  };

  // Short names shown on the map; the full name appears in the info card.
  const SHORT_NAMES = {
    uz: { UZTO: "Toshkent vil.", UZTK: "Toshkent sh." },
    ru: { UZTO: "Ташкент. обл.", UZTK: "г. Ташкент" },
    en: { UZTO: "Tashkent reg.", UZTK: "Tashkent city" }
  };

  // Label anchor in SVG coordinates (viewBox 0 0 1000 652), placed at the
  // widest interior point of each region. "small" is for narrow regions.
  const LABELS = {
    UZQR: { x: 217, y: 201 },
    UZXO: { x: 294, y: 336, small: true },
    UZNW: { x: 476, y: 302 },
    UZBU: { x: 451, y: 399 },
    UZSA: { x: 592, y: 442 },
    UZJI: { x: 671, y: 423 },
    UZSI: { x: 714, y: 405, small: true },
    UZTO: { x: 772, y: 360, small: true },
    UZQA: { x: 574, y: 501 },
    UZSU: { x: 654, y: 566, small: true },
    UZNG: { x: 860, y: 367, small: true },
    UZAN: { x: 914, y: 376, small: true },
    UZFA: { x: 863, y: 396, small: true }
  };

  // Tashkent city is too small for text, so it gets a pin with a callout
  // leading out of the map.
  const CITY_PIN = { id: "UZTK", x: 748, y: 340, labelX: 700, labelY: 312 };

  const NEIGHBORS = [
    { x: 660, y: 120, uz: "QOZOG‘ISTON", ru: "КАЗАХСТАН", en: "KAZAKHSTAN" },
    { x: 940, y: 300, uz: "QIRG‘IZISTON", ru: "КЫРГЫЗСТАН", en: "KYRGYZSTAN" },
    { x: 840, y: 520, uz: "TOJIKISTON", ru: "ТАДЖИКИСТАН", en: "TAJIKISTAN" },
    { x: 500, y: 612, uz: "AFG‘ONISTON", ru: "АФГАНИСТАН", en: "AFGHANISTAN" },
    { x: 330, y: 520, uz: "TURKMANISTON", ru: "ТУРКМЕНИСТАН", en: "TURKMENISTAN" }
  ];

  const TEXT = {
    uz: {
      hint: "Xaritadan hududni tanlang.",
      selected: "Tanlangan hudud",
      eyebrow: "HUDUDIY QAMROV",
      h: "O‘zbekiston bo‘ylab UzLitrPro",
      p: "Hududni tanlang — xaritada viloyatni ustiga olib boring yoki bosing.",
      aria: "O‘zbekiston hududlari xaritasi"
    },
    ru: {
      hint: "Выберите регион на карте.",
      selected: "Выбранный регион",
      eyebrow: "РЕГИОНАЛЬНЫЙ ОХВАТ",
      h: "UzLitrPro по всему Узбекистану",
      p: "Выберите регион — наведите курсор на область на карте или нажмите на неё.",
      aria: "Карта регионов Узбекистана"
    },
    en: {
      hint: "Select a region on the map.",
      selected: "Selected region",
      eyebrow: "REGIONAL COVERAGE",
      h: "UzLitrPro across Uzbekistan",
      p: "Choose a region — hover over it on the map or click to select.",
      aria: "Map of Uzbekistan's regions"
    }
  };

  function getLanguage() {
    let saved = null;
    try { saved = localStorage.getItem("litrpro_lang"); } catch (e) { /* storage unavailable */ }
    return saved === "ru" || saved === "en" ? saved : "uz";
  }

  function regionName(id, lang) {
    return REGION_NAMES[lang][id] || REGION_NAMES.uz[id];
  }

  function shortName(id, lang) {
    return (SHORT_NAMES[lang] && SHORT_NAMES[lang][id]) || regionName(id, lang);
  }

  function createSvg(tag, attrs) {
    const el = document.createElementNS(SVG_NS, tag);
    Object.entries(attrs).forEach(([key, value]) => el.setAttribute(key, value));
    return el;
  }

  let svg;
  let hoveredId = null;
  let selectedId = null;

  function updateInfo() {
    if (!infoBox) return;
    const lang = getLanguage();
    const id = hoveredId || selectedId;
    infoBox.textContent = id ? regionName(id, lang) : TEXT[lang].hint;
  }

  function setActive(id, className, on) {
    svg.querySelectorAll(`[data-region="${id}"]`).forEach((el) => {
      el.classList.toggle(className, on);
    });
  }

  // The raised look is drawn by a copy of the region in a separate layer
  // that ignores the mouse. The original stays put, so the hover area
  // doesn't move when the region lifts (no flicker at the edges).
  // SVG has no z-index, so the last-drawn copy is on top.
  function bringToFront(id) {
    const lift = svg.querySelector(`.map-region-lift[data-region="${id}"]`);
    if (lift) lift.parentNode.appendChild(lift);
  }

  function hoverRegion(id) {
    if (hoveredId) setActive(hoveredId, "hovered", false);
    hoveredId = id;
    if (id) {
      setActive(id, "hovered", true);
      bringToFront(id);
    }
    // The selected region always stays on top.
    if (selectedId) bringToFront(selectedId);
    updateInfo();
  }

  // Clicking the selected region again deselects it.
  function selectRegion(id) {
    if (selectedId) setActive(selectedId, "selected", false);
    selectedId = selectedId === id ? null : id;
    if (selectedId) {
      setActive(selectedId, "selected", true);
      bringToFront(selectedId);
    }
    updateInfo();
  }

  function applyLanguage() {
    const lang = getLanguage();

    document.querySelectorAll("[data-map-i18n]").forEach((el) => {
      const key = el.getAttribute("data-map-i18n");
      if (TEXT[lang][key]) el.textContent = TEXT[lang][key];
    });

    if (infoLabel) infoLabel.textContent = TEXT[lang].selected;
    mapContainer.setAttribute("aria-label", TEXT[lang].aria);

    if (svg) {
      svg.setAttribute("aria-label", TEXT[lang].aria);

      svg.querySelectorAll(".map-region").forEach((region) => {
        region.setAttribute("aria-label", regionName(region.id, lang));
      });

      svg.querySelectorAll(".map-label").forEach((label) => {
        label.textContent = shortName(label.dataset.region, lang);
      });

      svg.querySelectorAll(".map-neighbor-label").forEach((label, i) => {
        label.textContent = NEIGHBORS[i][lang];
      });
    }

    updateInfo();
  }

  try {
    const response = await fetch("assets/uzbekistan-map.svg");

    if (!response.ok) {
      throw new Error("Could not load Uzbekistan map.");
    }

    mapContainer.innerHTML = await response.text();
    svg = mapContainer.querySelector("svg");

    if (!svg) {
      throw new Error("SVG map was not found.");
    }

    // Let the SVG scale with its container.
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.setAttribute("viewBox", "0 0 1000 652");
    svg.setAttribute("preserveAspectRatio", "xMidYMid meet");
    svg.setAttribute("role", "group");

    // The source file ships helper dots we don't want to show.
    svg.querySelectorAll("#points, #label_points").forEach((el) => el.remove());

    const neighborLayer = createSvg("g", { class: "map-neighbors", "aria-hidden": "true" });
    NEIGHBORS.forEach((n) => {
      neighborLayer.appendChild(
        createSvg("text", { class: "map-neighbor-label", x: n.x, y: n.y })
      );
    });
    svg.insertBefore(neighborLayer, svg.firstChild);

    Object.keys(REGION_NAMES.uz).forEach((id) => {
      const region = svg.querySelector(`#${id}`);
      if (!region) return;

      region.classList.add("map-region");
      region.dataset.region = id;
      region.setAttribute("tabindex", "0");
      region.setAttribute("role", "button");

      // Hover only for a real mouse; on touch screens a tap selects.
      region.addEventListener("pointerenter", (event) => {
        if (event.pointerType === "mouse") hoverRegion(id);
      });

      region.addEventListener("pointerleave", (event) => {
        if (event.pointerType === "mouse" && hoveredId === id) hoverRegion(null);
      });


      region.addEventListener("click", () => selectRegion(id));

      region.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectRegion(id);
        }
      });
    });

    // Tashkent city sits inside Tashkent region, so draw it last.
    const city = svg.querySelector(`#${CITY_PIN.id}`);
    if (city) city.parentNode.appendChild(city);

    const liftLayer = createSvg("g", { class: "map-lifts", "aria-hidden": "true" });
    svg.querySelectorAll(".map-region").forEach((region) => {
      const lift = region.cloneNode(false);
      ["id", "tabindex", "role", "aria-label", "name"].forEach((attr) => lift.removeAttribute(attr));
      lift.setAttribute("class", "map-region-lift");
      liftLayer.appendChild(lift);
    });
    svg.appendChild(liftLayer);

    const labelLayer = createSvg("g", { class: "map-labels", "aria-hidden": "true" });

    Object.entries(LABELS).forEach(([id, pos]) => {
      const label = createSvg("text", {
        class: pos.small ? "map-label map-label-small" : "map-label",
        x: pos.x,
        y: pos.y
      });
      label.dataset.region = id;
      labelLayer.appendChild(label);
    });

    const pin = createSvg("g", { class: "map-city-pin" });
    pin.dataset.region = CITY_PIN.id;
    pin.appendChild(createSvg("line", {
      x1: CITY_PIN.x, y1: CITY_PIN.y, x2: CITY_PIN.labelX + 4, y2: CITY_PIN.labelY + 4
    }));
    pin.appendChild(createSvg("circle", { cx: CITY_PIN.x, cy: CITY_PIN.y, r: 5 }));
    const cityLabel = createSvg("text", {
      class: "map-label map-label-city",
      x: CITY_PIN.labelX,
      y: CITY_PIN.labelY
    });
    cityLabel.dataset.region = CITY_PIN.id;
    pin.appendChild(cityLabel);
    labelLayer.appendChild(pin);

    svg.appendChild(labelLayer);

    // Click anywhere outside a region, or press Escape, to deselect.
    document.addEventListener("click", (event) => {
      if (selectedId && !event.target.closest(".map-region")) selectRegion(selectedId);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && selectedId) selectRegion(selectedId);
    });

    applyLanguage();
    document.addEventListener("litrpro:langchange", applyLanguage);
  } catch (error) {
    console.error("Uzbekistan map error:", error);
    mapContainer.innerHTML = `<p class="map-error">Map could not be loaded.</p>`;
  }
});
