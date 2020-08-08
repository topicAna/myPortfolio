export class Admin {
    id!: number;
    identifiant!: string;
    password!: string;
    intro!: string;
    email!: string;
    phone!: string;

    constructor(input: Admin) {
        Object.assign(this, input);
    }
}
