import * as fromApartments from '../reducers/apartmentsReducer';

export const getApartments = (state) => {
  const ids = fromApartments.getIds(state);
  return ids.map(id => fromApartments.getApartment(state, id));
};

export const getIsFetching = state => fromApartments.getIsFetching(state);

export const getErrorMessage = state => fromApartments.getErrorMessage(state);
