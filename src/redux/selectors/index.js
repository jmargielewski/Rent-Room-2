import { createSelector } from 'reselect';

export const getIds = state => state.apartmentsData.apartments.allIds;
export const getApartment = (state, id) => state.apartmentsData.apartments.byId[id];

export const getApartments = (state) => {
  const ids = getIds(state);
  return ids.map(id => getApartment(state, id));
};

export const getIsFetching = state => state.apartmentsData.isFetching;
export const getErrorMessage = state => state.apartmentsData.errorMessage;

export const getCartItemsIds = state => state.cart.cartItemsIds;

export const getApartmentsInCartSelector = createSelector(
  getApartments,
  getCartItemsIds,
  (apartments, cartItemsIds) => apartments.filter(apartment => cartItemsIds.includes(apartment.id)),
);
