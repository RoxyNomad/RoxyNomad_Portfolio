// src/adapters/ui/components/HomePage/HomePage.tsx
import Head from "next/head";
import styles from './HomePage.module.css';
import Navbar from "@/adapters/ui/components/Navbar/Navbar";
import AboutMe from "@/adapters/ui/components/AboutMe/AboutMe";
import Projects from "@/adapters/ui/components/Projects/Projects";
import ContactComponent from "@/adapters/ui/components/ContactComponent/ContactComponent";
import { ContactInfo } from "@/domain/contact/ContactComponent";

interface HomePageProps {
  contactInfo: ContactInfo;
}

const HomePage: React.FC<HomePageProps> = ({ contactInfo }) => {
  return (
    <div>
      <Head>
        <title>RoxyNomad</title>
      </Head>
      <main>
        <header className={styles.header}>
          <Navbar />
        </header>
        <AboutMe />
        <Projects />
        <ContactComponent contactInfo={contactInfo} />
      </main>
    </div>
  );
};

export default HomePage;