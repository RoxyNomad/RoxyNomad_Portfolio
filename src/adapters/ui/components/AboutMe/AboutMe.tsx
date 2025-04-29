// src/adapters/ui/components/AboutMe/AboutMe.tsx
import styles from './AboutMe.module.css';
import Image from 'next/image';

const AboutMe = () => {

  return (
    <div id="about-me">
      <div className={styles.aboutMeContainer}>
        <div className={styles.portraitContainer}>
          <Image
            src="/pictures/Portrait.jpg"
            alt="Portrait of Roxy"
            width={4160}
            height={6240}
            className={styles.portrait}
          />
        </div>
        <div className={styles.aboutMeTextContainer}>
          <p className={styles.aboutMeSubtitle}>
            Hey, ich bin Roxana – Entwicklerin mit Blick fürs Ganze
          </p>
          <p className={styles.aboutMeText}>
            Code ist meine Sprache, Struktur mein Stil und Effizienz meine Philosophie. 
            Als Web- und Softwareentwicklerin baue ich performante, 
            skalierbare Anwendungen mit modernen Technologien wie TypeScript, React, Next.js, NestJS und PostgreSQL. 
            Mein Fokus: sauberer Code, intuitive UX und nachhaltige Architektur.
          </p>
          <p className={styles.aboutMeText}>
            Ich liebe es, komplexe Herausforderungen pragmatisch zu lösen – egal ob im Frontend, 
            Backend oder bei der Optimierung von Workflows. 
            Meine Erfahrung als Unternehmerin und Veranstaltungsriggerin hat mir beigebracht, strukturiert, 
            zielgerichtet und anpassungsfähig zu arbeiten – Eigenschaften, die auch in der Softwareentwicklung entscheidend sind.
          </p>
          <p className={styles.aboutMeSubtitle}>
            Remote-First & Lösungsorientiert
          </p>
          <p className={styles.aboutMeText}>
            Mein Büro? Überall dort, wo die besten Ideen entstehen. 
            Als digitale Nomadin und Vanliferin bin ich es gewohnt, remote, flexibel und eigenverantwortlich zu arbeiten. 
            Effiziente Kommunikation, kollaborative Prozesse und durchdachte Lösungen sind für mich selbstverständlich – ob allein oder im Team.
          </p>
          <p className={styles.aboutMeSubtitle}>
            Tech Stack & Skills
          </p>
          <p className={styles.aboutMeText}>
            💻 Frontend: Next.js, Angular, React, Redux, Tailwind CSS, SCSS, TypeScript, JavaScript
          </p>
					<p className={styles.aboutMeText}>
            ⚙️ Backend: Node.js, PostgreSQL, NestJS, Prisma, Python
          </p>
					<p className={styles.aboutMeText}>
            🚀 DevOps & Tools: Git, Supabase, CI/CD mit GitHub Actions, Docker
          </p>
					<p className={styles.aboutMeText}>
            🌎 Zusätzliches: UI/UX mit Figma
          </p>
          <p className={styles.aboutMeSubtitle}>
            Lets connect!
          </p>
          <p className={styles.aboutMeText}>
            Ich bin immer auf der Suche nach neuen Herausforderungen und spannenden Projekten. 
            Lass uns gemeinsam innovative Lösungen entwickeln!
          </p>
					<p className={styles.aboutMeText}>
            📩 Schreib mir – ich freue mich auf den Austausch!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
