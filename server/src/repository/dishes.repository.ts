import { Dishes } from '../models/dishes';
import { MysqlConnection } from './../loaders/mysql';


export class DishesRepository {

    private static instance: DishesRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'dishes';

    static getInstance() {
        if (!this.instance) {
            this.instance = new DishesRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find all dishes
    findAll(): Promise<Dishes[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
        .then((results: any) => {
            return results.map((dishes: any) => new Dishes(dishes));
        });
    }

    // Find menu_type by Id

    findById(id: number): Promise<Dishes> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
        .then((results: any) => new Dishes(results[0]));
    }


    // Insert new dish 
    insert(dishes: Dishes) {
    return this.connection.query(
        `INSERT INTO ${this.table} (name, description, photo, price) VALUES (?,?,?,?)`,
        [dishes.name, dishes.description]
    ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
    });
    }


    // Modify dishes
    update(dishes: Dishes) {
    return this.connection.query(
        `UPDATE ${this.table} SET name = ?, description = ? WHERE id = ?`,
        [dishes.name, dishes.description]
    ).then(() => {
        return this.findById(dishes.id);
    });
    }

    // Delete dishes
    delete(id: number): Promise<any> {
    return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
