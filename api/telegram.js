// Vercel serverless function: POST /api/telegram — webhook for @uzlitrpro_operator_bot.
// Turns the bot into a two-way support chat:
//   • a customer opens the bot → it greets them in their language;
//   • every customer message is passed on to the operator chat (TELEGRAM_CHAT_ID),
//     tagged with the customer's id;
//   • the operator replies to that message in Telegram → the bot sends the reply
//     to the customer, so the customer never sees the operator's own account.
//
// Needs these environment variables in Vercel:
//   TELEGRAM_BOT_TOKEN       — the bot's token (already used by /api/callback)
//   TELEGRAM_CHAT_ID         — the operator chat (already used by /api/callback)
//   TELEGRAM_WEBHOOK_SECRET  — any long random string; Telegram sends it back with
//                              every update, so nobody else can call this endpoint
//
// Connect it once by opening in a browser:
//   https://api.telegram.org/bot<TOKEN>/setWebhook?url=https://www.uzlitrpro.uz/api/telegram&secret_token=<SECRET>

const GREETING = {
  uz: "Assalomu alaykum! 👋\nUzLitrPro operatoriga xush kelibsiz.\n\nSavolingizni yoki buyurtmangizni shu yerga yozing — menejerimiz tez orada javob beradi.\n\n📞 +998 77 090 05 50",
  ru: "Здравствуйте! 👋\nДобро пожаловать к оператору UzLitrPro.\n\nНапишите здесь ваш вопрос или заказ — наш менеджер скоро ответит.\n\n📞 +998 77 090 05 50",
  en: "Hello! 👋\nWelcome to the UzLitrPro operator.\n\nWrite your question or order here — our manager will reply soon.\n\n📞 +998 77 090 05 50"
};

// Marker that ties an operator-chat message to a customer. Parsed back on reply.
const ID_MARK = "🆔 ";
const ID_PATTERN = /🆔 (\d+)/;

// Message types that can carry a caption, so the marker can ride along on the copy.
const CAPTIONED = ["photo", "video", "document", "audio", "voice", "animation"];

module.exports = async (req, res) => {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const operatorChat = String(process.env.TELEGRAM_CHAT_ID || "");
  const secret = process.env.TELEGRAM_WEBHOOK_SECRET;
  if (!token || !operatorChat || !secret) {
    console.error("TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID or TELEGRAM_WEBHOOK_SECRET is not set");
    return res.status(500).json({ ok: false });
  }
  if (req.headers["x-telegram-bot-api-secret-token"] !== secret) {
    return res.status(403).json({ ok: false });
  }

  const update = typeof req.body === "object" && req.body ? req.body : {};
  const message = update.message;

  try {
    if (message && message.chat) {
      if (String(message.chat.id) === operatorChat) {
        await handleOperatorMessage(token, operatorChat, message);
      } else if (message.chat.type === "private") {
        await handleCustomerMessage(token, operatorChat, message);
      }
    }
  } catch (error) {
    console.error("Telegram webhook error:", error);
  }

  // Always 200, otherwise Telegram keeps re-sending the same update.
  return res.status(200).json({ ok: true });
};

async function handleCustomerMessage(token, operatorChat, message) {
  const from = message.from || {};
  const text = message.text || "";

  if (text.startsWith("/start")) {
    const lang = pickLanguage(from.language_code);
    await api(token, "sendMessage", { chat_id: message.chat.id, text: GREETING[lang] });
    const source = text.split(" ")[1] === "site" ? " (saytdan)" : "";
    await api(token, "sendMessage", {
      chat_id: operatorChat,
      text: `🟢 Yangi mijoz botni ochdi${source}\n${describe(from)}\n${ID_MARK}${from.id}`
    });
    return;
  }

  const header = `💬 ${describe(from)}\n${ID_MARK}${from.id}`;

  if (text) {
    await api(token, "sendMessage", { chat_id: operatorChat, text: `${header}\n\n${text}` });
    return;
  }

  const type = CAPTIONED.find((key) => message[key]);
  if (type) {
    const caption = message.caption ? `${header}\n\n${message.caption}` : header;
    await api(token, "copyMessage", {
      chat_id: operatorChat,
      from_chat_id: message.chat.id,
      message_id: message.message_id,
      caption: caption.slice(0, 1024)
    });
    return;
  }

  // Stickers, round videos, locations, contacts…: send the header, then the item under it.
  const sent = await api(token, "sendMessage", { chat_id: operatorChat, text: header });
  await api(token, "copyMessage", {
    chat_id: operatorChat,
    from_chat_id: message.chat.id,
    message_id: message.message_id,
    reply_to_message_id: sent && sent.result ? sent.result.message_id : undefined
  });
}

async function handleOperatorMessage(token, operatorChat, message) {
  const replied = message.reply_to_message;
  const marker = replied && (replied.text || replied.caption || "").match(ID_PATTERN);

  if (!marker) {
    if (!(message.text || "").startsWith("/")) {
      await api(token, "sendMessage", {
        chat_id: operatorChat,
        text: "ℹ️ Mijozga javob berish uchun uning xabariga «Reply» (Javob berish) qilib yozing."
      });
    }
    return;
  }

  const result = await api(token, "copyMessage", {
    chat_id: marker[1],
    from_chat_id: operatorChat,
    message_id: message.message_id
  });

  await api(token, "sendMessage", {
    chat_id: operatorChat,
    reply_to_message_id: message.message_id,
    text: result && result.ok ? "✅ Yuborildi" : "⚠️ Yuborilmadi — mijoz botni bloklagan bo'lishi mumkin."
  });
}

function describe(user) {
  const name = [user.first_name, user.last_name].filter(Boolean).join(" ") || "Mijoz";
  return user.username ? `👤 ${name} (@${user.username})` : `👤 ${name}`;
}

function pickLanguage(code) {
  if (!code) return "uz";
  if (code.startsWith("ru")) return "ru";
  if (code.startsWith("en")) return "en";
  return "uz";
}

async function api(token, method, payload) {
  const response = await fetch(`https://api.telegram.org/bot${token}/${method}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  const data = await response.json().catch(() => null);
  if (!response.ok) console.error(`Telegram ${method} failed:`, response.status, data);
  return data;
}
