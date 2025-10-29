import SkillsTable from "@/components/layout/SkillsTable";
import styles from "@/styles/pages/_about.module.scss";
import Link from "next/link";

const About = () => {
	return (
		<div className={styles.about__page}>
			<div className="intro-section">
				<h1>Über Mich</h1>

				<section className={styles.about__intro}>
					<p>Hey ich bin Roxy, leidenschaftliche Webentwicklerin mit Design-Kenntnissen, Unternehmerin und digitale Nomadin aus der Schweiz.</p>
					<p>Ich verbinde Technologie mit Freiheit, um kreative und funktionale digitale Projekte umzusetzen, die Menschen verbinden, inspirieren und einen echten Mehrwert schaffen.</p>
				</section>
				
				<section className={styles.about__mission}>
					<p>Mein Fokus liegt auf Frontend-Entwicklung, kombiniert mit durchdachtem Design, modernen Webtechnologien und effizienten Workflows.</p>
					<p>Ich begleite Projekte von der Idee bis zum fertigen Deployment. Egal ob WordPress, Webflow, React-Apps oder Headless-Lösungen mit Supabase/Neon/PostgreSQL.</p>
				</section>

				<section className={styles.about__skills}>
					<SkillsTable />
				</section>

				<section className={styles.about__personal}>
					<p>Ich glaube an Authentizität, Kreativität und stetiges Lernen.</p>
					<p>Wenn ich nicht entwickle, bin ich wahrscheinlich auf Reisen, entdecke neue Orte oder filme mit meiner Kamera.</p>
					<p>Meine Freiheit ist mein grösster Antrieb -- und genau diese Energie fliesst in jedes Projekt ein, das ich erschaffe.</p>
				</section>

				<section className={styles.about__cta}>
					<p>👉 Let’s build something together</p>
					<Link href='/contact' className='cta'>[Contact Me]</Link>
				</section>
			</div>
		</div>
	);
}

export default About;