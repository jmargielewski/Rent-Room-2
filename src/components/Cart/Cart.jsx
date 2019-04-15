import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getApartmentsInCartSelector } from '../../redux/selectors';

import flat1 from '../../images/apartment-1s.jpg';
import Button from '../Button/Button';
import {
  CartOverlay,
  CartWrap,
  CloseCart,
  CartContent,
  CartItem,
  RemoveItem,
  ItemAmount,
  CartFooter,
} from './CartStyle';

const Cart = ({ cartItems }) => (
  <CartOverlay>
    {console.log(cartItems)}
    <CartWrap>
      <CloseCart>
        <FontAwesomeIcon icon="window-close" />
      </CloseCart>
      <h2>your cart</h2>
      <CartContent>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id}>
            <img src={flat1} alt="product" />
            <div>
              <h4>{cartItem.title}</h4>
              <h5>{cartItem.price}</h5>
              <RemoveItem>remove</RemoveItem>
            </div>
            <div>
              <FontAwesomeIcon icon="chevron-up" />
              <ItemAmount>1</ItemAmount>
              <FontAwesomeIcon icon="chevron-down" />
            </div>
          </CartItem>
        ))}
      </CartContent>
      <CartFooter>
        <h3>
          <span>your total : $</span>
          <span className="cart-total">0</span>
        </h3>
        <Button className="clear-cart">clear cart</Button>
      </CartFooter>
    </CartWrap>
  </CartOverlay>
);

const mapStateToProps = state => ({
  cartItems: getApartmentsInCartSelector(state),
});

export default connect(mapStateToProps)(Cart);
