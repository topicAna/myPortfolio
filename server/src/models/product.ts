export class Product {
    id!: number;
    name!: string;
    description!: string;
    priceTTC!: number;
    photo! : string;
    promo! : boolean;
    visibility! : boolean;
  
    constructor(input: Product) {
      Object.assign(this, input);
  }
  }