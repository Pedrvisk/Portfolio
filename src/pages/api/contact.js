export default async function handler(req, res) {
  try {
    const webhookData = {
      username: 'Pedrovisk.ml',
      content: `\`\`\`E-mail: ${req.body.email}\nMessage: ${req.body.message}\`\`\``,
    };

    await fetch(process.env.WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(webhookData),
    });

    res.status(200).json({ message: 'SUCCESS!' });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: 'ERROR!' });
  }
}
