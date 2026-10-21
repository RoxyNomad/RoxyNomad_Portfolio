"use client";

import { useState, useRef } from "react";
import { sendContactFormAction } from "../application/actions/contact.actions";
import styles from "./ContactForm.module.scss";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setFeedback(null);

    const formData = new FormData(e.currentTarget);
    const result = await sendContactFormAction(formData);

    setLoading(false);

    if (result.success) {
      setFeedback({ type: "success", text: "Vielen Dank! Deine Nachricht wurde erfolgreich gesendet." });
      formRef.current?.reset();
    } else {
      setFeedback({ type: "error", text: result.error || "Etwas ist schiefgelaufen." });
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.contactForm}>
      <h2>Nachricht senden</h2>

      {feedback && (
        <div className={feedback.type === "success" ? styles.successAlert : styles.errorAlert}>
          {feedback.text}
        </div>
      )}

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor="name">Name *</label>
          <input type="text" id="name" name="name" placeholder="Dein Name" required />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">E-Mail *</label>
          <input type="email" id="email" name="email" placeholder="deine@email.com" required />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Betreff</label>
        <input type="text" id="subject" name="subject" placeholder="Worum geht es?" />
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Nachricht *</label>
        <textarea id="message" name="message" placeholder="Deine Nachricht an mich..." required />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Wird gesendet..." : "Nachricht abschicken →"}
      </button>
    </form>
  );
}