import { ProjectDTO } from "../../domain/project.entity";
import { IProjectRepository } from "../../domain/project.repository";
import { GetProjectsQuery } from "../queries/get-projects.query";

export class GetProjectsQueryHandler {
  constructor(private readonly projectRepository: IProjectRepository) {}

  async execute(query: GetProjectsQuery = {}): Promise<ProjectDTO[]> {
    const allProjects = await this.projectRepository.findAll();

    const filtered = (!query.category || query.category === "all")
      ? allProjects
      : allProjects.filter((project) => project.category === query.category);

    // Map Entities zu Plain DTOs für Next.js RSC Boundary
    return filtered.map((project) => project.toDTO());
  }
}