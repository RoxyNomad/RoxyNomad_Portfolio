"use server";

import { SendContactMessageHandler } from "../handlers/send-contact-message.handler";

export async function sendContactFormAction(formData: FormData) {
  try {
    const handler = new SendContactMessageHandler();

    await handler.execute({
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    });

    return { success: true, error: null };
  } catch (err: any) {
    return { success: false, error: err.message || "Fehler beim Senden der Nachricht." };
  }
}