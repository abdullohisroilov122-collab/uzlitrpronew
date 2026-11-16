// Vercel serverless function: POST /api/callback
// Forwards callback requests (operator widget), contact form messages and newsletter signups to Telegram.
//
// Needs two environment variables in Vercel (Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — token from @BotFather
//   TELEGRAM_CHAT_ID    — the chat that should receive requests

const MAX_LENGTH = 200;

// Only our own pages may send requests here.
const ALLOWED_ORIGINS = [
  "https://uzlitrpro.uz",
  "https://www.uzlitrpro.uz",
  "https://uzlitrpronew.vercel.app"
];

// Best-effort flood protection: at most RATE_LIMIT requests per IP in RATE_WINDOW_MS.
// The counter lives in this function instance's memory, so it resets on cold starts.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const recent = new Map();

function tooManyRequests(ip) {
  const now = Date.now();
  const hits = (recent.get(ip) || []).filter((t) => now - t < RATE_WINDOW_MS);
  hits.push(now);
  recent.set(ip, hits);
  if (recent.size > 5000) recent.clear();
  return hits.length > RATE_LIMIT;
}

function parseBody(req) {
  if (req.body && typeof req.body === "object") return req.body;
  try {
    return JSON.parse(req.body || "{}");
  } catch (error) {
    return null;
  }
}

function clean(value) {
  return String(value || "").replace(/\s+/g, " ").trim().slice(0, MAX_LENGTH);
}

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chatId) {
    console.error("TELEGRAM_BOT_TOKEN or TELEGRAM_CHAT_ID is not set");
    return res.status(500).json({ ok: false, error: "Not configured" });
  }

  const origin = req.headers.origin;
  if (origin && !ALLOWED_ORIGINS.includes(origin)) {
    return res.status(403).json({ ok: false, error: "Forbidden" });
  }

  const ip = String(req.headers["x-forwarded-for"] || "").split(",")[0].trim() || "unknown";
  if (tooManyRequests(ip)) {
    return res.status(429).json({ ok: false, error: "Too many requests" });
  }

  const body = parseBody(req);
  if (!body) return res.status(400).json({ ok: false, error: "Invalid request" });

  // Bots fill in the hidden field; people don't see it. Pretend it worked.
  if (body.website) return res.status(200).json({ ok: true });

  if (body.type === "newsletter") {
    const email = clean(body.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return res.status(400).json({ ok: false, error: "A valid email is required" });
    }
    return sendToTelegram(res, token, chatId, [
      "📧 Yangiliklarga yangi obuna",
      "",
      `✉️ Email: ${email}`,
      `🌐 Sahifa: ${clean(body.page) || "—"}`,
      `🕒 Vaqt: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`
    ].join("\n"));
  }

  if (body.type === "contact") {
    const name = clean(body.name);
    const email = clean(body.email);
    const message = String(body.message || "").trim().slice(0, 1500);
    if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || !message) {
      return res.status(400).json({ ok: false, error: "Name, a valid email and a message are required" });
    }
    return sendToTelegram(res, token, chatId, [
      "✉️ Aloqa sahifasidan yangi xabar",
      "",
      `👤 Ism: ${name}`,
      `📧 Email: ${email}`,
      `📱 Telefon: ${clean(body.phone) || "—"}`,
      `📏 O'lcham: ${clean(body.size) || "—"}`,
      `💬 Xabar: ${message}`,
      `🕒 Vaqt: ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" })}`
    ].join("\n"));
  }

  const name = clean(body.name);
  const phone = clean(body.phone);
  const topic = clean(body.topic);
  const page = clean(body.page);

  if (!name || !/^[+0-9 ()-]{9,20}$/.test(phone)) {
    return res.status(400).json({ ok: false, error: "Name and a valid phone are required" });
  }

  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" });
  return sendToTelegram(res, token, chatId, [
    "📞 Yangi qayta qo'ng'iroq so'rovi",
    "",
    `👤 Ism: ${name}`,
    `📱 Telefon: ${phone}`,
    `📋 Mavzu: ${topic || "—"}`,
    `🌐 Sahifa: ${page || "—"}`,
    `🕒 Vaqt: ${time}`
  ].join("\n"));
};

async function sendToTelegram(res, token, chatId, text) {
  try {
    const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ chat_id: chatId, text })
    });
    if (!response.ok) {
      console.error("Telegram error:", response.status, await response.text());
      return res.status(502).json({ ok: false, error: "Telegram request failed" });
    }
    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Telegram request failed:", error);
    return res.status(502).json({ ok: false, error: "Telegram request failed" });
  }
}
