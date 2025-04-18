import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/projects.module.css';

const Projects: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div id="projects" className={styles.projectsContainer}>
      <p className={styles.projectsTitle}>{t('projects.title')}</p>
      <div className={styles.projectsSubContainer}>
        <div className={styles.projectContainer}>
          <Link href="https://galleryshop.vercel.app/">
            <Image
              src="/pictures/onlineShop.png"
              alt="Project 1"
              width={3840}
              height={2160}
              className={styles.projectImage}
            />
          </Link>
          <p className={styles.projectDescription}>
            <strong>{t('projects.project1.name')}</strong><br />
            {t('projects.project1.techStack1')}<br />
						{t('projects.project1.techStack2')}<br />
            <br />
            {t('projects.project1.description')}
          </p>
        </div>
        <div className={styles.projectContainer}>
          <Link href="https://eternal-ghosts.vercel.app/news">
            <Image
              src="/pictures/bandPage.png"
              alt="Project 2"
              width={3840}
              height={2160}
              className={styles.projectImage}
            />
          </Link>
          <p className={styles.projectDescription}>
            <strong>{t('projects.project2.name')}</strong><br />
            {t('projects.project2.techStack1')}<br />
						{t('projects.project2.techStack2')}<br />
            <br />
            {t('projects.project2.description')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
