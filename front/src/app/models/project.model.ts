export class Project {
    id!: number;
    name!: string;
    description!: string;
    youtubeLink!: string;
    githubLink!: string;

    constructor(input: Project) {
    Object.assign(this, input);
}
}
