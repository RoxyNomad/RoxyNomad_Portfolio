"use client";

import { useState } from "react";
import { getPresignedR2UrlAction, createProjectAction, CreateProjectPayload } from "../../application/actions/admin.actions";

export function useProjectUpload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const uploadProject = async (formData: FormData, file?: File) => {
    setLoading(true);
    setError(null);

    try {
      let imageKey = "";

      if (file) {
        const { uploadUrl, fileKey } = await getPresignedR2UrlAction(file.name, file.type);

        const uploadRes = await fetch(uploadUrl, {
          method: "PUT",
          body: file,
          headers: { "Content-Type": file.type },
        });

        if (!uploadRes.ok) {
          throw new Error("Fehler beim Upload der Datei zu Cloudflare R2.");
        }

        imageKey = fileKey;
      }

      const payload: CreateProjectPayload = {
        title: formData.get("title") as string,
        description: formData.get("description") as string,
        category: formData.get("category") as "web" | "video",
        tags: (formData.get("tags") as string).split(",").map((t) => t.trim()).filter(Boolean),
        projectUrl: (formData.get("projectUrl") as string) || undefined,
        architectureHighlight: (formData.get("architectureHighlight") as string) || undefined,
      };

      await createProjectAction(payload, imageKey);

      return { success: true };
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Fehler beim Erstellen des Projekts.");
      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { uploadProject, loading, error };
}