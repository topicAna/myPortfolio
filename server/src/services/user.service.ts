import { UserRepository } from '../repository/user.repository';
import { User } from 'src/models/user';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export class UserService {

    public static instance: UserService;
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
        // check if username and pass match those in database
        if (Object.values(checkUsersCredts).length === 0) {
            throw new Error('error user already regestered');
        } else {
            this.repository.insert(user);
        }
    }

    async getCurrentUser(user: User) {
        const userIdentif = user.identifiant;
        const userEmail = user.email;
        return await this.repository.findByIdentifiant( userIdentif, userEmail);
    }

    async verifyToken(req: Request, res: Response, next: any) {
        if (!req.headers.authorization) {
            return res.status(401).send('Unauthorized');
        }
        const token = req.headers.authorization.split(' ')[1];
        if (token === 'null') {
            return res.status(401).send('Unauthorized');
        } else {
            try {
                const payload = jwt.verify(token, 'someSecret');
                const results: any = await jwt.verify(token, 'someSecret');
                const user = await UserRepository.getInstance().findByIdentifiant(results.identifiant, results.email);
                req.user = {
                    ...user,
                    password: undefined,
                };
                next();
            } catch (err) {
                res.sendStatus(401);
            }
        }
    }
}
