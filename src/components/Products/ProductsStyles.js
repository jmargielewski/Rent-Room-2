import styled from 'styled-components';

const Products = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.div`
  h2 {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 5rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
`;

const ProductsCenter = styled.div`
  width: 90vw;
  margin: 0 auto;
  max-width: 1170px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-column-gap: 1.5rem;
  grid-row-gap: 2rem;
`;

const Product = styled.article`
  h3 {
    text-transform: capitalize;
    font-size: 1.1rem;
    margin-top: 1rem;
    letter-spacing: var(--mainSpacing);
    text-align: center;
  }
  h4 {
    margin-top: 0.7rem;
    letter-spacing: var(--mainSpacing);
    color: var(--primaryColor);
    text-align: center;
  }
`;

const ProductImage = styled.img`
  display: block;
  width: 100%;
  min-height: 12rem;
  transition: var(--mainTransition);
`;

const BagBtn = styled.button`
  position: absolute;
  top: 70%;
  right: 0;
  background: var(--primaryColor);
  border: none;
  text-transform: uppercase;
  padding: 0.5rem 0.75rem;
  letter-spacing: var(--mainSpacing);
  font-weight: bold;
  transition: var(--mainTransition);
  transform: translateX(101%);
  cursor: pointer;
  &:hover {
    color: var(--mainWhite);
  }
  .fa-shopping-cart {
    margin-right: 0.5rem;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  overflow: hidden;
  &:hover ${BagBtn} {
    transform: translateX(0);
  }
  &:hover ${ProductImage} {
    opacity: 0.5;
  }
`;

export {
  Products,
  SectionTitle,
  ProductsCenter,
  Product,
  ProductImage,
  BagBtn,
  ImageContainer,
};
