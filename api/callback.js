// Vercel serverless function: POST /api/callback
// Forwards a callback request from the operator widget to Telegram.
//
// Needs two environment variables in Vercel (Project → Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  — token from @BotFather
//   TELEGRAM_CHAT_ID    — the chat that should receive requests

const MAX_LENGTH = 200;

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

  const body = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};

  // Bots fill in the hidden field; people don't see it. Pretend it worked.
  if (body.website) return res.status(200).json({ ok: true });

  const name = clean(body.name);
  const phone = clean(body.phone);
  const topic = clean(body.topic);
  const page = clean(body.page);

  if (!name || !/^[+0-9 ()-]{9,20}$/.test(phone)) {
    return res.status(400).json({ ok: false, error: "Name and a valid phone are required" });
  }

  const time = new Date().toLocaleString("ru-RU", { timeZone: "Asia/Tashkent" });
  const text = [
    "📞 Yangi qayta qo'ng'iroq so'rovi",
    "",
    `👤 Ism: ${name}`,
    `📱 Telefon: ${phone}`,
    `📋 Mavzu: ${topic || "—"}`,
    `🌐 Sahifa: ${page || "—"}`,
    `🕒 Vaqt: ${time}`
  ].join("\n");

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
};
