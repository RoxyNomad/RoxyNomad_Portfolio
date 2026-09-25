import Link from "next/link";
import styles from "./HeroSection.module.scss";

export function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <div className={styles.badge}>
          <span className={styles.dot} />
          Available for international projects
        </div>

        <h1 className={styles.title}>
          Kreatives Design trifft auf <br />
          <span className={styles.highlight}>Clean Architecture</span>
        </h1>

        <p className={styles.subtitle}>
          Ich bin Roxy – Webentwicklerin, Designerin &amp; digitale Nomadin aus der Schweiz. 
          Ich baue performante Next.js-Anwendungen mit durchdachtem UI und 
          skalierbarer Architektur nach DDD &amp; CQRS.
        </p>

        <div className={styles.ctaGroup}>
          <Link href="/portfolio" className={styles.primaryCta}>
            Projekte entdecken
          </Link>
          <Link href="/contact" className={styles.secondaryCta}>
            Kontakt aufnehmen
          </Link>
        </div>
      </div>
    </section>
  );
}