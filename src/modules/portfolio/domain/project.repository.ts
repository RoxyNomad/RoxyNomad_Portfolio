import { Project } from "./project.entity";

export interface IProjectRepository {
  findAll(): Promise<Project[]>;
}