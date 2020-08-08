import express, { Router, Request, Response, Application } from 'express';
import { AuthService } from '../services/auth.service';

export const AuthController = (app: Application) => {

    const router: Router = express.Router();
    const adminService = AdminService.getInstance();

    router.get('/', (req, res) => {
        res.send ('from auth controller');
    });

    app.use('/api', router);
};
