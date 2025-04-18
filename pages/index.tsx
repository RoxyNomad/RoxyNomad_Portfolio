import Head from "next/head"
import indexStyles from '@/styles/index.module.css'
import iconStyles from '@/styles/icons.module.css'
import Image from "next/image"
import Link from "next/link"
import LanguageSwitcher from '@/components/LanguageSwitcher';


const Index = () => {

	return (
		<div>
			<Head>
				<title>RoxyNomad</title>
			</Head>
			<main>
				<header className={indexStyles.header}>
					<nav className={indexStyles.navbar}>
						<Link href='#about-me' className={indexStyles.navbarTitleOne}>About Me</Link>
						<Link href='#projects' className={indexStyles.navbarTitleTwo}>Projects</Link>
						<Link href='#contact' className={indexStyles.navbarTitleThree}>Contact</Link>
					</nav>
					<LanguageSwitcher/>
				</header>
				<section id='about-me'>
					<div className={indexStyles.aboutMeContainer}>
						<div className={indexStyles.portraitContainer}>
							<Image src='/pictures/Portrait.jpg' alt='Portrait of Roxy' width={4160} height={6240} className={indexStyles.portrait}/>
						</div>
						<div className={indexStyles.aboutMeTextContainer}>
							<p className={indexStyles.aboutMeSubtitle}>Hey, ich bin Roxana – Entwicklerin mit Blick fürs Ganze</p>
							<p className={indexStyles.aboutMeText}>
								Code ist meine Sprache, Struktur mein Stil und Effizienz meine Philosophie. Als Web- und Softwareentwicklerin baue ich performante, 
								skalierbare Anwendungen mit modernen Technologien wie TypeScript, React, Next.js, NestJS und PostgreSQL. 
								Mein Fokus: sauberer Code, intuitive UX und nachhaltige Architektur.
							</p>
							<p className={indexStyles.aboutMeText}>
								Ich liebe es, komplexe Herausforderungen pragmatisch zu lösen – egal ob im Frontend, Backend oder bei der Optimierung von Workflows. 
								Meine Erfahrung als Unternehmerin und Veranstaltungsriggerin hat mir beigebracht, strukturiert, 
								zielgerichtet und anpassungsfähig zu arbeiten – Eigenschaften, die auch in der Softwareentwicklung entscheidend sind.
							</p>
							<p className={indexStyles.aboutMeSubtitle}>Remote-First & Lösungsorientiert</p>
							<p className={indexStyles.aboutMeText}>
								Mein Büro? Überall dort, wo die besten Ideen entstehen. Als digitale Nomadin und Vanliferin bin ich es gewohnt, 
								remote, flexibel und eigenverantwortlich zu arbeiten. Effiziente Kommunikation, 
								kollaborative Prozesse und durchdachte Lösungen sind für mich selbstverständlich – ob allein oder im Team.
							</p>
							<p className={indexStyles.aboutMeSubtitle}>Tech Stack & Skills</p>
							<p className={indexStyles.aboutMeText}>
								💻 Frontend: Next.js, Angular, React, Redux, Tailwind CSS, SCSS, TypeScript, JavaScript<br />
								⚙️ Backend: Node.js, PostgreSQL, NestJS, Prisma, Python<br />
								🚀 DevOps & Tools: Git, Supabase, CI/CD mit GitHub Actions, Docker<br />
								🌎 Zusätzliches: UI/UX mit Figma, REST APIs<br />
							</p>
							<p className={indexStyles.aboutMeSubtitle}>Let’s connect!</p>
							<p className={indexStyles.aboutMeText}>
								Ich bin immer auf der Suche nach neuen Herausforderungen und spannenden Projekten. Lass uns gemeinsam innovative Lösungen entwickeln!
								<br /><br />
								📩 Schreib mir – ich freue mich auf den Austausch!
							</p>
						</div>
					</div>
				</section>

				<section id="projects" className={indexStyles.projectsContainer}>
					<p className={indexStyles.projectsTitle}>Projekte</p>
					<div className={indexStyles.projectsSubContainer}>
						<div className={indexStyles.projectContainer}>
							<Link href='https://galleryshop.vercel.app/'>
								<Image src='/pictures/onlineShop.png' alt='Project 1' width={3840} height={2160} className={indexStyles.projectImage}/>
							</Link>
							<p className={indexStyles.projectDescription}>
								Technologie Stack<br />
								Next.js, TypeScript, TailwindCSS, Module CSS (SCSS), Supabase (PostgreSQL), Stripe, Vercel, Chart.js<br />
								<br />
								Das Projekt ist ein Online-Shop, der es Nutzern ermöglicht, ihre Kunstwerke zu verkaufen.
								Es beinhaltet eine Chatfunktion, eine Künstler-Seite, um die Produkte zu verwalten,
								eine Suchfunktion, einige Filter- und Sortierungsfunktionen und eine Datenbank.<br />
								Es ist für den Kunden möglich , seine Bestellungen zu verfolgen.<br />
							</p>
						</div>
						<div className={indexStyles.projectContainer}>
							<Link href='https://eternal-ghosts.vercel.app/news'>
								<Image src='/pictures/bandPage.png' alt='Project 2' width={3840} height={2160} className={indexStyles.projectImage}/>
							</Link>
							<p className={indexStyles.projectDescription}>
								Technologie Stack<br />
								Next.js, TypeScript, TailwindCSS, Module CSS, Vercel, nodemailer<br />
								<br />
								Das Projekt ist eine klassische Band-Website, die es Nutzern ermöglicht, sich über die Band zu informieren.<br />
								Es besteht aus mehreren Seiten, einige haben Unterseiten oder Funktionen
								und es gibt eine Kontaktseite, die es dem Nutzer ermöglicht, der Band eine Nachricht zu senden.<br />
							</p>
						</div>
					</div>
				</section>

				<footer id="contact" className={indexStyles.footerContainer}>
					<div className={iconStyles.contactIconsOne}>
						<Link href='https://www.linkedin.com/in/roxynomad'>
							<Image src='/pictures/linkedin-icon.png' alt='LinkedIn Icon' width={100} height={100} className={iconStyles.linkedInIcon}/>
						</Link>
						<Link href='https://github.com/RoxyNomad'>
							<Image src='/pictures/github-icon.png' alt='GitHub Icon' width={100} height={100} className={iconStyles.githubIcon}/>
						</Link>
						<Link href='https://codepen.io/RoxyNomad'>
							<Image src='/pictures/codepen-icon.png' alt='CodePen Icon' width={100} height={100} className={iconStyles.codepenIcon}/>
						</Link>
						<Link href='https://wa.me/+41772831236' target='_blank'>
							<Image src='/pictures/whatsapp-icon.png' alt='WhatsApp Chat' width={100} height={100} className={iconStyles.whatsappIcon}/>
						</Link>
					</div>
					<div className={indexStyles.contactDataContainer}>
						<div className={indexStyles.contactDataSubContainer}>
							<p className={indexStyles.contactTitle}>Meine Kontaktdaten</p>
							<p className={indexStyles.contactData}>
								Roxana Zwicky<br />
								Hauptstrasse 35<br />
								4133 Pratteln<br />
								Schweiz<br />
							</p>
							<p className={indexStyles.contactMailTitle}>Schreib mir eine Mail:</p>
							<Link className={indexStyles.contactMail} href='mailto:roxana_zwicky@roxynomad.com'>roxana_zwicky@roxynomad.com</Link>
							<p className={indexStyles.contactNumberTitle}>Ruf mich an:</p>
							<Link className={indexStyles.contactNumber} href='tel:+41772831236'>+41 77 283 1236</Link>
							<p className={indexStyles.contactFormularTitle}>Hier gehts zum <Link href="/contact" className={indexStyles.contactFormularButton} target="_blank">Kontaktformular</Link></p>
						</div>
					</div>
					<div className={iconStyles.contactIconsTwo}>
						<Link href='https://t.me/RoxyNomad' target='_blank'>
							<Image src='/pictures/telegram-icon.png' alt='Chat on Telegram' width={100} height={100} className={iconStyles.telegramIcon}/>
						</Link>
						<Link href='https://www.instagram.com/roxynomad_?igsh=bnpuejdmZ2RmOTVt'>
							<Image src='/pictures/instagram-icon.png' alt='Instagram Icon' width={100} height={100} className={iconStyles.instagramIcon}/>
						</Link>
						<Link href='https://www.youtube.com/channel/UCq8qe1Z7MuQo0QlRZ-mfpVg'>
							<Image src='/pictures/youtube-icon.png' alt='YouTube Icon' width={100} height={100} className={iconStyles.youtubeIcon}/>
						</Link>
						<Link href='https://discord.com/users/1195759676193775682'>
							<Image src='/pictures/discord-icon.png' alt='Discord Icon' width={100} height={100} className={iconStyles.discordIcon}/>
						</Link>
						
					</div>
				</footer>
			</main>
		</div>
		
	)
}

export default Index

