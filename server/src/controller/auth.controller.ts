import express, { Router, Request, Response, Application } from 'express';
import { AuthService } from '../services/auth.service';
import { Admin } from 'src/models/admin';

export const AuthController = (app: Application) => {

    const router: Router = express.Router();
    const authService = AuthService.getInstance();

    router.get('/', (req, res) => {
        authService.getAdmin().then(results => {
            res.send(results);
        })
            .catch(err => {
                console.log(err);
            });
    });

    router.post('/register', (req, res) => {
        const userData: Admin = req.body;
        authService.putAdmin(userData).then(result => {
            res.send(result);
        }).catch(err => {
            console.error(err);
        });
    });

    router.post('/login', (req, res) => {
        const userData: Admin = req.body;

        // check if email exists in database:
        authService.getAdminByMail(userData.email).then(registered => {
            res.send(registered);
        }).catch(err => {
            console.error(err);
        });
    });

    app.use('/auth', router);
};
