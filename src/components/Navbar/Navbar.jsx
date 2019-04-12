import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Navbar,
  NavbarCenter,
  NavbarIcon,
  CartBtn,
  CartItems,
  Logo,
} from './NavbarStyles';

import logo from '../../assets/logo.png';

export default () => (
  <Navbar>
    <NavbarCenter>
      <NavbarIcon>
        <FontAwesomeIcon icon="bars" />
      </NavbarIcon>
      <Logo src={logo} />
      <CartBtn>
        <NavbarIcon>
          <FontAwesomeIcon icon="shopping-cart" />
        </NavbarIcon>
        <CartItems>1</CartItems>
      </CartBtn>
    </NavbarCenter>
  </Navbar>
);
