import { Menu_type } from './../models/menu_type';
import { MysqlConnection } from './../loaders/mysql';


export class Menu_typeRepository {

    private static instance: Menu_typeRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'menu_type';

    static getInstance() {
        if (!this.instance) {
            this.instance = new Menu_typeRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find all menu types
    findAll(): Promise<Menu_type[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
        .then((results: any) => {
            return results.map((menu_type: any) => new Menu_type(menu_type));
        });
    }

    // Find menu_type by Id

    findById(id: number): Promise<Menu_type> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
        .then((results: any) => new Menu_type(results[0]));
    }


    // Insert new menu type 
    insert(menu_type: Menu_type) {
    return this.connection.query(
        `INSERT INTO ${this.table} (name, description, photo, price) VALUES (?,?,?,?)`,
        [menu_type.name, menu_type.description, menu_type.photo, menu_type.price]
    ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
    });
    }


    // Modify product
    update(menu_type: Menu_type) {
    return this.connection.query(
        `UPDATE ${this.table} SET name = ?, description = ?, photo = ?, price = ? WHERE id = ?`,
        [menu_type.name, menu_type.description, menu_type.photo, menu_type.price, menu_type.id ]
    ).then(() => {
        return this.findById(menu_type.id);
    });
    }

    // Delete product
    delete(id: number): Promise<any> {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
