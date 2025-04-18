// components/LanguageSwitcher.tsx
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '@/styles/languageSwitcher.module.css'; // Optional für Styling

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, locales, asPath } = router;

  return (
    <div className={styles.switcher}>
      {locales?.map((lng) => (
        <Link
          key={lng}
          href={asPath}
          locale={lng}
          className={lng === locale ? styles.active : ''}
        >
          {lng.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
