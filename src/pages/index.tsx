// src/pages/index.tsx
import type { GetServerSideProps, NextPage } from 'next';
import HomePage from '@/adapters/ui/components/HomePage/HomePage';
import { ContactComponentController } from "@/adapters/controllers/ContactComponentController";
import { ContactInfo } from "@/domain/contact/ContactComponent";
import { getMessages } from "@/i18n/getMessages";

interface IndexPageProps {
  contactInfo: ContactInfo;
  messages: Record<string, unknown>;
}

const IndexPage: NextPage<IndexPageProps> = ({ contactInfo }) => {
  return <HomePage contactInfo={contactInfo} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const contactInfo = await ContactComponentController();
  const { messages } = await getMessages(context);

  return {
    props: {
      contactInfo,
      messages,
    },
  };
};

export default IndexPage;
