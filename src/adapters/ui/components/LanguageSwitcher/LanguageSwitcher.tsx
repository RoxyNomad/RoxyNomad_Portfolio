// src/adapters/ui/components/LanguageSwitcher/LanguageSwitcher.tsx
import clsx from 'clsx';
import { useRouter } from 'next/router';
import styles from './LanguageSwitcher.module.css';

const LanguageSwitcher = () => {
  const router = useRouter();
  const { locale, asPath } = router;

  const changeLanguage = (newLocale: string) => {
    router.push(asPath, asPath, { locale: newLocale });
  };

  return (
    <div className={styles.switcher}>
      <button
        onClick={() => changeLanguage('de')}
        className={clsx(styles.button, {
          [styles.active]: locale === 'de',
          [styles.inactive]: locale !== 'de',
        })}
      >
        DE
      </button>
      <button
        onClick={() => changeLanguage('en')}
        className={clsx(styles.button, {
          [styles.active]: locale === 'en',
          [styles.inactive]: locale !== 'en',
        })}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
