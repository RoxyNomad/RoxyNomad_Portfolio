import Image from "next/image";
import { ProjectDTO } from "../../domain/project.entity";
import styles from "./ProjectCard.module.scss";

interface ProjectCardProps {
  project: ProjectDTO;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const isVideo = project.category === "video";

  return (
    <article className={styles.card}>
      <div className={styles.mediaWrapper}>
        {isVideo && <span className={styles.videoBadge}>🎬 Video Project</span>}

        <Image
          src={project.imageSrc}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
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

        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.footer}>
          <span className={styles.highlight}>
            {project.architectureHighlight || project.role || (isVideo ? "Video / Editing" : "Web Development")}
          </span>
          {project.projectUrl && (
            <a
              href={project.projectUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
            >
              Ansehen →
            </a>
          )}
        </div>
      </div>
    </article>
  );
}