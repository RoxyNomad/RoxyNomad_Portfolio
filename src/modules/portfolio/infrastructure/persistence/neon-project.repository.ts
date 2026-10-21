import { db } from "@/shared/infrastructure/db"; // Der shared NeonDB Client bleibt global
import { projectsTable } from "./project.schema";
import { Project } from "../../domain/project.entity";
import { IProjectRepository } from "../../domain/project.repository";
import { getR2PublicUrl } from "../storage/r2.storage";

export class NeonProjectRepository implements IProjectRepository {
  async findAll(): Promise<Project[]> {
    const rows = await db.select().from(projectsTable);

    return rows.map(
      (row) =>
        new Project({
          id: row.id,
          title: row.title,
          description: row.description,
          category: row.category,
          tags: row.tags,
          imageSrc: getR2PublicUrl(row.imageKey),
          projectUrl: row.projectUrl ?? undefined,
          architectureHighlight: row.architectureHighlight ?? undefined,
          role: row.role ?? undefined,
        })
    );
  }

  async save(project: Project): Promise<void> {
    await db.insert(projectsTable).values({
      id: project.id,
      title: project.title,
      description: project.description,
      category: project.category,
      tags: project.tags,
      imageKey: project.imageSrc,
      projectUrl: project.projectUrl ?? null,
      architectureHighlight: project.architectureHighlight ?? null,
      role: project.role ?? null,
    });
  }
}