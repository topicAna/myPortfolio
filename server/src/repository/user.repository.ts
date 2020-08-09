import { User } from '../models/user';
import { MysqlConnection } from '../loaders/mysql';

export class UserRepository {

    private static instance: UserRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'user';

    static getInstance() {
        if (!this.instance) {
            this.instance = new UserRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find admin by ID
    findById(id: number): Promise<User> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new User(results[0]));
    }

    // Find all ToolboxItems
    findAdmin(): Promise<User> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
                return results.map((user: any) => new User(user));
            });
    }

    findAdminByMail(email: string) {
        return this.connection.query(`SELECT * from ${this.table} WHERE email =?`, [email])
            .then((results: any) => {
                return results.map((user: any) => new User(user));
            });
    }

    // updateAdmin() {
    //     console.log('function to be implemented')
    // }

    insert(user: User) {
        return this.connection.query(
            `INSERT INTO ${this.table} (identifiant, password, intro, email, phone, priviledge) VALUES (?,?,?,?,?, ?)`,
            [user.identifiant, user.password, user.intro, user.email, user.phone, user.priviledge ],
        ).then((result: any) => {
            return this.findById(result.insertId);
        });
    }
}
