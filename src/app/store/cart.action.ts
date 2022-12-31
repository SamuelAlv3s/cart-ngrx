import { Action } from '@ngrx/store';
import { Product } from '../interfaces/product.interface';

export enum ActionTypes {
  Add = 'ADD',
  Remove = 'REM',
  Clear = 'CLE',
}

export const Add = (product: Product) => {
  return <Action>{ type: ActionTypes.Add, payload: product };
};

export const Remove = (product: Product) => {
  return <Action>{ type: ActionTypes.Remove, payload: product };
};

export const Clear = () => {
  return <Action>{ type: ActionTypes.Clear, payload: null };
};
