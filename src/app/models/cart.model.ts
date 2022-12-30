import { Product } from './product.model';

export class CartModel {
  products: Product[] = [];
  total: number = 0;
}
