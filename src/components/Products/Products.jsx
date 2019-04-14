import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getApartments, getIsFetching, getErrorMessage } from '../../selectors';
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

  renderItem() {
    const { apartments } = this.props;
    return apartments.map(apartment => (
      <ProductItem key={apartment.id}>
        <ImageContainer>
          <ProductImage src={flat1} alt="apartment1" />
          <BagBtn>
            <FontAwesomeIcon icon="shopping-cart" />
            add to bag
          </BagBtn>
        </ImageContainer>
        <h3>{apartment.title}</h3>
        <h4>{apartment.price}</h4>
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
});

export default connect(
  mapStateToProps,
  actions,
)(Product);
