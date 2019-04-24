import {
  FETCH_APARTMENTS_REQUEST,
  FETCH_APARTMENTS_SUCCESS,
  FETCH_APARTMENTS_FAILURE,
} from './types';
import { formateApartmentsEntity } from '../../normalizr/normalizr';

const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.REACT_APP_CONTENTFUL_SPACE,
  accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
});

const fetchApartmentsSuccess = response => ({
  type: FETCH_APARTMENTS_SUCCESS,
  payload: formateApartmentsEntity(response),
});

const fetchApartmentsFailure = err => ({
  type: FETCH_APARTMENTS_FAILURE,
  payload: err,
});

export const fetchApartments = data => async (dispatch) => {
  dispatch({ type: FETCH_APARTMENTS_REQUEST });
  try {
    const result = await client.getEntries({
      content_type: 'rentRoom',
    });
    dispatch(fetchApartmentsSuccess(result));
  } catch (err) {
    dispatch(fetchApartmentsFailure(err));
  }
};
