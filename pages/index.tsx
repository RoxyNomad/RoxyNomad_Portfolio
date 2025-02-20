import Head from "next/head"
import indexStyles from '@/styles/index.module.css'
import iconStyles from '@/styles/icons.module.css'
import Image from "next/image"
import Link from "next/link"

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
								💻 Frontend: React, Next.js, Redux, Tailwind CSS<br />
								⚙️ Backend: Node.js, NestJS, Express, GraphQL, PostgreSQL, Prisma<br />
								🚀 DevOps & Tools: Git, Docker, Supabase, CI/CD mit GitHub Actions<br />
								🌎 Zusätzliches: UI/UX mit Figma, REST APIs, MongoDB<br />
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

				<section id="projects"></section>

				<footer id="contact" className={indexStyles.footerContainer}>
					<div className={iconStyles.contactIconsOne}>
						<Link href='https://www.linkedin.com/in/roxynomad'>
							<Image src='/pictures/linkedin-icon.png' alt='LinkedIn Icon' width={200} height={200} className={iconStyles.linkedInIcon}/>
						</Link>
						<Link href='https://github.com/RoxyNomad'>
							<Image src='/pictures/github-icon.png' alt='GitHub Icon' width={200} height={200} className={iconStyles.githubIcon}/>
						</Link>
						<Link href='https://codepen.io/RoxyNomad'>
							<Image src='/pictures/codepen-icon.png' alt='CodePen Icon' width={200} height={200} className={iconStyles.codepenIcon}/>
						</Link>
						<Link href='https://www.youtube.com/channel/UCq8qe1Z7MuQo0QlRZ-mfpVg'>
							<Image src='/pictures/youtube-icon.png' alt='YouTube Icon' width={200} height={200} className={iconStyles.youtubeIcon}/>
						</Link>
					</div>
					<div className={indexStyles.contactDataContainer}>
						<Link href='https://wa.me/+41772831236' target='_blank'>
							<Image src='/pictures/whatsapp-icon.png' alt='WhatsApp Chat' width={200} height={200} className={iconStyles.whatsappIcon}/>
						</Link>
						<div className={indexStyles.contactDataSubContainer}>
							<p className={indexStyles.contactTitle}>Meine Kontaktdaten</p>
							<p className={indexStyles.contactData}>
								Roxana Zwicky<br />
								Hauptstrasse 35<br />
								4133 Pratteln<br />
								Schweiz<br />
							</p>
							<p className={indexStyles.contactMailTitle}>Schreib mir eine Mail:</p>
							<Link className={indexStyles.contactMail} href='mailto:roxynomad.dev@gmail.com'>roxynomad.dev@gmail.com</Link>
							<p className={indexStyles.contactNumberTitle}>Ruf mich an:</p>
							<Link className={indexStyles.contactNumber} href='tel:+41772831236'>+41 77 283 1236</Link>
							<p className={indexStyles.contactFormularTitle}>Hier gehts zum <Link href="/contact" className={indexStyles.contactFormularButton} target="_blank">Kontaktformular</Link></p>
						</div>
						<Link href='https://t.me/RoxyNomad' target='_blank'>
							<Image src='/pictures/telegram-icon.png' alt='Chat on Telegram' width={200} height={200} className={iconStyles.telegramIcon}/>
						</Link>
					</div>
					<div className={iconStyles.contactIconsTwo}>
						<Link href='https://www.instagram.com/roxynomad_?igsh=bnpuejdmZ2RmOTVt'>
							<Image src='/pictures/instagram-icon.png' alt='Instagram Icon' width={200} height={200} className={iconStyles.instagramIcon}/>
						</Link>
						<Link href='https://www.facebook.com/RoxyNomad'>
							<Image src='/pictures/facebook-icon.png' alt='Facebook Icon' width={200} height={200} className={iconStyles.facebookIcon}/>
						</Link>
						<Link href='https://discord.com/users/1195759676193775682'>
							<Image src='/pictures/discord-icon.png' alt='Discord Icon' width={200} height={200} className={iconStyles.discordIcon}/>
						</Link>
						
					</div>
				</footer>
			</main>
		</div>
		
	)
}

export default Index

