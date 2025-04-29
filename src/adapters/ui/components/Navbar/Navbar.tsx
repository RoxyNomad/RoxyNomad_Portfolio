// src/adapters/ui/components/Navbar/Navbar.tsx
import Link from "next/link";
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {

  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='#about-me' className={styles.navbarTitleOne}>Über mich</Link>
        <Link href='#projects' className={styles.navbarTitleTwo}>Projekte</Link>
        <Link href='#contact' className={styles.navbarTitleThree}>Kontakt</Link>
      </nav>
    </div>
  );
};

export default Navbar;
