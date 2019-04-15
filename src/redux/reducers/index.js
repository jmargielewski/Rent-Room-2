import { combineReducers } from 'redux';
import apartmentsReducer from './apartmentsReducer';
import cartReducer from './cartReducer';

const reducer = combineReducers({
  apartmentsReducer,
  cartReducer,
});

export default reducer;
