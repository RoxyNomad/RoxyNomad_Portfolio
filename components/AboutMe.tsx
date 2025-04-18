import { useTranslation } from 'next-i18next';
import styles from '@/styles/aboutMe.module.css';
import Image from 'next/image';

const AboutMe = () => {
  const { t } = useTranslation('common');

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
          <p className={styles.aboutMeSubtitle}>{t('aboutMe.intro')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.text1')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.text2')}</p>
          <p className={styles.aboutMeSubtitle}>{t('aboutMe.remote')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.remoteText')}</p>
          <p className={styles.aboutMeSubtitle}>{t('aboutMe.techStack')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.techStackText1')}</p>
					<p className={styles.aboutMeText}>{t('aboutMe.techStackText2')}</p>
					<p className={styles.aboutMeText}>{t('aboutMe.techStackText3')}</p>
					<p className={styles.aboutMeText}>{t('aboutMe.techStackText4')}</p>
          <p className={styles.aboutMeSubtitle}>{t('aboutMe.connect')}</p>
          <p className={styles.aboutMeText}>{t('aboutMe.connectText1')}</p>
					<p className={styles.aboutMeText}>{t('aboutMe.connectText2')}</p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
