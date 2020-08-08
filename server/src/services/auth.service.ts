import { AuthRepository } from '../repository/auth.repository';
import { Admin } from 'src/models/admin';

export class AuthService {

    private static instance: AuthService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new AuthService();
        }
        return this.instance;
    }

    private repository: AuthRepository;
    private constructor() {
        this.repository = AuthRepository.getInstance();
    }

    getAdmin(): Promise<Admin> {
        return this.repository.findAdmin();
    }

    getAdminByMail(email: string): Promise<Admin> {
        return this.repository.findAdminByMail(email);
    }

    putAdmin(admin: Admin): Promise<Admin> {
        return this.repository.insert(admin);
    }

    // updateAdmin(admin: Admin): Promise<any> {
    //     return this.repository.updateAdmin(admin);
    // }

}
