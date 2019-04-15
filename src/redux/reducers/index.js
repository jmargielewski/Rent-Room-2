import { combineReducers } from 'redux';
import apartmentsReducer from './apartmentsReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  apartmentsData: apartmentsReducer,
  cart: cartReducer,
});

export default reducer;
