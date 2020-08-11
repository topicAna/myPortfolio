import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';
import { User } from 'src/models/user';

export const UserController = (app: Application) => {

    const router: Router = express.Router();
    const userService = UserService.getInstance();

    // router.get('/', (req, res) => {

    // });

    router.post('/register', async (req, res) => {
        const userData: User = req.body;
        userService.register(userData).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(300).send('Credentials are already in database, please choose another email and/or identifiant');
        });
    });
    app.use('/auth', router);


    router.post('/login', async (req, res) => {
        const userData: User = req.body;
        userService.login(userData).then(result => {
            res.send(result);
        }).catch(err => {
            res.status(300).send('Wrong email and/or password');
        });
    });
    app.use('/auth', router);
};
