export interface ContactMessageProps {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export class ContactMessage {
  readonly name: string;
  readonly email: string;
  readonly subject: string;
  readonly message: string;

  constructor(props: ContactMessageProps) {
    if (!props.name || props.name.trim().length < 2) {
      throw new Error("Bitte gib deinen Namen ein.");
    }
    if (!props.email || !this.validateEmail(props.email)) {
      throw new Error("Bitte gib eine gültige E-Mail-Adresse ein.");
    }
    if (!props.message || props.message.trim().length < 10) {
      throw new Error("Die Nachricht sollte mindestens 10 Zeichen lang sein.");
    }

    this.name = props.name.trim();
    this.email = props.email.trim();
    this.subject = props.subject?.trim() || "Neue Kontaktanfrage";
    this.message = props.message.trim();
  }

  private validateEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
}