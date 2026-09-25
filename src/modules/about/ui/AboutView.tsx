import Link from "next/link";
import SkillsTable from "./components/SkillsTable";
import styles from "./AboutView.module.scss";

export function AboutView() {
  return (
    <div className={styles.about__page}>
      <div className={styles.intro__section}>
        <span className={styles.badge}>Über Mich &amp; Meine Philosophie</span>
        <h1>Digitale Nomadin, Entwicklerin &amp; Creatorin</h1>

        <section className={styles.about__intro}>
          <p>
            Hey, ich bin <strong>Roxy</strong> – Webentwicklerin, Designerin und
            Unternehmerin aus der Schweiz. 🇨🇭
          </p>
          <p>
            Ich verbinde Technologie mit persönlicher Freiheit, um digitale
            Projekte umzusetzen, die nicht nur gut aussehen, sondern unter der
            Haube auf einer soliden Architektur fußen.
          </p>
        </section>

        <section className={styles.about__mission}>
          <h2>Meine Arbeitsweise &amp; Architektur-Fokus</h2>
          <p>
            Mein Schwerpunkt liegt auf dem Frontend mit **TypeScript, React 19
            und Next.js 15**. Dabei lege ich großen Wert auf sauberen, wartbaren
            Code nach **Clean-Code-Prinzipien** sowie durchdachte
            Architekturmuster wie **DDD (Domain-Driven Design)** und **CQRS**.
          </p>
          <p>
            Ich begleite Projekte von der ersten Idee im Figma-Design bis hin
            zum perfekten Deployment. Je nach Anforderung nutze ich WordPress,
            Webflow oder maßgeschneiderte Headless-Lösungen mit **NeonDB,
            Drizzle ORM und Supabase**.
          </p>
          <p>
            Für Automationen und Tools greife ich leidenschaftlich gerne zu
            **Python** (wie bei meinem eigenen Desktop-Passwort-Manager).
          </p>
        </section>

        <section className={styles.about__skills}>
          <h2>Technologische Übersicht</h2>
          <SkillsTable />
        </section>

        <section className={styles.about__personal}>
          <h2>Leben &amp; Mindset</h2>
          <p>
            Ich glaube an Authentizität, kontinuierliches Lernen und die Freiheit,
            von überall auf der Welt zu arbeiten.
          </p>
          <p>
            Wenn ich nicht gerade im Editor tippe, reise ich an neue Orte, entdecke
            fremde Kulturen oder stehe mit der Kamera hinter der Linse. Diese
            Energie und Flexibilität fließen direkt in jedes Projekt ein.
          </p>
        </section>

        <section className={styles.about__cta}>
          <h3>Lass uns etwas Außergewöhnliches erschaffen</h3>
          <Link href="/contact" className={styles.cta}>
            👉 Kontakt aufnehmen
          </Link>
        </section>
      </div>
    </div>
  );
}