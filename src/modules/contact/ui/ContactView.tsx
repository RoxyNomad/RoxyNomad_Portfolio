import { ContactForm } from "./ContactForm";
import styles from "./ContactView.module.scss";

export function ContactView() {
  return (
    <section className={styles.contactPage}>
      <div className={styles.header}>
        <span className={styles.subtitle}>Get in Touch</span>
        <h1 className={styles.title}>Lass uns sprechen</h1>
        <p className={styles.description}>
          Du hast ein spannendes Projekt, Fragen zu Web-Architektur oder möchtest bezüglich Video-Produktion zusammenarbeiten? Schreib mir einfach eine Nachricht.
        </p>
      </div>

      <div className={styles.container}>
        <div className={styles.infoBox}>
          <h3>Kontaktinformationen</h3>
          <p>Ich antworte in der Regel innerhalb von 24–48 Stunden.</p>

          <div className={styles.infoItems}>
            <div className={styles.item}>
              <span className={styles.icon}>📍</span>
              <div>
                <strong>Standort</strong>
                <p>Schweiz / Remote</p>
              </div>
            </div>
            <div className={styles.item}>
              <span className={styles.icon}>💻</span>
              <div>
                <strong>Spezialisierung</strong>
                <p>Next.js, Clean Architecture &amp; Video Editing</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.formWrapper}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}