import { ToolboxService } from '../services/toolbox.service';
import express, { Router, Request, Response, Application } from 'express';
import { ToolboxItem } from 'src/models/toolboxItem';

export const ToolboxController = (app: Application) => {

const router: Router = express.Router();
const toolboxService = ToolboxService.getInstance();

// get all toolboxItems by project id
router.get('/:projectId', (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    toolboxService.findById (projectId).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
});

// get toolbox item relative to projectId and toolboxItemId
router.get('/:projectId&:toolboxItemId', (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const toolboxItemId = parseInt(req.params.toolboxItemId);
    toolboxService.findByProjectAndToolboxId(projectId, toolboxItemId ).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    });
});

router.post('/', (req: Request, res: Response) => {
    // const toolboxItem: ToolboxItem = req.body;

    // toolboxItemService.create(toolboxItem).then(result => {
    // res.send(result);
    // })
    // .catch(err => {
    //     console.error(err);
    // });
});

// router.put('/:id', (req: Request, res: Response) => {
//     const toolboxItem: ToolboxItem = req.body;

//     toolboxItemService.update(toolboxItem).then(result => {
//     res.send(result);
//     })
//     .catch(err => {
//         console.error(err);
//     });
// });

router.delete('/:projectId&:toolboxItemId', (req: Request, res: Response) => {
    const projectId = parseInt(req.params.projectId);
    const toolboxItemId = parseInt(req.params.toolboxItemId);
    toolboxService.removeFromToolbox(projectId, toolboxItemId).then(result => {
    res.send();
    })
    .catch(err => {
        console.log(err);
    });
});

app.use('/toolbox', router);
};
