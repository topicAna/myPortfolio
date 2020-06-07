import { UsersRepository } from '../repository/users.repository';
import { User } from './../models/user';
/**
 * Cette classe est un service
 * C'est ici que l'ensemble de la logique consernant les Users doit apparaitre.
 * Attention ! Mettez le moins possible d'element dans le controller
 */
export class UserService {

  // Make service => singletonTransformation de notre service en singleton
  private static instance: UserService;
  static getInstance() {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  // Un singleton est une class ayant une instance unique a travers toute l'app
  private repository: UsersRepository;
  private constructor() {
    this.repository = UsersRepository.getInstance();
  }

  // Business logic

  
     
    /**
    * Return a promise which contains the user with their date and day.
    */
  getAlluser(): Promise<User[]> {
    return this.repository.findAllusers();
  }

  /**
   * Return a promise which contains the Users relative to the id in parameter.
   * @param id Users id
   */
  getById(id: number): Promise<User> {
    return this.repository.findById(id);
  }



  /**
   * Create a new Users and return a promise which contains the created Users.
   * @param User Users to create
   */
  create(User: any): Promise<User> {
    return this.repository.insert(User);
  }

  /**
   * Update the Users in parameter and return a promise which contains the updated Users.
   * @param User Users to update
   */
  update(User: any): Promise<User> {
    return this.repository.update(User);
  }

  /**
   * Delete the Users related to the id in parameter. Return an empty promise.
   * @param id Users id
   */
  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
