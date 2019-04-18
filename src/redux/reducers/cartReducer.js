import {
  TOGGLE_CART,
  ADD_ITEM_TO_CARD,
  REMOVE_ALL_ITEMS_IN_CART,
} from '../actions/types';

export const INITIAL_STATE = {
  cartItemsIds: [],
  isOpen: false,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    case ADD_ITEM_TO_CARD:
      return {
        ...state,
        cartItemsIds: [...state.cartItemsIds, action.payload],
      };
    case REMOVE_ALL_ITEMS_IN_CART:
      return {
        ...state,
        cartItemsIds: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
