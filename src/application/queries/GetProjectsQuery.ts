// src/application/queries/GetProjectsQuery.ts
import { Project } from "../../domain/projects/Project";
import { ProjectsRepository } from "@/infrastructure/cms/ProjectsRepository";  // NEU importieren


export const getProjectsQuery = async (filterOrientation?: string, sortByName?: boolean): Promise<Project[]> => {
  let projects = await fetchProjectsFromDatabase();  // Hier holst du die Projekte, z.B. aus einer DB

  if (filterOrientation && filterOrientation !== "all") {
    projects = projects.filter((project) =>
      project.orientation.toLowerCase() === filterOrientation.toLowerCase()
    );
  }


  if (sortByName) {
    projects = projects.sort((a, b) => a.name.localeCompare(b.name));
  }

  return projects;
};

const fetchProjectsFromDatabase = async (): Promise<Project[]> => {
  return await ProjectsRepository.getProjects();  // Aus der JSON-Datei holen!
};
