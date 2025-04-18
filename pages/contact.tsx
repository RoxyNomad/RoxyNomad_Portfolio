import { useState } from "react";
import Head from "next/head";
import contactStyles from "@/styles/contactPage.module.css";
import emailjs from "emailjs-com";
import { useTranslation } from "next-i18next";
import { GetStaticProps } from 'next';
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "de", ["common"])),
    },
  };
};

const ContactForm = () => {
  const { t } = useTranslation('common');

  const [formData, setFormData] = useState({
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
      const response = await emailjs.send(
        "service_92r8txc",
        "template_c91k9rl",
        formData,
        "WaiL_NoHkEDIqd3FQ"
      );

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Fehler beim Senden:", error);
      setStatus("error");
    }
  };
  

  return (
    <div>
      <Head>
        <title>RoxyNomad Contact</title>
      </Head>
      <main>
        <LanguageSwitcher />
        <form onSubmit={handleSubmit} className={contactStyles.formContainer}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("contactForm.namePlaceholder")}
            className={contactStyles.input}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("contactForm.emailPlaceholder")}
            className={contactStyles.input}
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("contactForm.phonePlaceholder")}
            className={contactStyles.input}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder={t("contactForm.subjectPlaceholder")}
            className={contactStyles.input}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={t("contactForm.messagePlaceholder")}
            className={contactStyles.textarea}
            required
          ></textarea>
          <button
            type="submit"
            className={contactStyles.button}
            disabled={status === "sending"}
          >
            {status === "sending" ? t("contactForm.buttonSending") : t("contactForm.buttonSend")}
          </button>

          {status === "success" && <p className={contactStyles.success}>{t("contactForm.successMessage")}</p>}
          {status === "error" && <p className={contactStyles.error}>{t("contactForm.errorMessage")}</p>}
        </form>
      </main>
    </div>
  );
};

export default ContactForm;
