import React from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as actions from '../../redux/actions';
import { formatter } from '../../helper/priceFormatter';
import {
  getApartmentsInCartSelector,
  getTotalCartPrice,
  getTotalCartSelector,
  getIsOpen,
} from '../../redux/selectors';

import CartItem from './CartItem';
import Button from '../Button/Button';
import {
  CartOverlay,
  CartWrap,
  CloseCart,
  CartContent,
  CartFooter,
} from './CartStyle';

const Cart = ({
  cartItems,
  totalPrice,
  totalAmount,
  isOpen,
  toggleCart,
  incrementItem,
  decrementItem,
  removeAllItemsInCart,
  removeItemInCart,
}) => {
  const renderCartItem = () => cartItems
    && cartItems.map(cartItem => (
      <CartItem
        key={cartItem.id}
        cartItem={cartItem}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        removeItemInCart={removeItemInCart}
      />
    ));

  const renderCartFooter = () => (
    <>
      <h3>
        <div>
          <span>your total price :</span>
          <span>{formatter.format(totalPrice)}</span>
        </div>
        <div className="cart-total">
          <span>your total amount : </span>
          <span>{totalAmount || 0}</span>
        </div>
      </h3>
      <Button onClick={removeAllItemsInCart} className="clear-cart">
        clear cart
      </Button>
    </>
  );

  return (
    <CartOverlay style={{ visibility: `${isOpen ? 'visible' : 'hidden'}` }}>
      <CartWrap style={{ transform: `translateX(${isOpen ? '0%' : '100%'})` }}>
        <CloseCart onClick={toggleCart}>
          <FontAwesomeIcon icon="window-close" />
        </CloseCart>
        <h2>your cart</h2>
        <CartContent>{renderCartItem()}</CartContent>
        <CartFooter>{renderCartFooter()}</CartFooter>
      </CartWrap>
    </CartOverlay>
  );
};

const mapStateToProps = state => ({
  cartItems: getApartmentsInCartSelector(state),
  totalPrice: getTotalCartPrice(state),
  totalAmount: getTotalCartSelector(state),
  isOpen: getIsOpen(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Cart);
