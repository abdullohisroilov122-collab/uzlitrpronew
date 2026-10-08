document.addEventListener("DOMContentLoaded", async () => {
  const mapContainer = document.getElementById("branches-map");
  const infoBox = document.getElementById("branches-map-info");

  if (!mapContainer) return;

  const REGION_NAMES = {
    UZ: {
      UZAN: "Andijon",
      UZBU: "Buxoro",
      UZFA: "Farg‘ona",
      UZJI: "Jizzax",
      UZNG: "Namangan",
      UZNW: "Navoiy",
      UZQA: "Qashqadaryo",
      UZSA: "Samarqand",
      UZSI: "Sirdaryo",
      UZSU: "Surxondaryo",
      UZTK: "Toshkent",
      UZXO: "Xorazm"
    },

    RU: {
      UZAN: "Андижан",
      UZBU: "Бухара",
      UZFA: "Фергана",
      UZJI: "Джизак",
      UZNG: "Наманган",
      UZNW: "Навои",
      UZQA: "Кашкадарья",
      UZSA: "Самарканд",
      UZSI: "Сырдарья",
      UZSU: "Сурхандарья",
      UZTK: "Ташкент",
      UZXO: "Хорезм"
    },

    EN: {
      UZAN: "Andijan",
      UZBU: "Bukhara",
      UZFA: "Fergana",
      UZJI: "Jizzakh",
      UZNG: "Namangan",
      UZNW: "Navoi",
      UZQA: "Kashkadarya",
      UZSA: "Samarkand",
      UZSI: "Syrdarya",
      UZSU: "Surkhandarya",
      UZTK: "Tashkent",
      UZXO: "Khorezm"
    }
  };

  const MESSAGES = {
    UZ: "Xaritadan hududni tanlang.",
    RU: "Выберите регион на карте.",
    EN: "Select a region on the map."
  };

  function getLanguage() {
    const savedLanguage = localStorage.getItem("litrpro_lang");

    if (savedLanguage === "ru") return "RU";
    if (savedLanguage === "en") return "EN";

    return "UZ";
  }

  function updateInfo(regionId) {
    if (!infoBox) return;

    const lang = getLanguage();

    if (!regionId) {
      infoBox.textContent = MESSAGES[lang];
      return;
    }

    const regionName =
      REGION_NAMES[lang]?.[regionId] ||
      REGION_NAMES.UZ?.[regionId];

    if (regionName) {
      infoBox.textContent = regionName;
    }
  }

  function clearSelected() {
    const selected = mapContainer.querySelectorAll(".map-region.selected");

    selected.forEach((element) => {
      element.classList.remove("selected");
    });
  }

  function selectRegion(element) {
    if (!element) return;

    clearSelected();

    element.classList.add("selected");

    updateInfo(element.id);
  }

  try {
    const response = await fetch("assets/uzbekistan-map.svg");

    if (!response.ok) {
      throw new Error("Could not load Uzbekistan map.");
    }

    const svgText = await response.text();

    mapContainer.innerHTML = svgText;

    const svg = mapContainer.querySelector("svg");

    if (!svg) {
      throw new Error("SVG map was not found.");
    }

    svg.setAttribute("role", "img");
    svg.setAttribute(
      "aria-label",
      "Uzbekistan administrative regions map"
    );

    /*
     * Real geographic region paths
     */
    Object.keys(REGION_NAMES.UZ).forEach((regionId) => {
      const region = svg.querySelector(`#${regionId}`);

      if (!region) return;

      region.classList.add("map-region");

      const name =
        REGION_NAMES[getLanguage()]?.[regionId] ||
        REGION_NAMES.UZ[regionId];

      region.setAttribute("tabindex", "0");
      region.setAttribute("role", "button");
      region.setAttribute("aria-label", name);

      region.addEventListener("mouseenter", () => {
        updateInfo(regionId);
      });

      region.addEventListener("mouseleave", () => {
        const selected = svg.querySelector(".map-region.selected");

        if (selected) {
          updateInfo(selected.id);
        } else {
          updateInfo(null);
        }
      });

      region.addEventListener("click", () => {
        selectRegion(region);
      });

      region.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectRegion(region);
        }
      });
    });

    /*
     * Update labels when the site's language changes.
     */
    function refreshLanguage() {
      Object.keys(REGION_NAMES.UZ).forEach((regionId) => {
        const region = svg.querySelector(`#${regionId}`);

        if (!region) return;

        const name =
          REGION_NAMES[getLanguage()]?.[regionId] ||
          REGION_NAMES.UZ[regionId];

        region.setAttribute("aria-label", name);
      });

      const selected = svg.querySelector(".map-region.selected");

      if (selected) {
        updateInfo(selected.id);
      } else {
        updateInfo(null);
      }
    }

    /*
     * Existing UZLITPRO language dropdown
     */
    const languageDropdown = document.getElementById("lang-dropdown");

    if (languageDropdown) {
      languageDropdown.addEventListener("click", () => {
        setTimeout(refreshLanguage, 100);
      });
    }

    updateInfo(null);

  } catch (error) {
    console.error("Uzbekistan map error:", error);

    mapContainer.innerHTML = `
      <p style="text-align:center;">
        Map could not be loaded.
      </p>
    `;
  }
});

// mavjud branches-map.js kodingiz
...
...
...
});   // ← mavjud kodning oxiri


// =================================
// NEIGHBORING COUNTRIES
// =================================

const NEIGHBORS = {
  kazakhstan: {
    uz: "Qozog‘iston",
    ru: "Казахстан",
    en: "Kazakhstan"
  },
  kyrgyzstan: {
    uz: "Qirg‘iziston",
    ru: "Кыргызстан",
    en: "Kyrgyzstan"
  },
  tajikistan: {
    uz: "Tojikiston",
    ru: "Таджикистан",
    en: "Tajikistan"
  },
  afghanistan: {
    uz: "Afg‘oniston",
    ru: "Афганистан",
    en: "Afghanistan"
  },
  turkmenistan: {
    uz: "Turkmaniston",
    ru: "Туркменистан",
    en: "Туркменистан"
  }
};

function getCurrentMapLanguage() {
  const savedLang = localStorage.getItem("litrpro_lang");

  if (savedLang === "ru" || savedLang === "en") {
    return savedLang;
  }

  return "uz";
}

function initNeighborButtons() {
  const buttons = document.querySelectorAll(".map-neighbor");

  if (!buttons.length) return;

  const updateNeighborLabels = () => {
    const lang = getCurrentMapLanguage();

    buttons.forEach((button) => {
      const country = button.dataset.neighbor;

      if (NEIGHBORS[country]) {
        button.textContent = NEIGHBORS[country][lang];
      }
    });
  };

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("selected");
      });

      button.classList.add("selected");
    });
  });

  updateNeighborLabels();

  const languageDropdown = document.querySelector("#lang-dropdown");

  if (languageDropdown) {
    languageDropdown.addEventListener("change", updateNeighborLabels);
  }

  window.addEventListener("storage", updateNeighborLabels);
}

document.addEventListener("DOMContentLoaded", initNeighborButtons);







