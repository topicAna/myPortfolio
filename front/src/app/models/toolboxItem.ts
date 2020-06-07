export class ToolboxItem {
    id!: number;
    name!: string;
    shortcut!: string;

    constructor(input: ToolboxItem) {
    Object.assign(this, input);
}
}
