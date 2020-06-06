import { ToolboxItem } from '../models/toolboxItem';
import { MysqlConnection } from '../loaders/mysql';

export class ToolboxItemRepository {

    private static instance: ToolboxItemRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'toolbox_item';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ToolboxItemRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find all ToolboxItems
    findAll(): Promise<ToolboxItem[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
        .then((results: any) => {
            return results.map((toolboxItem: any) => new ToolboxItem(toolboxItem));
        });
    }

    // Find ToolboxItem by Id

    findById(id: number): Promise<ToolboxItem> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
        .then((results: any) => new ToolboxItem(results[0]));
    }

    // findByProjectId (id: number): Promise <ToolboxItem> {
    //     return this.connection.query(TODO >> : finish this when DB is done)
    // }

    // Insert new ToolboxItem
    insert(toolboxItem: ToolboxItem) {
    return this.connection.query(
        `INSERT INTO ${this.table} (name, shortcut) VALUES (?,?)`,
        [toolboxItem.name, toolboxItem.shortcut],
    ).then((result: any) => {
        return this.findById(result.insertId);
    });
    }

    // Modify ToolboxItem
    update(toolboxItem: ToolboxItem) {
    return this.connection.query(
        `UPDATE ${this.table} SET name = ?, shortcut = ? WHERE id = ?`,
        [toolboxItem.name, toolboxItem.shortcut],
    ).then(() => {
        return this.findById(toolboxItem.id);
    });
    }

    // Delete ToolboxItem
    delete(id: number): Promise<any> {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}