import { ReservationController } from './controller/projects.controller';
import express from 'express';
import loaders from './loaders';
import { ProductsController } from './controller/product.controller';
import bodyParser from 'body-parser';
import { UsersController } from './controller/user.controller';
import { Menu_typeController } from './controller/menu_type.controller'
import { DishesController } from './controller/dishes.controller';


async function startServer() {
    // Récupération de l'application initiale
    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());


    await loaders(app);


    ReservationController(app);
    ProductsController(app);

    UsersController(app);
    Menu_typeController(app)
    DishesController(app)

    // Démarrage du serveur une fois que tout est correctement init
    app.listen(3000, () => console.log('Express server is running on port 3000'));
  }

startServer();
