import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CartItem, RemoveItem, ItemAmount } from './CartStyle';
import { formatter } from '../../helper/priceFormatter';

export default ({
  cartItem,
  removeItemInCart,
  incrementItem,
  decrementItem,
}) => (
  <CartItem key={cartItem.id}>
    <img src={cartItem.image} alt="product" />
    <div>
      <h4>{cartItem.title}</h4>
      <h5>{formatter.format(cartItem.price)}</h5>
      <RemoveItem onClick={() => removeItemInCart(cartItem.id)}>
        remove
      </RemoveItem>
    </div>
    <div>
      <FontAwesomeIcon
        onClick={() => incrementItem(cartItem.id)}
        icon="chevron-up"
      />
      <ItemAmount>{cartItem.amount}</ItemAmount>
      <FontAwesomeIcon
        onClick={() => (cartItem.amount === 1
            ? removeItemInCart(cartItem.id)
            : decrementItem(cartItem.id))
        }
        icon="chevron-down"
      />
    </div>
  </CartItem>
);
