import { ContactMessage } from "../../domain/contact-message.entity";
import { sendEmailNotification } from "../../infrastructure/email/email.service";
import { SendContactMessageCommand } from "../commands/send-contact-message.command";

export class SendContactMessageHandler {
  async execute(command: SendContactMessageCommand): Promise<void> {
    // Domain Entity validiert die Eingaben (Namenlänge, E-Mail-Format, etc.)
    const contactMessage = new ContactMessage({
      name: command.name,
      email: command.email,
      subject: command.subject,
      message: command.message,
    });

    await sendEmailNotification(contactMessage);
  }
}