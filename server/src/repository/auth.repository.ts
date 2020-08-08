import { Admin } from '../models/admin';
import { MysqlConnection } from '../loaders/mysql';

export class AuthRepository {

    private static instance: AuthRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'admin';

    static getInstance() {
        if (!this.instance) {
            this.instance = new AuthRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find admin by ID
    findById(id: number): Promise<Admin> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
            .then((results: any) => new Admin(results[0]));
    }

    // Find all ToolboxItems
    findAdmin(): Promise<Admin> {
        return this.connection.query(`SELECT * from ${this.table}`)
            .then((results: any) => {
                return results.map((admin: any) => new Admin(admin));
            });
    }

    findAdminByMail(email: string) {
        return this.connection.query(`SELECT * from ${this.table} WHERE email =?`, [email])
            .then((results: any) => {
                return results.map((admin: any) => new Admin(admin));
            });
    }

    // updateAdmin() {
    //     console.log('function to be implemented')
    // }

    insert(admin: Admin) {
        return this.connection.query(
            `INSERT INTO ${this.table} (identifiant, password, intro, email, phone) VALUES (?,?,?,?,?)`,
            [admin.identifiant, admin.password, admin.intro, admin.email, admin.phone],
        ).then((result: any) => {
            return this.findById(result.insertId);
        });
    }
}
