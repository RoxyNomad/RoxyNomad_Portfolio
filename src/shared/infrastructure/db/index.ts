import { neon } from "@neondatabase/serverless";
import { drizzle } from "drizzle-orm/neon-http";

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL ist nicht in den Umgebungsvariablen definiert.");
}

// Initialisiere den Serverless Neon Client
const sql = neon(databaseUrl);

// Erstelle die Drizzle ORM Instanz
export const db = drizzle(sql);