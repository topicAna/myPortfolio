export class Bio {
    id!: number;
    intro!: string;
    interests!: string;
    constructor(input: Bio) {
        Object.assign(this, input);
    }
}
