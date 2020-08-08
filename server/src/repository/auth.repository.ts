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

    // Find all ToolboxItems
    findAdmin(): Promise<Admin> {
        return this.connection.query(`SELECT * from ${this.table}`)
        .then((results: any) => {
            return results.map((admin: any) => new Admin(admin));
        });
    }

    // updateAdmin() {
    //     console.log('function to be implemented')
    // }
}
