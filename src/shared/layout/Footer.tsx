import Link from "next/link";
import styles from "./Footer.module.scss";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topSection}>
          {/* Brand & Mission */}
          <div className={styles.brandColumn}>
            <Link href="/" className={styles.logo}>
              Roxy<span className={styles.highlight}>Nomad</span>
            </Link>
            <p className={styles.tagline}>
              Webentwicklung, UI/UX Design &amp; Clean Architecture (DDD &amp; CQRS) aus der Schweiz.
            </p>
          </div>

          {/* Navigation */}
          <div className={styles.navColumn}>
            <h4 className={styles.title}>Navigation</h4>
            <ul className={styles.list}>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">Über mich</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/contact">Kontakt</Link></li>
            </ul>
          </div>

          {/* Socials / Connect */}
          <div className={styles.navColumn}>
            <h4 className={styles.title}>Connect</h4>
            <ul className={styles.list}>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                  Instagram / Nomad ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Rechtliches */}
          <div className={styles.navColumn}>
            <h4 className={styles.title}>Rechtliches</h4>
            <ul className={styles.list}>
              <li><Link href="/impressum">Impressum</Link></li>
              <li><Link href="/datenschutz">Datenschutz</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomSection}>
          <p className={styles.copyright}>
            © {currentYear} RoxyNomad. Alle Rechte vorbehalten.
          </p>
          <span className={styles.location}>
            📍 Schweiz &amp; Remote weltweit
          </span>
        </div>
      </div>
    </footer>
  );
}