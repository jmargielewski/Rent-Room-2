import {
  FETCH_APARTMENTS_REQUEST,
  FETCH_APARTMENTS_SUCCESS,
  FETCH_APARTMENTS_FAILURE,
} from '../actions/types';

export const INITIAL_STATE = {
  loading: false,
  data: null,
  errorMessage: '',
};

const apartmentsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_APARTMENTS_REQUEST:
      return { ...state, loading: true };
    case FETCH_APARTMENTS_SUCCESS:
      return { ...state, loading: false, data: action.payload };
    case FETCH_APARTMENTS_FAILURE:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};

export default apartmentsReducer;
