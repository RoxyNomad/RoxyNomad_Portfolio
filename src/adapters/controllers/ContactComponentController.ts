// src/adapters/controllers/ContactComponentController.ts
import { getContactInfoQuery } from "@/application/queries/GetContactComponentQuery";

export const ContactComponentController = async () => {
  const contactInfo = await getContactInfoQuery();

  // Manuell serialisierbare Felder extrahieren
  return {
    name: contactInfo.name,
    address: contactInfo.address,
    country: contactInfo.country,
    email: contactInfo.email,
    phone: contactInfo.phone,
    links: {
      linkedin: contactInfo.links?.linkedin,
      github: contactInfo.links?.github,
      codepen: contactInfo.links?.codepen,
      whatsapp: contactInfo.links?.whatsapp,
      telegram: contactInfo.links?.telegram,
      instagram: contactInfo.links?.instagram,
      youtube: contactInfo.links?.youtube,
      discord: contactInfo.links?.discord,
    },
  };
};
