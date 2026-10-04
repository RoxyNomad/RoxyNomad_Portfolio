import { pgTable, text, varchar, timestamp } from "drizzle-orm/pg-core";

export const projectsTable = pgTable("portfolio_projects", {
  id: varchar("id", { length: 255 }).primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  description: text("description").notNull(),
  category: varchar("category", { length: 50 }).$type<"web" | "video">().notNull(),
  tags: text("tags").array().notNull(),
  imageKey: text("image_key").notNull(),
  projectUrl: text("project_url"),
  architectureHighlight: text("architecture_highlight"),
  role: text("role"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export type ProjectRow = typeof projectsTable.$inferSelect;