import { DishesRepository } from './../repository/dishes.repository';
import { Product } from 'src/models/product';
import { Menu_type } from 'src/models/menu_type';
import { Dishes } from 'src/models/dishes';

export class DishesService {

  // Make service => singletonTransformation de notre service en singleton
private static instance: DishesService;
static getInstance() {
    if (!this.instance) {
    this.instance = new DishesService();
    }
    return this.instance;
}

private repository: DishesRepository;
private constructor() {
    this.repository = DishesRepository.getInstance();
}

  // Business logic

getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
}
/**
   * Return a promise which contains an array of products.
   */
getAll(): Promise<Dishes[]> {
    return this.repository.findAll();
}

/**
   * Return a promise which contains the product relative to the id in parameter.
   * @param id product id
   */

getById(id: number): Promise<Dishes> {
    return this.repository.findById(id);
}

/**
   * Create a new product and return a promise which contains the created product.
   * @param product product to create
   */
create(dish: any): Promise<Dishes> {
    return this.repository.insert(dish);
}

/**
   * Update the product in parameter and return a promise which contains the updated product.
   * @param product product to update
   */
update(dish: any): Promise<Dishes> {
    return this.repository.update(dish);
}

/**
   * Delete the product related to the id in parameter. Return an empty promise.
   * @param id product id
   */
delete(id: number): Promise<any> {
    return this.repository.delete(id);
}
}
