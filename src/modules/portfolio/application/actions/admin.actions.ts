"use server";

import { generateR2UploadUrl } from "@/modules/portfolio/infrastructure/storage/r2-upload.service";
import { NeonProjectRepository } from "@/modules/portfolio/infrastructure/persistence/neon-project.repository";
import { CreateProjectCommandHandler } from "@/modules/portfolio/application/handlers/create-project.handler";

export interface CreateProjectPayload {
  title: string;
  description: string;
  category: "web" | "video";
  tags: string[];
  projectUrl?: string;
  architectureHighlight?: string;
}

export async function getPresignedR2UrlAction(filename: string, contentType: string) {
  return await generateR2UploadUrl(filename, contentType);
}

export async function createProjectAction(payload: CreateProjectPayload, imageKey: string) {
  const repository = new NeonProjectRepository();
  const commandHandler = new CreateProjectCommandHandler(repository);

  await commandHandler.execute({
    id: `proj-${Date.now()}`,
    title: payload.title,
    description: payload.description,
    category: payload.category,
    tags: payload.tags,
    imageKey: imageKey,
    projectUrl: payload.projectUrl,
    architectureHighlight: payload.architectureHighlight,
  });

  return { success: true };
}