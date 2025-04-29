// src/infrastructure/emailjs/EmailService.ts
import emailjs from "emailjs-com";
import { ContactFormData } from "../../domain/contact/ContactForm";
import { emailjsConfig } from "../../config/emailjs.config";

export class EmailService {
  static async send(formData: ContactFormData): Promise<"success" | "error"> {
    try {
      const response = await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        formData,
        emailjsConfig.userId
      );

      if (response.status === 200) {
        return "success";
      } else {
        return "error";
      }
    } catch (error) {
      console.error("EmailService Error:", error);
      return "error";
    }
  }
}

