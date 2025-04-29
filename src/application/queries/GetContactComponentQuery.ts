// src/application/queries/GetContactInfoQuery.ts

import { ContactInfo } from "@/domain/contact/ContactComponent";
import { ContactRepository } from "@/infrastructure/cms/ContactCopmonentRepository";

export const getContactInfoQuery = async (): Promise<ContactInfo> => {
  return await ContactRepository.getContactInfo();
};
