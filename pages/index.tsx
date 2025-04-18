import Head from "next/head"
import indexStyles from '@/styles/index.module.css'
import LanguageSwitcher from '@/components/LanguageSwitcher';
import Navbar from "@/components/Navbar"
import AboutMe from "@/components/AboutMe"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export async function getStaticProps({ locale }: { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'de', ['common'])),
    },
  };
}

const Index = () => {

	return (
		<div>
			<Head>
				<title>RoxyNomad</title>
			</Head>
			<main>
				<header className={indexStyles.header}>
					<Navbar />
					<LanguageSwitcher/>
				</header>
				<AboutMe/>
				<Projects />
				<Contact />
			</main>
		</div>
		
	)
}

export default Index

