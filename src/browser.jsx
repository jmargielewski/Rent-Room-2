import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faShoppingCart,
  faWindowClose,
  faChevronUp,
  faChevronDown,
} from '@fortawesome/free-solid-svg-icons';
import * as serviceWorker from './serviceWorker';
import configureStore from './redux/configureStore';
import Root from './Root';
import App from './container/App';

import GlobalStyle from './styles/global-styles';

library.add(faBars, faShoppingCart, faWindowClose, faChevronUp, faChevronDown);

const store = configureStore();

render(
  <Root store={store}>
    <App />
    <GlobalStyle />
  </Root>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
