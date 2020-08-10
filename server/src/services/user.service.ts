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
        const isThereUserInDatabase = await this.repository.findByIdentifiant(user.identifiant);
        console.log(isThereUserInDatabase, 'user before if');
        // check is there record in database
        if (Object.values(isThereUserInDatabase).length !== 0) {
            console.log('didi i go in if')
            throw new Error('error user already regestered');
        } else {
            this.repository.insert(user);
        }
    }

}
