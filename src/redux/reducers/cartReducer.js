import {
  TOGGLE_CART,
  ADD_ITEM_TO_CARD,
  REMOVE_ITEM_IN_CART,
  REMOVE_ALL_ITEMS_IN_CART,
} from '../actions/types';

export const INITIAL_STATE = {
  cartItems: {},
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
        cartItems: {
          ...state.cartItems,
          [action.payload]: { id: action.payload, amount: 1 },
        },
      };
    case REMOVE_ITEM_IN_CART:
      return {
        ...state,
        cartItems: {
          ...Object.keys(state.cartItems).reduce(
            (acc, id) => (id === action.payload
                ? acc
                : { ...acc, [id]: state.cartItems[id] }),
            {},
          ),
        },
      };
    case REMOVE_ALL_ITEMS_IN_CART:
      return {
        ...state,
        cartItems: {},
      };
    default:
      return state;
  }
};

export default cartReducer;
