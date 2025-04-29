// src/adapters/components/Projects/Projects.tsx
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./Projects.module.css";
import { getProjectsQuery } from "@/application/queries/GetProjectsQuery";
import { Project } from "@/domain/projects/Project";

const techStackOptions = [
  "all",
  "Next.js",
  "React",
  "TailwindCSS",
  "Supabase",
  "Angular",
  "NestJS",
];

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedTech, setSelectedTech] = useState<string>("all");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      const filter = selectedTech === "all" ? undefined : selectedTech;
      const loadedProjects = await getProjectsQuery(filter);
      setProjects(loadedProjects);
      setLoading(false);
    };

    fetchProjects();
  }, [selectedTech]);

  return (
    <div id="projects" className={styles.projectsContainer}>
      <p className={styles.projectsTitle}>Projekte</p>

      {/* Filter & Sortierbereich */}
      <div className={styles.filterContainer}>
        <select
          value={selectedTech}
          onChange={(e) => setSelectedTech(e.target.value)}
          className={styles.select}
        >
          {techStackOptions.map((tech) => (
            <option key={tech} value={tech}>
              {tech}
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
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={3840}
                  height={2160}
                  className={styles.projectImage}
                />
              </Link>
              <p className={styles.projectDescription}>
                <strong>{project.name}</strong><br />
                {project.techStack.join(", ")}<br /><br />
                {project.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;
