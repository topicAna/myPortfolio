import { User } from '../models/user';
import { UserService } from '../services/users.service';
import express, { Router, Request, Response, Application } from 'express';

export const UsersController = (app: Application) => {

  const router: Router = express.Router();
  const usersService = UserService.getInstance();
  /**
   * Return all users 
   */
  router.get('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    usersService.getById(id).then(result => {
      res.send(result);
    })
      .catch(err => {
        console.log(err);
      });
  });

  /**
   * Create a new user from a JSON body and return the created user in JSON.
   */
  router.post('/', (req: Request, res: Response) => {
    const user: User = req.body; // Automatically transform in a user object

    usersService.create(user).then(result => {
      res.send(result);
    })
      .catch(err => {
        console.log(err);
      })
  });

  /**
   * Update a user relative to its id and return the updated user in JSON.
   */
  router.put('/:id', (req: Request, res: Response) => {
    const user: User = req.body; // req.params.id is automatically set into the body

    usersService.update(user).then(result => {
      res.send(result); 98
    })
      .catch(err => {
        console.log(err);
      })
  });

  /**
   * Delete a user relative its id.
   */
  router.delete('/:id', (req: Request, res: Response) => {
    const id = parseInt(req.params.id);

    usersService.delete(id).then(result => {
      res.send();
    })
      .catch(err => {
        console.log(err);
      })
  });

  app.use('/users', router);
};
