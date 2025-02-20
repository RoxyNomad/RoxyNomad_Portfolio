import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, subject, message } = req.body;

  // SMTP-Transporter einrichten
  const transporter = nodemailer.createTransport({
    service: "gmail", // Alternativ ein eigener SMTP-Server
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "deine-email@example.com",
      subject: `Kontaktformular: ${subject}`,
      text: `Von: ${name}\nEmail: ${email}\nTelefon: ${phone}\n\nNachricht:\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Email not sent" });
  }
}
