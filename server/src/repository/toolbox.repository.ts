import { ToolboxItem } from '../models/toolboxItem';
import { MysqlConnection } from '../loaders/mysql';

export class ToolboxRepository {

    private static instance: ToolboxRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'toolbox';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ToolboxRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find Toolbox by projectId

    findByProjectsId(projectId: number): Promise<ToolboxItem> {
        return this.connection.query(`select distinct p.id, ti.name, sortcut, master_level from projects p join toolbox t on p.id = t.projects_id join toolbox_item ti on ti.id = t.toolbox_item_id where t.projects_id=${projectId};`, [projectId])
        .then((results: any) => new ToolboxItem (results));
    }

    // Insert new ToolboxItem
    // insert(toolboxItem: ToolboxItem) {
    // return this.connection.query(
    //     `INSERT INTO ${this.table} (name, shortcut, master_level) VALUES (?,?,?)`,
    //     [toolboxItem.name, toolboxItem.shortcut, toolboxItem.masterLevel],
    // ).then((result: any) => {
    //     return this.findById(result.insertId);
    // });
    // }

    // Modify ToolboxItem
    // update(toolboxItem: ToolboxItem) {
    // return this.connection.query(
    //     `UPDATE ${this.table} SET name = ?, shortcut = ?, master_level = ? WHERE id = ?`,
    //     [toolboxItem.name, toolboxItem.shortcut, toolboxItem.masterLevel],
    // ).then(() => {
    //     return this.findById(toolboxItem.id);
    // });
    // }

    // Delete ToolboxItem
    // delete(id: number): Promise<any> {
    // return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    // }
}
