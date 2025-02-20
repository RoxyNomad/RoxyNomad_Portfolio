import { useState } from "react";
import Head from "next/head";
import contactStyles from "@/styles/contact.module.css";
import emailjs from "emailjs-com"; // Importiere EmailJS

const Contact = () => {
  // State für Formulardaten
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Eingabewerte aktualisieren
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Formular senden (mit EmailJS)
  const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("sending");
	
		try {
			const response = await emailjs.send(
				"service_92r8txc", // Service-ID von EmailJS
				"template_c91k9rl", // Template-ID von EmailJS
				formData, // Die Formulardaten, die an das Template übergeben werden
				"WaiL_NoHkEDIqd3FQ" // Deine User-ID von EmailJS
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
        <form onSubmit={handleSubmit} className={contactStyles.formContainer}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ihr Name"
            className={contactStyles.input}
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ihre Email"
            className={contactStyles.input}
            required
          />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Ihre Telefonnummer"
            className={contactStyles.input}
          />
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Betreff"
            className={contactStyles.input}
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Ihre Nachricht"
            className={contactStyles.textarea}
            required
          ></textarea>
          <button
            type="submit"
            className={contactStyles.button}
            disabled={status === "sending"}
          >
            {status === "sending" ? "Senden..." : "Senden"}
          </button>

          {status === "success" && <p className={contactStyles.success}>Nachricht gesendet!</p>}
          {status === "error" && <p className={contactStyles.error}>Fehler beim Senden.</p>}
        </form>
      </main>
    </div>
  );
};

export default Contact;
