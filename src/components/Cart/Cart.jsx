import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../redux/actions';
import { getApartmentsInCartSelector, getIsOpen } from '../../redux/selectors';

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

const Cart = ({
  cartItems,
  isOpen,
  toggleCart,
  removeAllItemsInCart,
  removeItemInCart,
}) => (
  <CartOverlay style={{ visibility: `${isOpen ? 'visible' : 'hidden'}` }}>
    <CartWrap style={{ transform: `translateX(${isOpen ? '0%' : '100%'})` }}>
      <CloseCart onClick={toggleCart}>
        <FontAwesomeIcon icon="window-close" />
      </CloseCart>
      <h2>your cart</h2>
      <CartContent>
        {cartItems
          && cartItems.map(cartItem => (
            <CartItem key={cartItem.id}>
              <img src={flat1} alt="product" />
              <div>
                <h4>{cartItem.title}</h4>
                <h5>{cartItem.price}</h5>
                <RemoveItem onClick={() => removeItemInCart(cartItem.id)}>
                  remove
                </RemoveItem>
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
        <Button onClick={removeAllItemsInCart} className="clear-cart">
          clear cart
        </Button>
      </CartFooter>
    </CartWrap>
  </CartOverlay>
);

const mapStateToProps = state => ({
  cartItems: getApartmentsInCartSelector(state),
  isOpen: getIsOpen(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Cart);
