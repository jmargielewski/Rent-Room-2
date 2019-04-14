import {
  FETCH_APARTMENTS_REQUEST,
  FETCH_APARTMENTS_SUCCESS,
  FETCH_APARTMENTS_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  isFetching: false,
  apartments: {
    byId: null,
    allIds: [],
  },
  errorMessage: '',
};

const apartmentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_REQUEST:
      return { ...state, isFetching: true };
    case FETCH_APARTMENTS_SUCCESS:
      return { ...state, isFetching: false, apartments: action.payload };
    case FETCH_APARTMENTS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default apartmentsReducer;

export const getIds = state => state.apartments.allIds;
export const getApartment = (state, id) => state.apartments.byId[id];
export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
