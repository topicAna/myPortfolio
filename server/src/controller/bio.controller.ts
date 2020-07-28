import { Bio } from '../models/bio';
import express, { Router, Request, Response, Application } from 'express';
import { BioService } from '../services/bio.service';

export const BioController = (app: Application) => {

    const router: Router = express.Router();
    const bioService = BioService.getInstance();

    router.get('/', (req: Request, res: Response) => {
        bioService.getBio().then(results => {
            res.send(results);
        })
            .catch(err => {
                console.log(err);
            });
    });

    router.put('/1', (req: Request, res: Response) => {
        const bio: Bio = req.body; // req.params.id is automatically set into the body

        bioService.update(bio).then(result => {
            res.send(result);
        })
            .catch(err => {
                console.error(err);
            });
    });

    app.use('/bio', router);
};
