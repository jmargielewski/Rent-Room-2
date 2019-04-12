import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Products,
  SectionTitle,
  ProductsCenter,
  Product,
  ProductImage,
  BagBtn,
  ImageContainer,
} from './ProductsStyles';

import flat1 from '../../images/apartment-1.jpg';

export default () => (
  <Products>
    <SectionTitle>
      <h2>our products</h2>
    </SectionTitle>
    <ProductsCenter>
      <Product>
        <ImageContainer>
          <ProductImage src={flat1} alt="apartment1" />
          <BagBtn>
            <FontAwesomeIcon icon="shopping-cart" />
            add to bag
          </BagBtn>
        </ImageContainer>
        <h3>queen bed</h3>
        <h4>$15</h4>
      </Product>
    </ProductsCenter>
  </Products>
);
