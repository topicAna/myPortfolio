import { Menu_type } from './../models/menu_type';
import { Menu_typeService } from './../services/menu_type.service';
import express, { Router, Request, Response, Application } from 'express';


export const Menu_typeController = (app: Application) => {

const router: Router = express.Router();
const menu_typeService = Menu_typeService.getInstance();


/**
  * Return all menu_types
  */
router.get('/', (req: Request, res: Response) => {
    menu_typeService.getAll().then(results => {
    res.send(results);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Return all menu_types
  */
router.get('/menu_types', (req: Request, res: Response) => {
    const menu_types = req.params.promo;
    menu_typeService.getAll().then(results => {
    res.send(results);
    })
    .catch(err => {
        console.log(err);
    })
}); 

/**
  * Return menu_type by id
  */
router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    menu_typeService.getById(id).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});


/**
  * Create menu_type
  */
router.post('/', (req: Request, res: Response) => {
    const menu_type: Menu_type = req.body;

    menu_typeService.create(menu_type).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Modify a product
  */
router.put('/:id', (req: Request, res: Response) => {
    const menu_type: Menu_type = req.body;

    menu_typeService.update(menu_type).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Delete a product
  */
router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    menu_typeService.delete(id).then(result => {
    res.send();
    })
    .catch(err => {
        console.log(err);
    })
});




app.use('/menu_type', router);
};
