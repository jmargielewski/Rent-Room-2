import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../redux/actions';
import { getTotalCartSelector } from '../../redux/selectors';
import {
  Navbar,
  NavbarCenter,
  NavbarIcon,
  CartBtn,
  CartItems,
  Logo,
} from './NavbarStyles';

import logo from '../../assets/logo.png';

const Nav = ({ toggleCart, numberItems }) => (
  <Navbar>
    <NavbarCenter>
      <NavbarIcon>
        <FontAwesomeIcon icon="bars" />
      </NavbarIcon>
      <Logo src={logo} />
      <CartBtn>
        <NavbarIcon onClick={toggleCart}>
          <FontAwesomeIcon icon="shopping-cart" />
        </NavbarIcon>
        <CartItems>{numberItems}</CartItems>
      </CartBtn>
    </NavbarCenter>
  </Navbar>
);

const mapStateToProps = state => ({
  numberItems: getTotalCartSelector(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Nav);
