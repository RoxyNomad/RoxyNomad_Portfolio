// src/pages/index.tsx
import type { GetServerSideProps, NextPage } from 'next';
import HomePage from '@/adapters/ui/components/HomePage/HomePage';
import { ContactComponentController } from "@/adapters/controllers/ContactComponentController";
import { ContactInfo } from "@/domain/contact/ContactComponent";

interface IndexPageProps {
  contactInfo: ContactInfo;
}

const IndexPage: NextPage<IndexPageProps> = ({ contactInfo }) => {
  return <HomePage contactInfo={contactInfo} />;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const contactInfo = await ContactComponentController();

  return {
    props: {
      contactInfo,
    },
  };
};

export default IndexPage;
