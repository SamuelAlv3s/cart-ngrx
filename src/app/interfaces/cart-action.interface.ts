import { Action } from '@ngrx/store';
import { Product } from './product.interface';

export interface CartAction extends Action {
  type: string;
  payload?: Product;
}
