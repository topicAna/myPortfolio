import { Product } from './../models/product';
import { ProductsService } from './../services/products.service';
import express, { Router, Request, Response, Application } from 'express';


export const ProductsController = (app: Application) => {

  const router: Router = express.Router();
  const productsService = ProductsService.getInstance();


  /**
  * Return all products
  */
  router.get('/', (req: Request, res: Response) => {
    productsService.getAll().then(results => {
      res.send(results);
    })
      .catch(err => {
        console.log(err);
      })
  });

  /**
  * Return all promos
  */
  router.get('/promo', (req: Request, res: Response) => {
    const promo = req.params.promo;
    productsService.getPromo().then(results => {
      res.send(results);
    })
      .catch(err => {
        console.log(err);
      })
  }); 

  /**
  * Return product by id
  */
  router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    productsService.getById(id).then(result => {
      res.send(result);
    })
      .catch(err => {
        console.log(err);
      })
  });

  /**
  * Image upload
  */
  router.post('/upload-image', async (req, res) => {
    try {
      if (!req.files) {
        res.send({
          status: false,
          message: 'No file uploaded'
        });
      } else {
        let photo: any = req.files.photo;
        let id =  productsService.getRandomInt(1000);
        photo.mv('./uploads/'+id+photo.name);
       
        res.send({
          status: true,
          message: 'File is uploaded',
          data: {
            name: id + photo.name,
            mimetype: photo.mimetype,
            size: photo.size
          }
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  });

  /**
  * Create product
  */
  router.post('/', (req: Request, res: Response) => {
    const product: Product = req.body;

    productsService.create(product).then(result => {
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
    const product: Product = req.body;

    productsService.update(product).then(result => {
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

    productsService.delete(id).then(result => {
      res.send();
    })
      .catch(err => {
        console.log(err);
      })
  });




  app.use('/product', router);
};
