// src/adapters/ui/components/ContactForm/ContactForm.tsx
import { useState } from "react";
import { ContactFormData } from "../../../../domain/contact/ContactForm";
import { sendContactForm } from "../../../../application/commands/sendContactForm";
import styles from "./ContactForm.module.css";
import { ValidationError } from "../../../../domain/errors/ContactFormErrors"; 

const ContactForm = () => {
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
        // Zeige validierungsfehler im UI
        console.log("Validierungsfehler:", err.details);
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
        placeholder="Ihr Name"
        className={styles.input}
        required
      />

      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Ihre E-Mail"
        className={styles.input}
        required
      />

      <input
        type="text"
        name="subject"
        value={formData.subject}
        onChange={handleChange}
        placeholder="Betreff"
        pattern="^[a-zA-Z0-9\s\-()]*$"
        className={styles.input}
        required
      />

      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
        placeholder="Nachricht"
        className={styles.textarea}
        required
      />

      <button
        type="submit"
        className={styles.button}
        disabled={status === "sending"}
      >
        {status === "sending" ? ("Senden...") : ("Senden")} {/* Dynamische Texte für Buttons */}
      </button>

      {status === "success" && <p className={styles.success}>Nachricht gesendet!</p>}
      {status === "error" && <p className={styles.error}>Fehler beim Senden.</p>}
    </form>
  );
};

export default ContactForm;
