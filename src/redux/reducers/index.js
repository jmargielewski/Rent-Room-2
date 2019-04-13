import { combineReducers } from 'redux';
import apartmentsReducer from './apartmentsReducer';

const reducer = combineReducers({
  apartments: apartmentsReducer,
});

export default reducer;
