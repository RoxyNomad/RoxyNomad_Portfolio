import Image from "next/image";
import Link from "next/link";
import styles from "./FeaturedProjects.module.scss";

interface FeaturedProject {
  id: string;
  title: string;
  description: string;
  tags: string[];
  architectureHighlight: string;
  imageSrc: string;
  projectUrl: string;
}

const featuredProjects: FeaturedProject[] = [
  {
    id: "portfolio-app",
    title: "RoxyNomad Portfolio & Platform",
    description:
      "Modernes, hochperformantes Portfolio mit Next.js 15, App Router, SCSS Modules und einer reinen Trennung von Write/Read Side via CQRS.",
    tags: ["Next.js 15", "React 19", "TypeScript", "SCSS"],
    architectureHighlight: "DDD & CQRS Architecture",
    imageSrc: "/thumbnails/webdesign/portfolio-preview.jpg", // Passe deinen Pfad aus public/ an
    projectUrl: "/portfolio",
  },
  {
    id: "pw-manager",
    title: "Python Desktop Password Manager",
    description:
      "Lokaler und verschlüsselter Passwort-Manager mit angepasster Python-UI für maximale Privatsphäre und schnelle Key-Lookups.",
    tags: ["Python", "Cryptography", "Custom UI"],
    architectureHighlight: "Clean Code & Security First",
    imageSrc: "/thumbnails/webdesign/pwmanager-preview.jpg", // Passe deinen Pfad aus public/ an
    projectUrl: "/portfolio",
  },
];

export function FeaturedProjects() {
  return (
    <section className={styles.featured}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <p className={styles.subtitle}>Selected Works</p>
            <h2 className={styles.title}>Ausgewählte Projekte</h2>
          </div>
          <Link href="/portfolio" className={styles.allLink}>
            Alle Projekte ansehen →
          </Link>
        </div>

        <div className={styles.grid}>
          {featuredProjects.map((project) => (
            <article key={project.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
              </div>

              <div className={styles.content}>
                <div className={styles.tags}>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.description}>{project.description}</p>

                <div className={styles.cardFooter}>
                  <span className={styles.archBadge}>
                    🏛️ {project.architectureHighlight}
                  </span>
                  <Link href={project.projectUrl} className={styles.link}>
                    Details →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}