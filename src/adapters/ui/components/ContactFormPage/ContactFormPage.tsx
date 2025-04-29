// src/adapters/ui/pages/contact/ContactFormPage.tsx
import Head from "next/head";
import ContactForm from "@/adapters/ui/components/ContactForm/ContactForm";



const ContactFormPage = () => {
  return (
    <>
      <Head>
        <title>ContactFormPage</title>
      </Head>
      <main>
        <ContactForm />
      </main>
    </>
  );
};

export default ContactFormPage;

