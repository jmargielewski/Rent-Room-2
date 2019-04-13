import {
  FETCH_APARTMENTS_REQUEST,
  FETCH_APARTMENTS_SUCCESS,
  FETCH_APARTMENTS_FAILURE,
} from './types';
import api from '../../api/api';

const fetchApartmentsSuccess = response => ({
  type: FETCH_APARTMENTS_SUCCESS,
  payload: response,
});

const fetchApartmentsFailure = err => ({
  type: FETCH_APARTMENTS_FAILURE,
  payload: err,
});

export const fetchApartments = data => async (dispatch) => {
  dispatch({ type: FETCH_APARTMENTS_REQUEST });
  try {
    const response = await api.get('db.json');
    if (response.status === 200) {
      dispatch(fetchApartmentsSuccess(response.data));
    } else {
      console.error('ERROR', response.status);
    }
  } catch (err) {
    dispatch(fetchApartmentsFailure(err));
  }
};
