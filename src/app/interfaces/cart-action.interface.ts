import { Action } from '@ngrx/store';
import { Product } from './product.interface';

export interface ActionModel extends Action {
  type: string;
  payload: Product;
}
