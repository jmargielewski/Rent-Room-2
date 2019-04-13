import styled from 'styled-components';
import heroImg from '../../images/hero-bcg.jpg';

const Hero = styled.header`
  min-height: calc(100vh - 60px);
  background: url(${heroImg}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Banner = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.8);
  display: inline-block;
  padding: 2rem;
`;

const BannerTitle = styled.h1`
  font-size: 3.4rem;
  text-transform: uppercase;
  letter-spacing: var(--mainSpacing);
  margin-bottom: 3rem;
`;

export { Hero, Banner, BannerTitle };
