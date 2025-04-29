// src/infrastructure/cms/ContactRepository.ts

import { ContactInfo } from "@/domain/contact/ContactComponent";
import contactData from "./contactComponent.json";

export class ContactRepository {
  static async getContactInfo(): Promise<ContactInfo> {
    return new ContactInfo(
      contactData.name,
      contactData.address,
      contactData.country,
      contactData.email,
      contactData.phone,
      contactData.links
    );
  }
}
