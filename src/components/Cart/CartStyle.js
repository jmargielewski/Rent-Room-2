import styled from 'styled-components';

const CartOverlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  transition: var(--mainTransition);
  background: rgb(240, 157, 81, 0.5);
  z-index: 2;
  visibility: hidden;
  .transparentBcg {
    visibility: visible;
  }
`;

const CartWrap = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: scroll;
  z-index: 3;
  background: rgb(231, 226, 221);
  padding: 1.5rem;
  transition: var(--mainTransition);
  transform: translateX(100%);
  .showCart {
    transform: translateX(0);
  }
  @media screen and (min-width: 768px) {
    width: 30vw;
    min-width: 450px;
  }
  h2 {
    text-transform: capitalize;
    text-align: center;
    letter-spacing: var(--mainSpacing);
    margin-bottom: 2rem;
  }
`;

const CloseCart = styled.span`
  font-size: 1.7rem;
  cursor: pointer;
`;

const CartContent = styled.div``;

const CartItem = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  grid-column-gap: 1.5rem;
  margin: 1.5rem 0;
  img {
    width: 75px;
    height: 75px;
  }
  h4 {
    font-size: 0.85rem;
    text-transform: capitalize;
    letter-spacing: var(--mainSpacing);
  }
  h5 {
    margin: 0.5rem 0;
    letter-spacing: var(--mainSpacing);
  }
  .fa-chevron-up,
  .fa-chevron-down {
    color: var(--primaryColor);
    cursor: pointer;
  }
`;

const RemoveItem = styled.span`
  color: grey;
  cursor: pointer;
`;

const ItemAmount = styled.p`
  text-align: center;
`;

const CartFooter = styled.div`
  margin-top: 2rem;
  letter-spacing: var(--mainSpacing);
  text-align: center;
  h3 {
    text-transform: capitalize;
    margin-bottom: 1rem;
  }
`;

export {
  CartOverlay,
  CartWrap,
  CloseCart,
  CartContent,
  CartItem,
  RemoveItem,
  ItemAmount,
  CartFooter,
};
