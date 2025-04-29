// src/infrastructure/cms/ProjectsRepository.ts
import { Project } from "../../domain/projects/Project";
import projectsData from "./projects.json";

export class ProjectsRepository {
  static async getProjects(): Promise<Project[]> {
    return projectsData.map(
      (project) =>
        new Project(
					parseInt(project.id, 10),
          project.name,
          project.imageUrl,
          project.link,
          project.techStack,
          project.description
        )
    );
  }
}

