import { CartAction } from '../interfaces/cart-action.interface';
import { Cart } from '../interfaces/cart.interface';
import { Product } from '../interfaces/product.interface';
import { ActionTypes } from './cart.action';

export const cart: Cart = {
  products: [],
  total: 0,
};

export function cartReducer(state = cart, action: CartAction) {
  switch (action.type) {
    case ActionTypes.Add: {
      const newState = { ...state };
      if (action.payload === undefined) return newState;
      newState.products = [...state.products, action.payload];
      newState.total = calculateTotal(newState.products);
      return newState;
    }

    case ActionTypes.Remove: {
      if (action.payload === undefined) return state;
      const index = state.products.indexOf(action.payload);
      const newState = { ...state };
      newState.products.splice(index, 1);
      newState.total = calculateTotal(newState.products);
      return newState;
    }

    case ActionTypes.Clear: {
      const newState = cart;
      return newState;
    }

    default:
      return state;
  }
}

function calculateTotal(products: Product[]): number {
  let total: number = 0;
  products.forEach((product) => {
    total += product.price;
  });
  return total;
}
