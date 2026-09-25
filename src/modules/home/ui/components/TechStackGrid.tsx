import styles from "./TechStackGrid.module.scss";

interface TechCategory {
  title: string;
  icon: string;
  items: { name: string; note: string }[];
}

const techCategories: TechCategory[] = [
  {
    title: "Frontend & Core",
    icon: "🌐",
    items: [
      { name: "Next.js 15", note: "App Router" },
      { name: "React 19", note: "Server Components" },
      { name: "TypeScript", note: "Strict Mode" },
      { name: "SCSS / Sass", note: "Modules & Theme" },
    ],
  },
  {
    title: "Backend & Data",
    icon: "⚙️",
    items: [
      { name: "Python", note: "Tools & Automation" },
      { name: "PostgreSQL / Neon", note: "Serverless DB" },
      { name: "Drizzle ORM", note: "Type-safe SQL" },
      { name: "Supabase", note: "Auth & Storage" },
    ],
  },
  {
    title: "Architecture & Design",
    icon: "🏛️",
    items: [
      { name: "DDD", note: "Bounded Contexts" },
      { name: "CQRS", note: "Read/Write Split" },
      { name: "Clean Code", note: "SOLID Principles" },
      { name: "Figma", note: "UI/UX Design" },
    ],
  },
];

export function TechStackGrid() {
  return (
    <section className={styles.techStack}>
      <div className="container">
        <div className={styles.header}>
          <p className={styles.subtitle}>Capabilities</p>
          <h2 className={styles.title}>Tech Stack &amp; Methoden</h2>
        </div>

        <div className={styles.grid}>
          {techCategories.map((category) => (
            <div key={category.title} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>
                <span>{category.icon}</span> {category.title}
              </h3>
              <div className={styles.itemList}>
                {category.items.map((item) => (
                  <div key={item.name} className={styles.item}>
                    <span className={styles.itemName}>{item.name}</span>
                    <span className={styles.itemNote}>{item.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}