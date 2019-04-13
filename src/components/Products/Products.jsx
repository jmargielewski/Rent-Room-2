import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    this.props.fetchApartments();
  }

  render() {
    return (
      <Products>
        <SectionTitle>
          <h2>our products</h2>
        </SectionTitle>
        <ProductsCenter>
          <ProductItem>
            <ImageContainer>
              <ProductImage src={flat1} alt="apartment1" />
              <BagBtn>
                <FontAwesomeIcon icon="shopping-cart" />
                add to bag
              </BagBtn>
            </ImageContainer>
            <h3>queen bed</h3>
            <h4>$15</h4>
          </ProductItem>
        </ProductsCenter>
      </Products>
    );
  }
}

export default connect(
  null,
  actions,
)(Product);
