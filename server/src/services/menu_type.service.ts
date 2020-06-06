import { Menu_typeRepository } from './../repository/menu_type.repository';
import { Product } from 'src/models/product';
import { Menu_type } from 'src/models/menu_type';

export class Menu_typeService {

  // Make service => singletonTransformation de notre service en singleton
private static instance: Menu_typeService;
static getInstance() {
    if (!this.instance) {
    this.instance = new Menu_typeService();
    }
    return this.instance;
}

  // Un singleton est une class ayant une instance unique a travers toute l'app
private repository: Menu_typeRepository;
private constructor() {
    this.repository = Menu_typeRepository.getInstance();
}

  // Business logic

getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}
/**
   * Return a promise which contains an array of products.
   */
getAll(): Promise<Menu_type[]> {
    return this.repository.findAll();
}

/**
   * Return a promise which contains the product relative to the id in parameter.
   * @param id product id
   */

getById(id: number): Promise<Menu_type> {
    return this.repository.findById(id);
}

/**
   * Create a new product and return a promise which contains the created product.
   * @param product product to create
   */
create(menu_type: any): Promise<Menu_type> {
    return this.repository.insert(menu_type);
}

/**
   * Update the product in parameter and return a promise which contains the updated product.
   * @param product product to update
   */
update(menu_type: any): Promise<Menu_type> {
    return this.repository.update(menu_type);
}

/**
   * Delete the product related to the id in parameter. Return an empty promise.
   * @param id product id
   */
delete(id: number): Promise<any> {
    return this.repository.delete(id);
}
}
