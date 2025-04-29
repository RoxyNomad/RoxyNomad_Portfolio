// src/adapters/ui/components/ContactComponent/ContactComponent.tsx
import Image from "next/image";
import Link from "next/link";
import styles from './ContactComponent.module.css';
import iconStyles from './ContactComponentIcons.module.css';
import { ContactInfo } from "@/domain/contact/ContactComponent";

interface ContactComponentProps {
  contactInfo: ContactInfo;
}

const ContactComponent: React.FC<ContactComponentProps> = ({ contactInfo }) => {
  return (
    <div id="contact" className={styles.footerContainer}>
      <div className={styles.contactIconsOne}>
        <Link href={contactInfo.links.linkedin}>
          <Image src='/pictures/linkedin-icon.png' alt='LinkedIn Icon' width={100} height={100} className={iconStyles.linkedInIcon} />
        </Link>
        <Link href={contactInfo.links.github}>
          <Image src='/pictures/github-icon.png' alt='GitHub Icon' width={100} height={100} className={iconStyles.githubIcon} />
        </Link>
        <Link href={contactInfo.links.codepen}>
          <Image src='/pictures/codepen-icon.png' alt='CodePen Icon' width={100} height={100} className={iconStyles.codepenIcon} />
        </Link>
        <Link href={contactInfo.links.whatsapp} target='_blank'>
          <Image src='/pictures/whatsapp-icon.png' alt='WhatsApp Chat' width={100} height={100} className={iconStyles.whatsappIcon} />
        </Link>
      </div>

      <div className={styles.contactDataContainer}>
        <div className={styles.contactDataSubContainer}>
          <p className={styles.contactTitle}>Meine Kontaktdaten</p>
          <p className={styles.contactData}>
            {contactInfo.name}<br />
            {contactInfo.address}<br />
            {contactInfo.country}<br />
          </p>
          <p className={styles.contactMailTitle}>Schreib mir eine Mail:</p>
          <Link className={styles.contactMail} href={`mailto:${contactInfo.email}`}>{contactInfo.email}</Link>
          <p className={styles.contactNumberTitle}>Ruf mich an:</p>
          <Link className={styles.contactNumber} href={`tel:${contactInfo.phone}`}>{contactInfo.phone}</Link>
          <p className={styles.contactFormularTitle}>
            Hier gehts zum: <Link href="/contact" className={styles.contactFormularButton} target="_blank">Kontaktformular</Link>
          </p>
        </div>
      </div>

      <div className={iconStyles.contactIconsTwo}>
        <Link href={contactInfo.links.telegram} target='_blank'>
          <Image src='/pictures/telegram-icon.png' alt='Chat on Telegram' width={100} height={100} className={iconStyles.telegramIcon} />
        </Link>
        <Link href={contactInfo.links.instagram}>
          <Image src='/pictures/instagram-icon.png' alt='Instagram Icon' width={100} height={100} className={iconStyles.instagramIcon} />
        </Link>
        <Link href={contactInfo.links.youtube}>
          <Image src='/pictures/youtube-icon.png' alt='YouTube Icon' width={100} height={100} className={iconStyles.youtubeIcon} />
        </Link>
        <Link href={contactInfo.links.discord}>
          <Image src='/pictures/discord-icon.png' alt='Discord Icon' width={100} height={100} className={iconStyles.discordIcon} />
        </Link>
      </div>
    </div>
  );
};

export default ContactComponent;
