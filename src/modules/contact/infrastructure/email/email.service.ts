import { Resend } from "resend";
import { ContactMessage } from "../../domain/contact-message.entity";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmailNotification(msg: ContactMessage): Promise<void> {
  const adminEmail = process.env.ADMIN_CONTACT_EMAIL || "roxana_zwicky@roxynomad.com";

  await resend.emails.send({
    from: "Portfolio Contact <onboarding@resend.dev>",
    to: adminEmail,
    replyTo: msg.email,
    subject: `[Portfolio Kontakt] ${msg.subject}`,
    html: `
      <h2>Neue Nachricht über dein Portfolio</h2>
      <p><strong>Name:</strong> ${msg.name}</p>
      <p><strong>E-Mail:</strong> ${msg.email}</p>
      <p><strong>Betreff:</strong> ${msg.subject}</p>
      <hr />
      <p style="white-space: pre-wrap;">${msg.message}</p>
    `,
  });
}