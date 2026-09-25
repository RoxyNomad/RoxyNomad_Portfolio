import styles from "./ValuePropSection.module.scss";

interface Pillar {
  icon: string;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: "🏛️",
    title: "Clean Architecture & DDD",
    description:
      "Kein verstrickter Spaghetti-Code. Ich kapsele Business-Logik sauber in Bounded Contexts und nutze CQRS für wartbare, performante und skalierbare Systeme.",
  },
  {
    icon: "🎨",
    title: "Design & UX-Verständnis",
    description:
      "Code und Design aus einer Hand. Entwickelt mit Blick fürs Detail, ästhetische Typografie und nahtlose Interaktionen – von Figma bis zur Live-App.",
  },
  {
    icon: "🌍",
    title: "Remote & Autark",
    description:
      "Als digitale Nomadin aus der Schweiz verknüpfe ich Eigenverantwortung mit moderner Async-Kommunikation, effizienten Workflows und hoher Verlässlichkeit.",
  },
];

export function ValuePropSection() {
  return (
    <section className={styles.valueProp}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Warum RoxyNomad</p>
          <h2 className={styles.title}>Mehr als nur Frontend-Entwicklung</h2>
        </div>

        <div className={styles.grid}>
          {pillars.map((pillar) => (
            <article key={pillar.title} className={styles.card}>
              <span className={styles.icon}>{pillar.icon}</span>
              <h3 className={styles.cardTitle}>{pillar.title}</h3>
              <p className={styles.cardDescription}>{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}