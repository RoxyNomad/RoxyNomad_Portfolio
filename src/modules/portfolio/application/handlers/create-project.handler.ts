import { IProjectRepository } from "../../domain/project.repository";
import { Project, ProjectCategory } from "../../domain/project.entity";

export interface CreateProjectCommand {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageKey: string;
  projectUrl?: string;
  architectureHighlight?: string;
  role?: string;
}

export class CreateProjectCommandHandler {
  constructor(private readonly repository: IProjectRepository) {}

  async execute(command: CreateProjectCommand): Promise<void> {
    const project = new Project({
      id: command.id,
      title: command.title,
      description: command.description,
      category: command.category,
      tags: command.tags,
      imageSrc: command.imageKey, // Wird im Repo zu R2 Public URL gemappt
      projectUrl: command.projectUrl,
      architectureHighlight: command.architectureHighlight,
      role: command.role,
    });

    await this.repository.save(project);
  }
}