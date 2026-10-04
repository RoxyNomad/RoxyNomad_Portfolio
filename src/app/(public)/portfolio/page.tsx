import { StaticProjectRepository } from "@/modules/portfolio/infrastructure/persistence/neon-project.repository";
import { GetProjectsQueryHandler } from "@/modules/portfolio/application/handlers/get-projects.handler";
import { PortfolioView } from "@/modules/portfolio/ui/PortfolioView";

export const metadata = {
  title: "Portfolio | RoxyNomad",
  description: "Ausgewählte Webprojekte mit CQRS/DDD sowie Video-Content von RoxyNomad.",
};

export default async function PortfolioPage() {
  // CQRS Read Side Resolution:
  const repository = new StaticProjectRepository();
  const queryHandler = new GetProjectsQueryHandler(repository);

  // Executing Query
  const projects = await queryHandler.execute({ category: "all" });

  return <PortfolioView initialProjects={projects} />;
}