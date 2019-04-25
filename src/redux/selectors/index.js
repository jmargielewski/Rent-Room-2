import { createSelector } from 'reselect';

export const getIds = state => state.apartmentsData.apartments.allIds;
export const getApartment = (state, id) => state.apartmentsData.apartments.byId[id];

export const getApartments = (state) => {
  const ids = getIds(state);
  return ids.map(id => getApartment(state, id));
};

export const getIsFetching = state => state.apartmentsData.isFetching;
export const getErrorMessage = state => state.apartmentsData.errorMessage;

// cart
export const getCartItems = state => state.cart.cartItems;
export const getIsOpen = state => state.cart.isOpen;

export const getApartmentsInCartSelector = createSelector(
  getApartments,
  getCartItems,
  (apartments, cartItems) => apartments.reduce(
      (acc, apartment) => (cartItems[apartment.id]
          ? [
              ...acc,
              {
                ...apartment,
                amount: cartItems[apartment.id].amount,
              },
            ]
          : acc),
      [],
    ),
);

export const getTotalCartPrice = createSelector(
  getApartmentsInCartSelector,
  cartItems => cartItems.reduce(
      (acc, cartItem) => acc + cartItem.amount * cartItem.price,
      0,
    ),
);

export const getTotalCartSelector = createSelector(
  getCartItems,
  cartItems => Object.keys(cartItems).reduce(
      (acc, cartItemId) => acc + cartItems[cartItemId].amount,
      0,
    ),
);
