export class Menu_type {
    id!: number;
    name!: string;
    description!: string;
    photo!: string;
    price!:number;

    constructor(input: Menu_type) {
    Object.assign(this, input);
}
}