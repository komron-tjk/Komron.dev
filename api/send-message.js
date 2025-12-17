export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Get secrets from Environment Variables
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    return res.status(500).json({ error: 'Server misconfiguration: Constants missing' });
  }

  const text = `🔥 <b>New Order/Message</b>\n\n👤 <b>Name:</b> ${name}\n📞 <b>Phone:</b> ${phone}\n💬 <b>Message:</b> ${message}`;
  
  try {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    
    // We use fetch (Node.js 18+ includes native fetch, or Vercel supports it)
    const telegramRes = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: text,
            parse_mode: 'html'
        })
    });

    const data = await telegramRes.json();

    if (!telegramRes.ok) {
        throw new Error(data.description || 'Telegram API Error');
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Telegram Error:', error);
    return res.status(500).json({ error: 'Failed to send message' });
  }
}
