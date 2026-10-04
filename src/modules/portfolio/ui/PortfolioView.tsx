"use client";

import { useState } from "react";
import { ProjectDTO } from "../domain/project.entity";
import { FilterCategory } from "../application/queries/get-projects.query";
import { ProjectCard } from "./components/ProjectCard";
import styles from "./PortfolioView.module.scss";

interface PortfolioViewProps {
  initialProjects: ProjectDTO[];
}

export function PortfolioView({ initialProjects }: PortfolioViewProps) {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredProjects = initialProjects.filter((project) => {
    if (activeCategory === "all") return true;
    return project.category === activeCategory;
  });

  const webCount = initialProjects.filter((p) => p.category === "web").length;
  const videoCount = initialProjects.filter((p) => p.category === "video").length;

  return (
    <div className={styles.portfolioPage}>
      <div className="container">
        <header className={styles.header}>
          <p className={styles.subtitle}>Selected Works</p>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.description}>
            Entdecke meine Web-Entwicklungen mit solider Architektur sowie meine visuellen Videoprojekte.
          </p>
        </header>

        <div className={styles.filterContainer}>
          <button
            className={`${styles.filterBtn} ${activeCategory === "all" ? styles.active : ""}`}
            onClick={() => setActiveCategory("all")}
          >
            Alle ({initialProjects.length})
          </button>
          <button
            className={`${styles.filterBtn} ${activeCategory === "web" ? styles.active : ""}`}
            onClick={() => setActiveCategory("web")}
          >
            💻 Web &amp; Code ({webCount})
          </button>
          <button
            className={`${styles.filterBtn} ${activeCategory === "video" ? styles.active : ""}`}
            onClick={() => setActiveCategory("video")}
          >
            🎬 Video &amp; Content ({videoCount})
          </button>
        </div>

        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}