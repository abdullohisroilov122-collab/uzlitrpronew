// ==========================================================================
// UzLitrPro — Cart system
// A "Request Quote" cart: holds selected size + quantity, persists for the
// browsing session (sessionStorage), and feeds into the Contact form as a
// pre-filled inquiry. No real payment/checkout — this is by design, since
// there's no backend. Keep this file isolated so it's easy to extend later
// (e.g. swap sessionStorage for a real backend cart).
// ==========================================================================

const CART_KEY = "uzlitrpro_cart";

// Product reference data — size label + price flag (no real prices yet)
const CART_PRODUCT_LABELS = {
  15: "UzLitrPro hisoblagich — 15∅ (DN15)",
  20: "UzLitrPro hisoblagich — 20∅ (DN20)",
  25: "UzLitrPro hisoblagich — 25∅ (DN25)",
};

function getCart() {
  try {
    const raw = sessionStorage.getItem(CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function saveCart(cart) {
  try {
    sessionStorage.setItem(CART_KEY, JSON.stringify(cart));
  } catch (e) { /* storage unavailable */ }
  renderCartUI();
}

function addToCart(size, qty) {
  qty = Math.max(1, parseInt(qty, 10) || 1);
  const cart = getCart();
  const existing = cart.find((item) => item.size === size);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ size, qty });
  }
  saveCart(cart);
  openCartDrawer();
}

function removeFromCart(index) {
  const cart = getCart();
  cart.splice(index, 1);
  saveCart(cart);
}

function updateCartQty(index, delta) {
  const cart = getCart();
  if (!cart[index]) return;
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
}

function cartTotalCount() {
  return getCart().reduce((sum, item) => sum + item.qty, 0);
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.add("open");
    overlay.classList.add("open");
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-overlay");
  if (drawer && overlay) {
    drawer.classList.remove("open");
    overlay.classList.remove("open");
  }
}

function renderCartUI() {
  const cart = getCart();
  const badge = document.getElementById("cart-count-badge");
  const itemsWrap = document.getElementById("cart-items");
  const emptyMsg = document.getElementById("cart-empty");
  const footer = document.getElementById("cart-footer");

  const count = cartTotalCount();
  if (badge) {
    badge.textContent = count;
    badge.style.display = count > 0 ? "flex" : "none";
  }

  if (!itemsWrap) return;

  if (cart.length === 0) {
    itemsWrap.innerHTML = "";
    if (emptyMsg) emptyMsg.style.display = "block";
    if (footer) footer.style.display = "none";
    return;
  }

  if (emptyMsg) emptyMsg.style.display = "none";
  if (footer) footer.style.display = "block";

  const dict = (typeof i18n !== "undefined" && typeof currentLang !== "undefined") ? i18n[currentLang] : null;

  itemsWrap.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-info">
        <strong>${CART_PRODUCT_LABELS[item.size] || item.size}</strong>
      </div>
      <div class="cart-item-controls">
        <button class="cart-qty-btn" data-action="dec" data-index="${index}" aria-label="Kamaytirish">−</button>
        <span class="cart-qty-val">${item.qty}</span>
        <button class="cart-qty-btn" data-action="inc" data-index="${index}" aria-label="Ko'paytirish">+</button>
        <button class="cart-remove-btn" data-action="remove" data-index="${index}" aria-label="O'chirish">✕</button>
      </div>
    </div>
  `).join("");
}

function buildInquiryMessage() {
  const cart = getCart();
  if (cart.length === 0) return "";
  const lines = cart.map((item) => `- ${CART_PRODUCT_LABELS[item.size] || item.size} × ${item.qty}`);
  return `Buyurtma so'rovi:\n${lines.join("\n")}`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderCartUI();

  const cartToggle = document.getElementById("cart-toggle");
  const cartClose = document.getElementById("cart-close");
  const cartOverlay = document.getElementById("cart-overlay");
  if (cartToggle) cartToggle.addEventListener("click", openCartDrawer);
  if (cartClose) cartClose.addEventListener("click", closeCartDrawer);
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

  const itemsWrap = document.getElementById("cart-items");
  if (itemsWrap) {
    itemsWrap.addEventListener("click", (e) => {
      const btn = e.target.closest("button[data-action]");
      if (!btn) return;
      const index = parseInt(btn.dataset.index, 10);
      const action = btn.dataset.action;
      if (action === "inc") updateCartQty(index, 1);
      if (action === "dec") updateCartQty(index, -1);
      if (action === "remove") removeFromCart(index);
    });
  }

  const clearBtn = document.getElementById("cart-clear");
  if (clearBtn) clearBtn.addEventListener("click", clearCart);

  const sendBtn = document.getElementById("cart-send");
  if (sendBtn) {
    sendBtn.addEventListener("click", () => {
      const msg = buildInquiryMessage();
      try { sessionStorage.setItem("uzlitrpro_inquiry_prefill", msg); } catch (e) { /* noop */ }
      window.location.href = "contact.html#cart-inquiry";
    });
  }

  // On the Contact page: if a cart inquiry prefill exists, drop it into the message field
  const messageField = document.getElementById("message");
  if (messageField && window.location.hash === "#cart-inquiry") {
    let prefill = "";
    try { prefill = sessionStorage.getItem("uzlitrpro_inquiry_prefill") || ""; } catch (e) { /* noop */ }
    if (prefill) {
      messageField.value = prefill;
      messageField.focus();
    }
  }

  // Products page: Add to Cart button with quantity selector
  const addToCartBtn = document.getElementById("add-to-cart-btn");
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", () => {
      const activeChip = document.querySelector(".size-chip.active");
      const size = activeChip ? parseInt(activeChip.dataset.size, 10) : 15;
      const qtyInput = document.getElementById("qty-input");
      const qty = qtyInput ? parseInt(qtyInput.value, 10) || 1 : 1;
      addToCart(size, qty);
    });
  }

  const qtyMinus = document.getElementById("qty-minus");
  const qtyPlus = document.getElementById("qty-plus");
  const qtyInput = document.getElementById("qty-input");
  if (qtyMinus && qtyPlus && qtyInput) {
    qtyMinus.addEventListener("click", () => {
      qtyInput.value = Math.max(1, (parseInt(qtyInput.value, 10) || 1) - 1);
    });
    qtyPlus.addEventListener("click", () => {
      qtyInput.value = (parseInt(qtyInput.value, 10) || 1) + 1;
    });
  }
});