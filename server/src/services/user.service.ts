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

    async register(user: User) {
        const isThereUserInDatabase = await this.repository.findByIdentifiant(user.identifiant, user.email);
        // check is there record in database
        if (Object.values(isThereUserInDatabase).length !== 0) {
            throw new Error('error user already regestered');
        } else {
            this.repository.insert(user);
        }
    }

    async login(user: User) {
        const checkUsersCredts = await this.repository.checkUsersCredts(user);
        console.log(checkUsersCredts, 'user before if');
        // check if username and pass match those in database
        if (Object.values(checkUsersCredts).length === 0) {
            throw new Error('error user already regestered');
        } else {
            this.repository.insert(user);
        }
    }
}
