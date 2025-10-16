// src/adapters/controllers/ContactFormController.ts
import { ContactFormData } from "../../domain/contact/ContactForm";
import { EmailService } from "../../infrastructure/emailjs/EmaiService";

export class ContactFormController {
  static validateForm(data: ContactFormData) {
    const errors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!data.name.trim()) errors.name = "Name ist erforderlich";
    if (!data.email.trim()) errors.email = "E-Mail ist erforderlich";
    if (!data.message.trim()) errors.message = "Nachricht ist erforderlich";
    if (!data.subject.trim()) errors.subject = "Betreff ist erforderlich";

    // Optional: Regex-Checks
    const subjectRegex = /^[a-zA-Z0-9\s\-()]*$/;
    if (data.subject && !subjectRegex.test(data.subject)) {
      errors.subject = "Betreff enthält ungültige Zeichen";
    }

    return errors;
  }

  static async submitForm(data: ContactFormData): Promise<"success" | "error"> {
    return await EmailService.send(data);
  }
}
