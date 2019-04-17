import { ADD_ITEM_TO_CARD } from '../actions/types';

export const INITIAL_STATE = {
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CARD:
      return {
        ...state,
        cartItems: [...state.cartItems, { id: action.payload, amount: 0 }],
      };
    default:
      return state;
  }
};

export default cartReducer;
