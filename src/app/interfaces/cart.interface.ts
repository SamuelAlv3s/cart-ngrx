import { Product } from './product.interface';

export interface CartModel {
  products: Product[];
  total: number;
}
