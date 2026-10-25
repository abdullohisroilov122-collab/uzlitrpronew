// =================================
// OPERATOR WIDGET + SOCIAL LINKS
// Replaces the floating call button with a menu: call, Telegram,
// or request a callback. Also fills the "Follow us" block on the
// contact page.
// =================================

// Fill in real links here. Empty ones are hidden automatically.
const UZLITRPRO_CONTACT = {
  phone: "+998770900550",
  phoneLabel: "+998 77 090 05 50",
  telegram: "https://t.me/curinaut",
  social: {
    telegram: "",  // e.g. "https://t.me/your_channel"
    instagram: "https://www.instagram.com/uzlitrpro",
    facebook: "",
    youtube: "",
    linkedin: ""
  }
};

(function () {
  const C = UZLITRPRO_CONTACT;

  const TEXT = {
    uz: {
      open: "Operator bilan bog'lanish",
      close: "Yopish",
      title: "UzLitrPro operatori",
      online: "Onlayn · 24/7",
      phoneHours: "Du–Sha 9:00–18:00",
      telegramHours: "24/7 yordam",
      call: "Hozir qo'ng'iroq qilish",
      telegram: "Telegram orqali yozish",
      callback: "Qayta qo'ng'iroq so'rash",
      back: "Orqaga",
      formTitle: "Sizga qo'ng'iroq qilamiz",
      formNote: "Raqamingizni qoldiring — operator ish vaqtida bog'lanadi.",
      name: "Ismingiz",
      phone: "Telefon raqamingiz",
      topic: "Mavzu",
      topics: ["Hisoblagich sotib olish", "O'rnatish xizmati", "Qiyoslash / sertifikat", "Boshqa savol"],
      send: "So'rov yuborish",
      sending: "Yuborilmoqda...",
      done: "Rahmat! So'rovingiz qabul qilindi. Tez orada qo'ng'iroq qilamiz.",
      fail: "Yuborib bo'lmadi. Iltimos, bizga to'g'ridan-to'g'ri qo'ng'iroq qiling:",
      follow: "Bizni kuzating"
    },
    ru: {
      open: "Связаться с оператором",
      close: "Закрыть",
      title: "Оператор UzLitrPro",
      online: "Онлайн · 24/7",
      phoneHours: "Пн–Сб 9:00–18:00",
      telegramHours: "Поддержка 24/7",
      call: "Позвонить сейчас",
      telegram: "Написать в Telegram",
      callback: "Заказать обратный звонок",
      back: "Назад",
      formTitle: "Мы вам перезвоним",
      formNote: "Оставьте номер — оператор свяжется в рабочее время.",
      name: "Ваше имя",
      phone: "Номер телефона",
      topic: "Тема",
      topics: ["Покупка счётчика", "Установка", "Поверка / сертификат", "Другой вопрос"],
      send: "Отправить заявку",
      sending: "Отправка...",
      done: "Спасибо! Заявка принята. Мы скоро перезвоним.",
      fail: "Не удалось отправить. Пожалуйста, позвоните нам напрямую:",
      follow: "Мы в соцсетях"
    },
    en: {
      open: "Contact an operator",
      close: "Close",
      title: "UzLitrPro operator",
      online: "Online · 24/7",
      phoneHours: "Mon–Sat 9:00–18:00",
      telegramHours: "24/7 support",
      call: "Call now",
      telegram: "Message us on Telegram",
      callback: "Request a callback",
      back: "Back",
      formTitle: "We'll call you back",
      formNote: "Leave your number — an operator will call during working hours.",
      name: "Your name",
      phone: "Phone number",
      topic: "Topic",
      topics: ["Buying a meter", "Installation", "Verification / certificate", "Other question"],
      send: "Send request",
      sending: "Sending...",
      done: "Thank you! Your request was received. We'll call you soon.",
      fail: "Couldn't send. Please call us directly:",
      follow: "Follow us"
    }
  };

  const SOCIAL_TEXT = {
    uz: {
      h: "Biz ijtimoiy tarmoqlardamiz!",
      p1: "Kompaniya yangiliklari, yangi mahsulotlar va suv hisoblagichlari bo'yicha foydali maslahatlardan birinchi bo'lib xabardor bo'lish uchun bizni kuzatib boring.",
      p2: "Siz uchun qulay bo'lgan har qanday usulda biz bilan bog'laning. Mijozlar va hamkorlarimizga yordam berishga doimo tayyormiz!"
    },
    ru: {
      h: "Мы в социальных сетях!",
      p1: "Подписывайтесь, чтобы первыми узнавать новости компании, о новых продуктах и получать полезные советы по счётчикам воды.",
      p2: "Свяжитесь с нами любым удобным способом. Мы всегда готовы помочь нашим клиентам и партнёрам!"
    },
    en: {
      h: "Find us on social media!",
      p1: "Follow us to be the first to hear company news, see new products and get useful tips about water meters.",
      p2: "Contact us in whatever way suits you. We're always ready to help our customers and partners!"
    }
  };

  const ICONS = {
    headset: '<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2z"/><path d="M3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2z"/><path d="M18 17v1a3 3 0 0 1-3 3h-3"/>',
    close: '<path d="M18 6 6 18M6 6l12 12"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    callback: '<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    // Brand marks are filled shapes
    telegram: '<path fill="currentColor" stroke="none" d="M21.9 4.3 18.8 19c-.2 1-.8 1.3-1.7.8l-4.6-3.4-2.2 2.1c-.3.3-.5.5-1 .5l.3-4.7 8.6-7.8c.4-.3-.1-.5-.6-.2L6.9 13 2.3 11.6c-1-.3-1-1 .2-1.5L20.5 3.2c.8-.3 1.6.2 1.4 1.1z"/>',
    instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>',
    facebook: '<path fill="currentColor" stroke="none" d="M14 8h3V4h-3a4 4 0 0 0-4 4v2H8v4h2v8h4v-8h3l1-4h-4V8.5c0-.3.2-.5.5-.5z"/>',
    youtube: '<path fill="currentColor" stroke="none" d="M22 8.2a3 3 0 0 0-2.1-2.1C18 5.6 12 5.6 12 5.6s-6 0-7.9.5A3 3 0 0 0 2 8.2 31 31 0 0 0 1.6 12c0 1.3.1 2.5.4 3.8a3 3 0 0 0 2.1 2.1c1.9.5 7.9.5 7.9.5s6 0 7.9-.5a3 3 0 0 0 2.1-2.1c.3-1.3.4-2.5.4-3.8s-.1-2.5-.4-3.8zM10 15.1V8.9l5.2 3.1z"/>',
    linkedin: '<path fill="currentColor" stroke="none" d="M6.5 8.5h-3V20h3zM5 3.5a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6zM20.5 13.4c0-3-1.6-5.1-4.4-5.1-1.5 0-2.5.8-3 1.6V8.5h-3V20h3v-6c0-1.6.6-2.8 2.1-2.8s2.2 1.2 2.2 2.8v6h3.1z"/>'
  };

  const SOCIAL_NAMES = {
    telegram: "Telegram", instagram: "Instagram", facebook: "Facebook",
    youtube: "YouTube", linkedin: "LinkedIn"
  };

  function icon(name) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
  }

  function getLanguage() {
    let saved = null;
    try { saved = localStorage.getItem("litrpro_lang"); } catch (e) { /* storage unavailable */ }
    return saved === "ru" || saved === "en" ? saved : "uz";
  }

  function socialLinks(className) {
    return Object.entries(C.social)
      .filter(([, url]) => url)
      .map(([name, url]) =>
        `<a class="${className} ${className}-${name}" href="${url}" target="_blank" rel="noopener" aria-label="${SOCIAL_NAMES[name]}">${icon(name)}</a>`
      )
      .join("");
  }

  function buildWidget() {
    const root = document.createElement("div");
    root.className = "op-widget";
    root.innerHTML = `
      <div class="op-panel" id="op-panel" role="dialog" aria-modal="false" aria-labelledby="op-title" hidden>
        <div class="op-view op-view-menu">
          <div class="op-head">
            <span class="op-avatar">${icon("headset")}</span>
            <div>
              <strong id="op-title" data-op="title"></strong>
              <span class="op-status" data-op="online"></span>
            </div>
          </div>
          <a class="op-channel" href="tel:${C.phone}">
            <span class="op-channel-icon op-ic-call">${icon("phone")}</span>
            <span><b data-op="call"></b><small>${C.phoneLabel}</small><small data-op="phoneHours"></small></span>
          </a>
          ${C.telegram ? `
          <a class="op-channel" href="${C.telegram}" target="_blank" rel="noopener">
            <span class="op-channel-icon op-ic-tg">${icon("telegram")}</span>
            <span><b data-op="telegram"></b><small data-op="telegramHours"></small></span>
          </a>` : ""}
          <button type="button" class="op-channel" data-op-goto="form">
            <span class="op-channel-icon op-ic-cb">${icon("callback")}</span>
            <span><b data-op="callback"></b></span>
          </button>
          ${socialLinks("op-social") ? `
          <div class="op-foot">
            <span data-op="follow"></span>
            <div class="op-socials">${socialLinks("op-social")}</div>
          </div>` : ""}
        </div>

        <div class="op-view op-view-form" hidden>
          <button type="button" class="op-back" data-op-goto="menu">${icon("back")}<span data-op="back"></span></button>
          <strong class="op-form-title" data-op="formTitle"></strong>
          <p class="op-form-note" data-op="formNote"></p>
          <form class="op-form">
            <p class="op-hp" aria-hidden="true"><label>Leave empty <input name="website" tabindex="-1" autocomplete="off"></label></p>
            <label><span data-op="name"></span>
              <input type="text" name="name" required autocomplete="name">
            </label>
            <label><span data-op="phone"></span>
              <input type="tel" name="phone" required autocomplete="tel" inputmode="tel" placeholder="+998 __ ___ __ __" pattern="[+0-9 ()-]{9,}">
            </label>
            <label><span data-op="topic"></span>
              <select name="topic"></select>
            </label>
            <input type="hidden" name="page">
            <button type="submit" class="btn btn-primary op-submit" data-op="send"></button>
            <p class="op-result" role="status"></p>
          </form>
        </div>
      </div>

      <button type="button" class="op-fab" aria-expanded="false" aria-controls="op-panel">
        <span class="op-fab-open">${icon("headset")}</span>
        <span class="op-fab-close">${icon("close")}</span>
      </button>
    `;
    return root;
  }

  function init() {
    const widget = buildWidget();
    document.body.appendChild(widget);

    // The old call button stays in the HTML as a no-JavaScript fallback.
    document.querySelectorAll(".floating-call").forEach((el) => el.remove());

    const fab = widget.querySelector(".op-fab");
    const panel = widget.querySelector(".op-panel");
    const menuView = widget.querySelector(".op-view-menu");
    const formView = widget.querySelector(".op-view-form");
    const form = widget.querySelector(".op-form");
    const result = widget.querySelector(".op-result");
    const submit = widget.querySelector(".op-submit");

    function setOpen(open) {
      panel.hidden = !open;
      widget.classList.toggle("is-open", open);
      fab.setAttribute("aria-expanded", String(open));
      fab.setAttribute("aria-label", TEXT[getLanguage()][open ? "close" : "open"]);
      if (open) showView("menu");
    }

    function showView(name) {
      menuView.hidden = name !== "menu";
      formView.hidden = name !== "form";
      const first = (name === "form" ? formView.querySelector("input[name=name]") : menuView.querySelector(".op-channel"));
      if (first && !panel.hidden) first.focus({ preventScroll: true });
    }

    function applyLanguage() {
      const lang = getLanguage();
      const t = TEXT[lang];
      widget.querySelectorAll("[data-op]").forEach((el) => {
        const value = t[el.getAttribute("data-op")];
        if (typeof value === "string") el.textContent = value;
      });
      const select = form.querySelector("select[name=topic]");
      const current = select.selectedIndex;
      select.innerHTML = t.topics.map((topic) => `<option>${topic}</option>`).join("");
      select.selectedIndex = Math.max(0, current);
      fab.setAttribute("aria-label", t[panel.hidden ? "open" : "close"]);
      renderSocialBlock(lang);
    }

    fab.addEventListener("click", (event) => {
      event.stopPropagation();
      setOpen(panel.hidden);
    });

    widget.addEventListener("click", (event) => {
      const goto = event.target.closest("[data-op-goto]");
      if (goto) showView(goto.getAttribute("data-op-goto"));
    });

    document.addEventListener("click", (event) => {
      if (!panel.hidden && !widget.contains(event.target)) setOpen(false);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && !panel.hidden) {
        setOpen(false);
        fab.focus();
      }
    });

    // Callback requests go to /api/callback (api/callback.js), which forwards them to Telegram.
    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      const t = TEXT[getLanguage()];
      form.querySelector("input[name=page]").value = document.title;
      submit.disabled = true;
      submit.textContent = t.sending;
      result.className = "op-result";
      result.textContent = "";

      try {
        const response = await fetch("/api/callback", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(Object.fromEntries(new FormData(form)))
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        form.reset();
        result.classList.add("is-done");
        result.textContent = t.done;
      } catch (error) {
        console.error("Callback request failed:", error);
        result.classList.add("is-fail");
        result.innerHTML = `${t.fail} <a href="tel:${C.phone}">${C.phoneLabel}</a>`;
      } finally {
        submit.disabled = false;
        submit.textContent = t.send;
      }
    });

    applyLanguage();

    // Footer social icons are always shown; they become links once a URL is set above.
    document.querySelectorAll(".footer-social [data-social]").forEach((icon) => {
      const url = C.social[icon.dataset.social];
      if (url) {
        icon.href = url;
        icon.target = "_blank";
        icon.rel = "noopener";
      }
    });
    document.addEventListener("litrpro:langchange", applyLanguage);
  }

  // "Follow us" block on the contact page
  function renderSocialBlock(lang) {
    const block = document.getElementById("social-block");
    if (!block) return;
    const links = socialLinks("social-link");
    block.hidden = !links;
    if (!links) return;
    const t = SOCIAL_TEXT[lang];
    block.innerHTML = `
      <h3>${t.h}</h3>
      <p>${t.p1}</p>
      <div class="social-links">${links}</div>
      <p>${t.p2}</p>
    `;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
