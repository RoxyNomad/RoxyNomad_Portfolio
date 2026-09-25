import Link from "next/link";
import styles from "./CtaSection.module.scss";

export function CtaSection() {
  return (
    <section className={styles.ctaSection}>
      <div className="container">
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.subtitle}>Let’s work together</p>
            <h2 className={styles.title}>
              Bereit für sauberen Code &amp; durchdachtes Design?
            </h2>
            <p className={styles.description}>
              Egal ob neues Projekt, Refactoring auf moderne Architektur (DDD/CQRS)
              oder Unterstützung im Team – lass uns darüber sprechen!
            </p>
            <Link href="/contact" className={styles.button}>
              👉 Jetzt Projekt anfragen
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}