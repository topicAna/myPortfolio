export class Dishes {
    id!: number;
    name!: string;
    description!: string;
    alergens!: string;
    constructor(input: Dishes) {
    Object.assign(this, input);
}
}