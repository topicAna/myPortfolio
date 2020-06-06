import { Dishes } from './../models/dishes';
import { DishesService } from './../services/dishes.service';
import express, { Router, Request, Response, Application } from 'express';


export const DishesController = (app: Application) => {

const router: Router = express.Router();
const dishesService = DishesService.getInstance();


/**
  * Return all menu_types
  */
router.get('/', (req: Request, res: Response) => {
    dishesService.getAll().then(results => {
    res.send(results);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Return all menu_types
  */
router.get('/dishes', (req: Request, res: Response) => {
    const dishes = req.params.promo;
    dishesService.getAll().then(results => {
    res.send(results);
    })
    .catch(err => {
        console.log(err);
    })
}); 

/**
  * Return dish by id
  */
router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    dishesService.getById(id).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});


/**
  * Create dishes
  */
router.post('/', (req: Request, res: Response) => {
    const dishes: Dishes = req.body;

    dishesService.create(dishes).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Modify a dish
  */
router.put('/:id', (req: Request, res: Response) => {
    const dishes: Dishes = req.body;

    dishesService.update(dishes).then(result => {
    res.send(result);
    })
    .catch(err => {
        console.log(err);
    })
});

/**
  * Delete a dish
  */
router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    dishesService.delete(id).then(result => {
    res.send();
    })
    .catch(err => {
        console.log(err);
    })
});




app.use('/dishes', router);
};
