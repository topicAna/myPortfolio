import { UserRepository } from '../repository/user.repository';
import { User } from 'src/models/user';
import { send } from 'process';
import { STATUS_CODES } from 'http';

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

    // getAdminByMail(email: string): Promise<User> {
    //     return this.repository.findAdminByMail(email);
    // }

    putAdmin(user: User): Promise<User> {
        return this.repository.insert(user);
    }

    async register(user: User) {
        const isThereUserInDatabase = await this.repository.findByIdentifiant(user.identifiant);
        console.log(isThereUserInDatabase, 'user before if');
        if (Object.values(isThereUserInDatabase).length !== 0) {
            console.log('didi i go in if')
            throw new Error('error user already regestered');
        }
        else {
            this.repository.insert(user);
        }
        // if (isThereUserInDatabase) {
        //     console.log(isThereUserInDatabase);
        //     throw new Error('Credientals invalid choose another name or email');
        // } else {
        //     return this.repository.insert(user);
        // }
    }

    // updateAdmin(admin: Admin): Promise<any> {
    //     return this.repository.updateAdmin(admin);
    // }

}
