import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getApartments,
  getIsFetching,
  getErrorMessage,
  getCartItems,
} from '../../redux/selectors';
import * as actions from '../../redux/actions';
import {
  Products,
  SectionTitle,
  ProductsCenter,
  ProductItem,
  ProductImage,
  BagBtn,
  ImageContainer,
} from './ProductsStyles';
import { formatter } from '../helper/priceFormatter';

class Product extends Component {
  componentDidMount() {
    const { fetchApartments } = this.props;
    fetchApartments();
  }

  renderItemButton(id) {
    const { cartItems, addItemToCart } = this.props;
    if (cartItems[id]) {
      return (
        <BagBtn disabled>
          <FontAwesomeIcon icon="shopping-cart" />
          in cart
        </BagBtn>
      );
    }
    return (
      <BagBtn onClick={() => addItemToCart(id)}>
        <FontAwesomeIcon icon="shopping-cart" />
        add to bag
      </BagBtn>
    );
  }

  renderItem() {
    const { apartments } = this.props;
    return apartments.map(({
 id, title, price, image 
}) => (
      <ProductItem key={id}>
        <ImageContainer>
          <ProductImage src={image} alt="apartment1" />
          {this.renderItemButton(id)}
        </ImageContainer>
        <h3>{title}</h3>
        <h4>{formatter.format(price)}</h4>
      </ProductItem>
    ));
  }

  render() {
    return (
      <Products>
        <SectionTitle>
          <h2>our products</h2>
        </SectionTitle>
        <ProductsCenter>{this.renderItem()}</ProductsCenter>
      </Products>
    );
  }
}

const mapStateToProps = state => ({
  apartments: getApartments(state),
  isFetching: getIsFetching(state),
  errorMessage: getErrorMessage(state),
  cartItems: getCartItems(state),
});

export default connect(
  mapStateToProps,
  actions,
)(Product);
