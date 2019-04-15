import { ADD_ITEM_TO_CARD } from './types';

export const addItemToCart = id => ({
  type: ADD_ITEM_TO_CARD,
  payload: id,
});
