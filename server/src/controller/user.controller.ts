import express, { Router, Request, Response, Application } from 'express';
import { UserService } from '../services/user.service';
import { User } from 'src/models/user';

export const UserController = (app: Application) => {

    const router: Router = express.Router();
    const userService = UserService.getInstance();

    router.get('/', (req, res) => {
        userService.getAdmin().then(results => {
            res.send(results);
        })
            .catch(err => {
                console.log(err);
            });
    });

    router.post('/register', (req, res) => {
        const userData: User = req.body;
        userService.putAdmin(userData).then(result => {
            res.send(result);
        }).catch(err => {
            console.error(err);
        });
    });

    router.post('/login', (req, res) => {
        const userData: User = req.body;

        // check if email exists in database:
        userService.getAdminByMail(userData.email).then(registered => {
            res.send(registered);
        }).catch(err => {
            console.error(err);
        });
    });

    app.use('/auth', router);
};
