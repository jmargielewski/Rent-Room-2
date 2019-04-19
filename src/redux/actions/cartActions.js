import {
  TOGGLE_CART,
  ADD_ITEM_TO_CARD,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  REMOVE_ITEM_IN_CART,
  REMOVE_ALL_ITEMS_IN_CART,
} from './types';

export const toggleCart = () => ({
  type: TOGGLE_CART,
});

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CARD,
  payload: id,
});

export const incrementItem = id => ({
  type: INCREMENT_ITEM,
  payload: id,
});

export const decrementItem = id => ({
  type: DECREMENT_ITEM,
  payload: id,
});

export const removeItemInCart = id => ({
  type: REMOVE_ITEM_IN_CART,
  payload: id,
});

export const removeAllItemsInCart = () => ({
  type: REMOVE_ALL_ITEMS_IN_CART,
});
