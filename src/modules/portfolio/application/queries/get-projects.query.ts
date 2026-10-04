export type FilterCategory = "all" | "web" | "video";

export interface GetProjectsQuery {
  category?: FilterCategory;
}