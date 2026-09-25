// src/pages/contact/index.tsx
import { NextPage, GetServerSideProps } from 'next';
import ContactFormPage from '@/adapters/ui/components/ContactFormPage/ContactFormPage';
import { getMessages } from "@/i18n/getMessages";

const ContactPage: NextPage = () => {
  return <ContactFormPage />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { messages } = await getMessages(context);
  return { props: { messages } };
};

export default ContactPage;
