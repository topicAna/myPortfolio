import { Product } from './../models/product';
import { MysqlConnection } from './../loaders/mysql';


export class ProductsRepository {

    private static instance: ProductsRepository;
    private connection: MysqlConnection = MysqlConnection.getInstance();

    private table: string = 'product';

    static getInstance() {
        if (!this.instance) {
            this.instance = new ProductsRepository();
        }
        return this.instance;
    }

    private constructor() {
    }

    // Find all products
    findAll(): Promise<Product[]> {
        return this.connection.query(`SELECT * from ${this.table}`)
          .then((results: any) => {
            return results.map((product: any) => new Product(product));
          });
    }

    //Find promo
    findPromoAndReservation(): Promise<Product[]> {
      return this.connection.query(`select product.id, product.description, product.priceTTC, product.photo, promo.productId, promo.nbResa from product inner join promo where product.promo= 1;`)
        .then((results: any) => {
          return results.map((product: any) => new Product(product));
        });
  }


    // Find product by Id
    findById(id: number): Promise<Product> {
        return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [id])
          .then((results: any) => new Product(results[0]));
    }


    // Insert product
    insert(product: Product) {
      return this.connection.query(
        `INSERT INTO ${this.table} (name,description, priceTTC,photo, visibility) VALUES (?,?,?,?,?)`,
        [product.name, product.description, product.priceTTC, product.photo, product.visibility]
      ).then((result: any) => {
        // After an insert the insert id is directly passed in the promise
        return this.findById(result.insertId);
      });
    }

    // Modify product
    update(product: Product) {
      return this.connection.query(
        `UPDATE ${this.table} SET name = ?, description = ?,  priceTTC = ?, photo = ?, promo = ?, visibility = ? WHERE id = ?`,
        [product.name, product.description, product.priceTTC, product.photo, product.promo, product.visibility, product.id ]
      ).then(() => {
        return this.findById(product.id);
      });
    }

    // Delete product
    delete(id: number): Promise<any> {
      return this.connection.query(`DELETE FROM ${this.table} WHERE id = ?`, [id]);
    }
}
