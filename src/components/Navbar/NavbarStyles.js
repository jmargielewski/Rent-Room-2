import styled from 'styled-components';

const Navbar = styled.nav`
  position: sticky;
  top: 0;
  height: 60px;
  width: 100%;
  display: flex;
  align-items: center;
  background: rgb(231, 226, 221);
  z-index: 1;
`;

const NavbarCenter = styled.div`
  width: 100%;
  max-width: 1170px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.5rem;
`;

const NavbarIcon = styled.span`
  font-size: 1.5rem;
`;

const CartBtn = styled.div`
  position: relative;
  cursor: pointer;
`;

const CartItems = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background: var(--primaryColor);
  padding: 0 5px;
  border-radius: 30%;
  color: var(--mainWhite);
`;

const Logo = styled.img`
  height: 30px;
`;

export {
 Navbar, NavbarCenter, NavbarIcon, CartBtn, CartItems, Logo 
};
