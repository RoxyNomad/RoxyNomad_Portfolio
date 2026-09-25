// src/adapters/ui/components/AboutMe/AboutMe.tsx
import styles from './AboutMe.module.css';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const AboutMe = () => {
  const t = useTranslations('aboutMe');

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
            {t('intro')}
          </p>
          <p className={styles.aboutMeText}>
            {t('text1')} <br />
            {t('text2')}
          </p>
          <p className={styles.aboutMeText}>
            {t('text3')} <br />
            {t('text4')}
          </p>
          <p className={styles.aboutMeSubtitle}>
            {t('skillsTitle')}
          </p>
          <p className={styles.aboutMeText}>
            {t('skill1')} <br />
            {t('skill2')} <br />
            {t('skill3')} <br />
            {t('skill4')} <br />
            {t('skill5')} <br />
            {t('skill6')} <br />
          </p>
          <p className={styles.aboutMeSubtitle}>
            {t('ctaTitle')}
          </p>
          <p className={styles.aboutMeText}>
            {t('ctaText')} <br />
            {t('ctaText2')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
