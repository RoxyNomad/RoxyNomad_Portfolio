import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/contactComponent.module.css';
import iconStyles from '@/styles/icons.module.css';
import { useTranslation } from 'next-i18next';

const Contact: React.FC = () => {
  const { t } = useTranslation('common');

  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.contactIconsOne}>
        <Link href='https://www.linkedin.com/in/roxynomad'>
          <Image src='/pictures/linkedin-icon.png' alt='LinkedIn Icon' width={100} height={100} className={iconStyles.linkedInIcon}/>
        </Link>
        <Link href='https://github.com/RoxyNomad'>
          <Image src='/pictures/github-icon.png' alt='GitHub Icon' width={100} height={100} className={iconStyles.githubIcon}/>
        </Link>
        <Link href='https://codepen.io/RoxyNomad'>
          <Image src='/pictures/codepen-icon.png' alt='CodePen Icon' width={100} height={100} className={iconStyles.codepenIcon}/>
        </Link>
        <Link href='https://wa.me/+41772831236' target='_blank'>
          <Image src='/pictures/whatsapp-icon.png' alt='WhatsApp Chat' width={100} height={100} className={iconStyles.whatsappIcon}/>
        </Link>
      </div>
      <div className={styles.contactDataContainer}>
        <div className={styles.contactDataSubContainer}>
          <p className={styles.contactTitle}>{t('contact.title')}</p>
          <p className={styles.contactData}>
            {t('contact.address.name')}<br />
            {t('contact.address.street')}<br />
            {t('contact.address.zip')}<br />
            {t('contact.address.country')}<br />
          </p>
          <p className={styles.contactMailTitle}>{t('contact.emailTitle')}</p>
          <Link className={styles.contactMail} href={`mailto:${t('contact.email')}`}>{t('contact.email')}</Link>
          <p className={styles.contactNumberTitle}>{t('contact.phoneTitle')}</p>
          <Link className={styles.contactNumber} href={`tel:${t('contact.phone')}`}>{t('contact.phone')}</Link>
          <p className={styles.contactFormularTitle}>
            {t('contact.formText')} <Link href="/contact" className={styles.contactFormularButton} target="_blank">{t('contact.formLink')}</Link>
          </p>
        </div>
      </div>
      <div className={iconStyles.contactIconsTwo}>
        <Link href='https://t.me/RoxyNomad' target='_blank'>
          <Image src='/pictures/telegram-icon.png' alt='Chat on Telegram' width={100} height={100} className={iconStyles.telegramIcon}/>
        </Link>
        <Link href='https://www.instagram.com/roxynomad_?igsh=bnpuejdmZ2RmOTVt'>
          <Image src='/pictures/instagram-icon.png' alt='Instagram Icon' width={100} height={100} className={iconStyles.instagramIcon}/>
        </Link>
        <Link href='https://www.youtube.com/channel/UCq8qe1Z7MuQo0QlRZ-mfpVg'>
          <Image src='/pictures/youtube-icon.png' alt='YouTube Icon' width={100} height={100} className={iconStyles.youtubeIcon}/>
        </Link>
        <Link href='https://discord.com/users/1195759676193775682'>
          <Image src='/pictures/discord-icon.png' alt='Discord Icon' width={100} height={100} className={iconStyles.discordIcon}/>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
