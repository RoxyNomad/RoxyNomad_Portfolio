// src/adapters/ui/components/AboutMe/AboutMe.tsx
import styles from './AboutMe.module.css';
import Image from 'next/image';
import Link from 'next/link';

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
            Hey, ich bin Roxana – Ich bringe Ihre Videos und Ideen zum Leben!
          </p>
          <p className={styles.aboutMeText}>
            Als leidenschaftlicher Video Editor und Cutter habe ich ein feines Gespür für Timing, Rhythmus und Emotionen. <br />
            Mit diesen Fähigkeiten verwandle ich Ihr Rohmaterial in fesselnde Geschichten.
          </p>
          <p className={styles.aboutMeText}>
            Brauchen Sie ein stimmungsvolles Video Ihrer letzten Reise, 
            ein oder mherere YouTube Videos oder professionelle Social-Media-Beiträge für Ihr Instagram oder TikTok? <br />
            Ich liefere Ihnen präzise geschnittene Inhalte mit Stil und Struktur.
          </p>
          <p className={styles.aboutMeSubtitle}>
            Was mich auszeichnet:
          </p>
          <p className={styles.aboutMeText}>
            Gefühl für Storytelling & Dramaturgie <br />
            Präzision und Effizienz im Videoschnitt <br />
            Kreative Ideen für visuelle Effekte und Übergänge <br />
            Schneller, intuitiver Workflow mit DaVinci Resolve <br />
            Ausgeprägte Kreativität durch künstlerisches Training <br />
            Liebe zum Detail und hohe Qualitätsansprüche <br />
          </p>
          <p className={styles.aboutMeSubtitle}>
            Bereit für dein nächstes Projekt?
          </p>
          <p className={styles.aboutMeText}>
            Sehen Sie sich hier meine bisherigen Arbeiten an: <Link href='#projects'>Projekte</Link>
          </p>
          <p className={styles.aboutMeText}>
            Wenn Sie Ihr nächster Videoschnitt von mir möchten, Schreiben Sie mir. <br />
            Ich freue mich auf die Zusammenarbeit!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
