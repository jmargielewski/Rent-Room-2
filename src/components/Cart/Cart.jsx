import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import flat1 from '../../images/apartment-1s.jpg';
import Button from '../Button/Button';
import {
  CartOverlay,
  Cart,
  CloseCart,
  CartContent,
  CartItem,
  RemoveItem,
  ItemAmount,
  CartFooter,
} from './CartStyle';

export default () => (
  <CartOverlay>
    <Cart>
      <CloseCart>
        <FontAwesomeIcon icon="window-close" />
      </CloseCart>
      <h2>your cart</h2>
      <CartContent>
        <CartItem>
          <img src={flat1} alt="product" />
          <div>
            <h4>queen bed</h4>
            <h5>$9.00</h5>
            <RemoveItem>remove</RemoveItem>
          </div>
          <div>
            <FontAwesomeIcon icon="chevron-up" />
            <ItemAmount>1</ItemAmount>
            <FontAwesomeIcon icon="chevron-down" />
          </div>
        </CartItem>
      </CartContent>
      <CartFooter>
        <h3>
          <span>your total : $</span>
          <span className="cart-total">0</span>
        </h3>
        <Button className="clear-cart">clear cart</Button>
      </CartFooter>
    </Cart>
  </CartOverlay>
);
