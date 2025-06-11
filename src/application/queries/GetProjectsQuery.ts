// src/application/queries/GetProjectsQuery.ts
import { Project } from "../../domain/projects/Project";
import { ProjectsRepository } from "@/infrastructure/cms/ProjectsRepository";  // NEU importieren


export const getProjectsQuery = async (filterOrientation?: string, sortByName?: boolean): Promise<Project[]> => {
  let projects = await fetchProjectsFromDatabase();  // Hier holst du die Projekte, z.B. aus einer DB

  if (filterOrientation) {
    projects = projects.filter((project) =>
      project.orientation.toLowerCase().includes(filterOrientation.toLowerCase())
    );
  }

  if (sortByName) {
    projects = projects.sort((a, b) => a.videoTitle.localeCompare(b.videoTitle));
  }

  return projects;
};

const fetchProjectsFromDatabase = async (): Promise<Project[]> => {
  return await ProjectsRepository.getProjects();  // Aus der JSON-Datei holen!
};
