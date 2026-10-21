import { Project } from "./project.entity";

export interface IProjectRepository {
  findAll(): Promise<Project[]>;
  save(project: Project): Promise<void>;
}