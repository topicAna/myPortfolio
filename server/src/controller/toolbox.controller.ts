import { ToolboxService } from '../services/toolbox.service';
import express, { Router, Request, Response, Application } from 'express';
import { ToolboxItem } from 'src/models/toolboxItem';

export const ToolboxController = (app: Application) => {

const router: Router = express.Router();
const toolboxService = ToolboxService.getInstance();

// router.get('/', (req: Request, res: Response) => {
//     toolboxService.getAll().then(results => {
//     res.send(results);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// });

// router.get('/toolboxItem', (req: Request, res: Response) => {
//     const toolboxItem = req.params.promo;
//     toolboxItemService.getAll().then(results => {
//     res.send(results);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// });

router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    toolboxService.findById(id).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
});

// router.post('/', (req: Request, res: Response) => {
//     const toolboxItem: ToolboxItem = req.body;

//     toolboxItemService.create(toolboxItem).then(result => {
//     res.send(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// });

// router.put('/:id', (req: Request, res: Response) => {
//     const toolboxItem: ToolboxItem = req.body;

//     toolboxItemService.update(toolboxItem).then(result => {
//     res.send(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// });

// router.delete('/:id', (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);

//     toolboxItemService.delete(id).then(result => {
//     res.send();
//     })
//     .catch(err => {
//         console.log(err);
//     });
// });

app.use('/toolbox', router);
};
