import {
  TOGGLE_CART,
  ADD_ITEM_TO_CARD,
  REMOVE_ALL_ITEMS_IN_CART,
} from './types';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CARD,
  payload: id,
});

export const removeAllItemsInCart = () => ({
  type: REMOVE_ALL_ITEMS_IN_CART,
});
