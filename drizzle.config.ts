import { defineConfig } from "drizzle-kit";
import * as dotenv from "dotenv";

// Lädt .env.local für lokale Drizzle CLI Befehle
dotenv.config({ path: ".env.local" });

export default defineConfig({
  // Genial für DDD: Sucht automatisch nach allen *.schema.ts Dateien in jedem Modul
  schema: "./src/modules/**/infrastructure/persistence/*.schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
});