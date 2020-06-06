import { ProductsRepository } from './../repository/product.repository';
import { Product } from 'src/models/product';

export class ProductsService {

  // Make service => singletonTransformation de notre service en singleton
  private static instance: ProductsService;
  static getInstance() {
    if (!this.instance) {
      this.instance = new ProductsService();
    }
    return this.instance;
  }

  // Un singleton est une class ayant une instance unique a travers toute l'app
  private repository: ProductsRepository;
  private constructor() {
    this.repository = ProductsRepository.getInstance();
  }

  // Business logic

  getRandomInt(max: number) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  /**
   * Return a promise which contains an array of products.
   */
  getAll(): Promise<Product[]> {
    return this.repository.findAll();
  }
  // Get promo pack
  getPromo(): Promise<Product[]> {
    return this.repository.findPromoAndReservation();
  }
  /**
   * Return a promise which contains the product relative to the id in parameter.
   * @param id product id
   */
  getById(id: number): Promise<Product> {
    return this.repository.findById(id);
  }

  /**
   * Create a new product and return a promise which contains the created product.
   * @param product product to create
   */
  create(product: any): Promise<Product> {
    return this.repository.insert(product);
  }

  /**
   * Update the product in parameter and return a promise which contains the updated product.
   * @param product product to update
   */
  update(product: any): Promise<Product> {
    return this.repository.update(product);
  }

  

  /**
   * Delete the product related to the id in parameter. Return an empty promise.
   * @param id product id
   */
  delete(id: number): Promise<any> {
    return this.repository.delete(id);
  }
}
