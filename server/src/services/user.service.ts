import { UserRepository } from '../repository/user.repository';
import { User } from 'src/models/user';
import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export class UserService {
    private secret = process.env.JWT_SECRET ? process.env.JWT_SECRET : '';

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
        const isThereUserInDatabase = await this.repository.findByIdentifiant(user.identifiant);
        // check is there record in database
        if (Object.values(isThereUserInDatabase).length !== 0) {
            throw new Error('error user already regestered');
        }
        const saltRounds = 10;
        user.password = await bcrypt.hash(user.password, saltRounds, (err, hash) => {
            user.password = hash;
            return this.repository.insert(user);
        });
    }

    async login(user: User) {
        // check is there is user in database and if is return that user
        const isThereUserInDatabase = await this.repository.findByIdentifiant(user.identifiant);
        if (!isThereUserInDatabase) {
            throw new Error('Invalid credientals');
        }
        // check if the hashed password is ok
        const isValidPass = await bcrypt.compare(user.password, isThereUserInDatabase.password);
        if (!isValidPass) {
            throw new Error('Check your password');
        }
        // if credientals are ok assing token to the user
        if (isValidPass) {
            return { user };
        }
    }

    async getCurrentUser(user: User) {
        const userIdentif = user.identifiant;
        const userEmail = user.email;
        return await this.repository.findByIdentifiant(userIdentif);
    }

    async verifyToken(req: Request, res: Response, next: any) {
        if (req.headers.authorization === undefined) {
            return res.status(401).send('Unauthorized');
        } else {
            const token = req.headers.authorization.split(' ')[1];
            if (token === 'null') {
                return res.status(401).send('Unauthorized');
            } else {
                try {
                    const secret: string = process.env.SECRET ? process.env.SECRET : '';
                    const payload: any = await jwt.verify(token, secret);
                    const user = await UserRepository.getInstance().findByIdentifiant(payload.identifiant);
                    req.user = {
                        ...user,
                        password: undefined,
                    };
                    next();
                } catch (err) {
                    console.log(err);
                }
            }
        }
    }
}
