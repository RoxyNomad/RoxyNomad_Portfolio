"use client";

import { useRef } from "react";
import { useProjectUpload } from "../hooks/useProjectUpload";
import styles from "./Admin.module.scss";

export function ProjectUploadForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const { uploadProject, loading, error } = useProjectUpload();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const file = (form.elements.namedItem("mediaFile") as HTMLInputElement).files?.[0];

    const result = await uploadProject(formData, file);

    if (result.success) {
      alert("Projekt erfolgreich erstellt!");
      formRef.current?.reset();
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.adminForm}>
      <h2>Neues Projekt / Video erstellen</h2>

      {error && <div className={styles.errorMessage}>{error}</div>}

      <input name="title" placeholder="Projekt Titel" required />
      <textarea name="description" placeholder="Beschreibung" required />

      <select name="category" required>
        <option value="web">💻 Web &amp; Code</option>
        <option value="video">🎬 Video &amp; Content</option>
      </select>

      <input name="tags" placeholder="Tags (kommagetrennt, z.B. Python, CustomTkinter, R2)" />
      <input name="architectureHighlight" placeholder="Architektur Highlight (z.B. Clean Architecture)" />
      <input name="projectUrl" placeholder="GitHub oder Live Link" />

      <div className={styles.fileField}>
        <label>Thumbnail / Demo-Video hochladen (Cloudflare R2):</label>
        <input type="file" name="mediaFile" accept="image/*,video/*" required />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Lädt hoch..." : "Projekt Speichern"}
      </button>
    </form>
  );
}