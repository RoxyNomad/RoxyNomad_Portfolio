// src/domain/contact/ContactInfo.ts

export class ContactInfo {
  constructor(
    public name: string,
    public address: string,
    public country: string,
    public email: string,
    public phone: string,
    public links: {
      linkedin: string;
      github: string;
      codepen: string;
      whatsapp: string;
      telegram: string;
      instagram: string;
      youtube: string;
      discord: string;
    }
  ) {}
}
