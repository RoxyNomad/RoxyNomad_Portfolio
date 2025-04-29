// src/domain/projects/Project.ts
export class Project {
  constructor(
		public id: number,
    public name: string,
    public imageUrl: string,
    public link: string,
    public techStack: string[],
    public description: string
  ) {}
}
