import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../redux/actions';
import {
  Navbar,
  NavbarCenter,
  NavbarIcon,
  CartBtn,
  CartItems,
  Logo,
} from './NavbarStyles';

import logo from '../../assets/logo.png';

const Nav = ({ toggleCart }) => (
  <Navbar>
    <NavbarCenter>
      <NavbarIcon>
        <FontAwesomeIcon icon="bars" />
      </NavbarIcon>
      <Logo src={logo} />
      <CartBtn>
        <NavbarIcon onClick={() => toggleCart()}>
          <FontAwesomeIcon icon="shopping-cart" />
        </NavbarIcon>
        <CartItems>1</CartItems>
      </CartBtn>
    </NavbarCenter>
  </Navbar>
);

export default connect(
  null,
  actions,
)(Nav);
