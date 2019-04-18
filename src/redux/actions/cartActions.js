import { TOGGLE_CART, ADD_ITEM_TO_CARD } from './types';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CARD,
  payload: id,
});
