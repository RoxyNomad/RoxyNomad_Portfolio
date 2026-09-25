// src/adapters/components/Projects/Projects.tsx
import { useEffect, useState } from "react";
import styles from "./Projects.module.css";
import { getProjectsQuery } from "@/application/queries/GetProjectsQuery";
import { Project } from "@/domain/projects/Project";
import { useTranslations } from 'next-intl';

const Projects: React.FC = () => {
  const t = useTranslations('projects');
  const [projects, setProjects] = useState<Project[]>([]);
  const [orientation, setOrientation] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);

  const orientationOptions = [
    { label: t('filterAll'), value: "all" },
    { label: t('filterHorizontal'), value: "horizontal" },
    { label: t('filterVertical'), value: "vertical" },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const filter = orientation === "all" ? undefined : orientation;
      const loadedProjects = await getProjectsQuery(filter);
      setProjects(loadedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, [orientation]);

  return (
    <div id="projects" className={styles.projectsContainer}>
      <p className={styles.projectsTitle}>{t('title')}</p>

      {/* Filter & Sortierbereich */}
      <div className={styles.filterContainer}>
        <select
          value={orientation}
          onChange={(e) => setOrientation(e.target.value)}
          className={styles.select}
        >
          {orientationOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Loading Animation */}
      {loading ? (
        <div className={styles.spinnerContainer}>
          <div className={styles.spinner}></div>
        </div>
      ) : (
        <div className={styles.projectsSubContainer}>
          {projects.map((project) => (
            <div key={project.id} className={styles.projectContainer}>
              <p className={styles.projectDescription}>
                <strong>{project.name}</strong><br />
              </p>
              <video controls poster={project.imageUrl} className={styles.projectVideo}>
                <source src={project.link} type="video/mp4" />
              </video>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
