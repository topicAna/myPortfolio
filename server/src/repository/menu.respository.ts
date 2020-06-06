import { Menu } from './../models/menu';
import { MysqlConnection } from './../loaders/mysql';


export class MenuRepository {

    private static instance: MenuRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'menu';

    static getInstance() {
        if (!this.instance) {
            this.instance = new MenuRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find all menu
    findAll(): Promise<Menu[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
        .then((results: any) => {
            return results.map((menu: Menu) => new Menu(menu));
        });
        console.log('results are')
    }

    // Find menu_type by Id

    findById(id: number): Promise<Menu> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
        .then((results: any) => new Menu(results[0]));
    }


    // Insert new menu type 
    insert(menu: Menu) {
    return this.connection.query(
        `INSERT INTO ${this.table} (menu_type_id, dish_id) VALUES (?,?)`,
        [menu.menu_type_id, menu.dish_id]
    ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
    });
    }

}
