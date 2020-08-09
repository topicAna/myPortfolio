import { UserRepository } from '../repository/user.repository';
import { User } from 'src/models/user';

export class UserService {

    private static instance: UserService;
    static getInstance() {
        if (!this.instance) {
            this.instance = new UserService();
        }
        return this.instance;
    }

    private repository: UserRepository;
    private constructor() {
        this.repository = UserRepository.getInstance();
    }

    getAdmin(): Promise<User> {
        return this.repository.findAdmin();
    }

    getAdminByMail(email: string): Promise<User> {
        return this.repository.findAdminByMail(email);
    }

    putAdmin(user: User): Promise<User> {
        return this.repository.insert(user);
    }

    // updateAdmin(admin: Admin): Promise<any> {
    //     return this.repository.updateAdmin(admin);
    // }

}
