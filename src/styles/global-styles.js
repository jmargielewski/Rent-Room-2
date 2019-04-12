import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,700,800&subset=latin-ext');
  
  :root {
    --primaryColor: #f09d51;
    --mainWhite: #fff;
    --mainBlack: #222;
    --mainGrey: #ececec;
    --mainSpacing: 0.1rem;
    --mainTransition: all 0.3s linear;
  }

  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    color: var(--mainBlack);
    background: var(--mainWhite);
    font-family: 'Lato', 'Nunito Sans', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: #fff;
  }
  
  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }
`;
