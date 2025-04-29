// src/adapters/controllers/ProjectController.ts
import { getProjectsQuery } from "../../application/queries/GetProjectsQuery";
import { Project } from "../../domain/projects/Project";

export class ProjectsController {
  static async getProjects(filterTechStack?: string, sortByName?: boolean): Promise<Project[]> {
    return await getProjectsQuery(filterTechStack, sortByName);  // Hier wird nur die Filterlogik angewendet
  }
}
