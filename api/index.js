import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  const { email, subject, message } = req.query;

  if (!email || !subject || !message) {
    return res.status(400).json({
      status: false,
      message: "Email, subject, dan message wajib diisi ❌",
      dev: "Vinzz Official"
    });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'bot.vinzz.otp@gmail.com',
      pass: 'wpezkhahtextlkpn'
    }
  });

  try {
    await transporter.sendMail({
      from: 'bot.vinzz.otp@gmail.com',
      to: email,
      subject,
      text: message
    });

    res.status(200).json({
      status: true,
      message: "Email berhasil dikirim ✅",
      dev: "Vinzz Official"
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      message: "Gagal mengirim email ❌",
      error: err.toString(),
      dev: "Vinzz Official"
    });
  }
        }
