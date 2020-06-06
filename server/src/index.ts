import express from 'express';
import loaders from './loaders';
import bodyParser from 'body-parser';

import { ProjectsController } from './controller/projects.controller';
import { UsersController } from './controller/user.controller';
import { ToolboxItemController } from './controller/toolboxItem.controller';

async function startServer() {
    // Récupération de l'application initiale
    const app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    await loaders(app);

    ProjectsController(app);
    ToolboxItemController(app);

    UsersController(app);
    app.listen(3000, () => console.log('Express server is running on port 3000'));
  }
startServer();
