import { Project } from '../models/project';

import express, { Router, Request, Response, Application } from 'express';
import { ProjectsService } from '../services/projects.service';

export const ProjectsController = (app: Application) => {

  const router: Router = express.Router();
  const projectsService = ProjectsService.getInstance();

  router.get('/', (req: Request, res: Response) => {
      projectsService.getAll().then(results => {
        res.send(results);
      })
        .catch(err => {
          console.log(err);
        });
    });

  router.get('/lastId', (req: Request, res: Response) => {
      projectsService.getLastId().then(results => {
        res.send(results);
      })
        .catch(err => {
          console.log(err);
        });
    });

  router.get('/:id', (req: Request, res: Response) => {
    // tslint:disable-next-line: radix
    const id = parseInt(req.params.id);
    projectsService.getById(id).then(result => {
      res.send(result);
    })
      .catch(err => {
        // tslint:disable-next-line: no-console
        console.error(err);
      });
  });

  router.post('/', (req: Request, res: Response) => {
    const project: Project = req.body; // Automatically transform in a project object

    projectsService.create(project).then(result => {
      res.send(result);
    })
      .catch(err => {
        console.error(err);
      });
  });

  router.put('/:id', (req: Request, res: Response) => {
    const project: Project = req.body; // req.params.id is automatically set into the body

    projectsService.update(project).then(result => {
      res.send(result);
    })
      .catch(err => {
        console.error(err);
      });
  });

  router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    projectsService.delete(id).then(result => {
      res.send();
    })
      .catch(err => {
        console.log(err);
      });
  });

  app.use('/projects', router);
};
