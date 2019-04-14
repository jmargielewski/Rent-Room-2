export const getApartments = state => state.apartmentsReducer.apartments.allIds.map(
    id => state.apartmentsReducer.apartments.byId[id],
  );

export const getIsFetching = state => state.apartmentsReducer.isFetching;

export const getErrorMessage = state => state.apartmentsReducer.errorMessage;
