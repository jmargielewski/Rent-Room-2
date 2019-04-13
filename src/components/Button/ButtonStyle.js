import styled from 'styled-components';

const Button = styled.button`
  padding: 1rem 3rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  font-size: 1rem;
  background: var(--primaryColor);
  color: var(--mainBlack);
  border: 1px solid var(--primaryColor);
  transition: var(--mainTransition);
  cursor: pointer;
  &:hover {
    background: transparent;
    color: var(--primaryColor);
  }
`;

export { Button };
