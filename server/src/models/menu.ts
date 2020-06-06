export class Menu {
    menu_type_id!: number;
    dish_id!: string;
    
    constructor(input: Menu) {
    Object.assign(this, input);
}
}