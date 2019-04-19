/* eslint no-underscore-dangle: ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"] }] */
import { compose, createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducer from './reducers';
import { loadCartState, saveCartState } from '../storage/cartItems';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => {
  const persistedState = loadCartState();
  const store = createStore(
    reducer,
    persistedState,
    composeEnhancers(applyMiddleware(reduxThunk)),
  );

  store.subscribe(() => {
    saveCartState({
      cart: { cartItems: store.getState().cart.cartItems },
    });
  });

  return store;
};

export default configureStore;
