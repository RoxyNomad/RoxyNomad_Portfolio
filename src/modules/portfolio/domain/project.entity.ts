export type ProjectCategory = "web" | "video";

export interface ProjectDTO {
  id: string;
  title: string;
  description: string;
  category: ProjectCategory;
  tags: string[];
  imageSrc: string;
  projectUrl?: string;
  architectureHighlight?: string;
  role?: string;
}

export class Project {
  constructor(private readonly props: ProjectDTO) {}

  get id(): string { return this.props.id; }
  get title(): string { return this.props.title; }
  get description(): string { return this.props.description; }
  get category(): ProjectCategory { return this.props.category; }
  get tags(): string[] { return this.props.tags; }
  get imageSrc(): string { return this.props.imageSrc; }
  get projectUrl(): string | undefined { return this.props.projectUrl; }
  get architectureHighlight(): string | undefined { return this.props.architectureHighlight; }
  get role(): string | undefined { return this.props.role; }

  public isWebProject(): boolean {
    return this.props.category === "web";
  }

  public isVideoProject(): boolean {
    return this.props.category === "video";
  }

	public toDTO(): ProjectDTO {
    return { ...this.props };
  }
}