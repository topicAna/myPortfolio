import { Bio } from '../models/bio';
import express, { Router, Request, Response, Application } from 'express';
import { BioService } from '../services/bio.service';
import { UserService } from '../services/user.service';

export const BioController = (app: Application) => {

    const router: Router = express.Router();
    const bioService = BioService.getInstance();
    const userService = UserService.getInstance();

    router.get('/', (req: Request, res: Response) => {
        bioService.getBio().then(results => {
            res.send(results);
        })
            .catch(err => {
                console.log(err);
            });
    });

    router.put('/', userService.verifyToken, (req: Request, res: Response) => {
        const bio: Bio = req.body; // req.params.id is automatically set into the body

        bioService.update(bio).then(result => {
            res.send(result);
        })
            .catch(err => {
                console.error(err);
            });
    });

    router.post('/upload', async (req, res, next) => {
        console.log('headers are:', req.headers)
        try {
            if (!req.files) {
                res.send({
                    status: false,
                    message: 'No file uploaded',
                });
            } else {
                const file: any = req.files;
                const key = 'cvLink';
                const cvObject = file[key];
                console.log(cvObject);
                const id = bioService.getRandomInt(1000);
                cvObject.mv('./uploads/' + id + cvObject.name);
                res.send({
                    status: true,
                    message: 'File is uploaded',
                    data: {
                        name: id + cvObject.name,
                        mimetype: cvObject.mimetype,
                        size: cvObject.size,
                    },
                });
            }
        } catch (err) {
            res.status(500).send(err);
        }
    });

    app.use('/bio', router);
};
