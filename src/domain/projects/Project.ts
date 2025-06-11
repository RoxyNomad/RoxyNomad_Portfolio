// src/domain/projects/Project.ts
export class Project {
  constructor(
		public id: number,
    public videoTitle: string,
    public imageUrl: string,
    public videoPath: string,
    public orientation: string = "all",
  ) {}
}
