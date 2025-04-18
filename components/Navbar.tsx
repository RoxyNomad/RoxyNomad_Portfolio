import Link from "next/link";
import styles from '@/styles/navbar.module.css';
import { useTranslation } from 'next-i18next';

const Navbar: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div>
      <nav className={styles.navbar}>
        <Link href='#about-me' className={styles.navbarTitleOne}>{t('nav.about')}</Link>
        <Link href='#projects' className={styles.navbarTitleTwo}>{t('nav.projects')}</Link>
        <Link href='#contact' className={styles.navbarTitleThree}>{t('nav.contact')}</Link>
      </nav>
    </div>
  );
};

export default Navbar;
