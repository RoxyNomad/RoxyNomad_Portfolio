// src/adapters/ui/components/Navbar/Navbar.tsx
import Link from "next/link";
import styles from './Navbar.module.css';
import { useTranslations } from 'next-intl';

const Navbar: React.FC = () => {
  const t = useTranslations('nav');

  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='#about-me' className={styles.navbarTitleOne}>{t('about')}</Link>
        <Link href='#projects' className={styles.navbarTitleTwo}>{t('projects')}</Link>
        <Link href='#contact' className={styles.navbarTitleThree}>{t('contact')}</Link>
      </nav>
    </div>
  );
};

export default Navbar;
