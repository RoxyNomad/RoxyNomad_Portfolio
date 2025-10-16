import { ContactFormData } from "@/domain/contact/ContactForm";
import { ContactFormController } from "@/adapters/controllers/ContactFormController";
import { ValidationError, EmailSendError } from "@/domain/errors/ContactFormErrors";

export const sendContactForm = async (data: ContactFormData): Promise<"success"> => {
  const validationErrors = ContactFormController.validateForm(data);

  if (Object.keys(validationErrors).length > 0) {
    throw new ValidationError(validationErrors);
  }

  const result = await ContactFormController.submitForm(data);

  if (result === "error") {
    throw new EmailSendError();
  }

  return "success";
};
