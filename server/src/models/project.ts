export class Project {
    id!: number;
    name!: string;
    description!: string;
    youtubeLink!: string;
    gitHubLink!: number;

    constructor(input: Project) {
      Object.assign(this, input);
  }
  }