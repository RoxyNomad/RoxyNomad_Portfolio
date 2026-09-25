// src/adapters/ui/components/ContactForm/ContactForm.tsx
import { useState } from "react";
import { ContactFormData } from "../../../../domain/contact/ContactForm";
import { sendContactForm } from "../../../../application/commands/sendContactForm";
import styles from "./ContactForm.module.css";
import { ValidationError } from "../../../../domain/errors/ContactFormErrors";
import { useTranslations } from 'next-intl';

const ContactForm = () => {
  const t = useTranslations('contactForm');
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await sendContactForm(formData);
      setStatus("success");
    } catch (err) {
      if (err instanceof ValidationError) {
        console.log("Validation errors:", err.details);
      } else {
        setStatus("error");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formContainer}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder={t('namePlaceholder')}
        className={styles.input}
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder={t('emailPlaceholder')}
        className={styles.input}
        required
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder={t('subjectPlaceholder')}
        pattern="^[a-zA-Z0-9\s\-()]*$"
        className={styles.input}
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder={t('messagePlaceholder')}
        className={styles.textarea}
        required
      />

      <button
        type="submit"
        className={styles.button}
        disabled={status === "sending"}
      >
        {status === "sending" ? t('buttonSending') : t('buttonSend')}
      </button>

      {status === "success" && <p className={styles.success}>{t('successMessage')}</p>}
      {status === "error" && <p className={styles.error}>{t('errorMessage')}</p>}
    </form>
  );
};

export default ContactForm;
