import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";
import * as dotenv from "dotenv";
import { projectsTable } from "@/modules/portfolio/infrastructure/persistence/project.schema";

dotenv.config({ path: ".env.local" });

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL ist nicht gesetzt!");
}

const sql = neon(databaseUrl);
const db = drizzle(sql);

async function seed() {
  console.log("🌱 Starte Datenbank-Seeding für NeonDB...");

  const initialProjects = [
    {
      id: "project-1",
      title: "Roxynomad Portfolio & Blog",
      description: "Eine High-Performance Webanwendung mit CQRS, DDD und Next.js App Router.",
      category: "web" as const,
      tags: ["Next.js", "TypeScript", "DDD", "CQRS", "NeonDB"],
      imageKey: "portfolio/web-project-1.jpg", // Pfad in deinem R2 Bucket
      projectUrl: "https://roxynomad.com",
      architectureHighlight: "Hexagonale Architektur mit Clean Domain Model",
      role: "Lead Architect & Fullstack Developer",
    },
    {
      id: "project-2",
      title: "Cinematic Showreel 2026",
      description: "Color Grading und Videoschnitt für ein internationales Outdoor-Reise-Showreel.",
      category: "video" as const,
      tags: ["DaVinci Resolve", "Color Grading", "Video Editing", "4K"],
      imageKey: "portfolio/showreel-thumb.jpg", // Thumbnail in R2
      projectUrl: "https://pub-82940be5ed31427faae92e4c590386f2.r2.dev/videos/showreel.mp4",
      architectureHighlight: "4K ProRes Delivery & Cloudflare R2 Streaming",
      role: "Director, Video Editor & Colorist",
    },
  ];

  try {
    console.log("🧹 Lösche alte Eintragsdaten...");
    await db.delete(projectsTable);

    console.log("➕ Füge neue Portfolio-Projekte ein...");
    await db.insert(projectsTable).values(initialProjects);

    console.log("✅ Seeding erfolgreich abgeschlossen!");
  } catch (error) {
    console.error("❌ Fehler beim Seeding:", error);
    process.exit(1);
  }
}

seed();