// src/domain/contact/ContactForm.ts
export type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

export class ContactForm {
  constructor(public data: ContactFormData) {}

  isValid(): boolean {
    return this.data.name !== "" && this.data.email !== "" && this.data.message !== "";
  }
}

