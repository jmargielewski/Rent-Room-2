import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  getApartments,
  getIsFetching,
  getErrorMessage,
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

import flat1 from '../../images/apartment-1.jpg';

class Product extends Component {
  componentDidMount() {
    const { fetchApartments } = this.props;
    fetchApartments();
  }

  onClick = (e, id) => {
    const { addItemToCart } = this.props;

    e.target.textContent = 'in cart';
    e.target.disabled = true;
    addItemToCart(id);
  };

  renderItem() {
    const { apartments } = this.props;
    return apartments.map(({ id, title, price }) => (
      <ProductItem key={id}>
        <ImageContainer>
          <ProductImage src={flat1} alt="apartment1" />
          <BagBtn onClick={e => this.onClick(e, id)}>
            <FontAwesomeIcon icon="shopping-cart" />
            add to bag
          </BagBtn>
        </ImageContainer>
        <h3>{title}</h3>
        <h4>{price}</h4>
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

const mapStateToProps = ({ apartmentsReducer }) => ({
  apartments: getApartments(apartmentsReducer),
  isFetching: getIsFetching(apartmentsReducer),
  errorMessage: getErrorMessage(apartmentsReducer),
});

export default connect(
  mapStateToProps,
  actions,
)(Product);
