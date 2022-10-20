import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/portrait.webp';
import heroImage from '../images/hero-img.webp'
import Logos from './Logos';
import { NoBackgroundH2 } from './ReusableStyles.style';

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledHeader className="hero">
      <HeroContainer className="hero-container">
        <HeroText className="hero-text">
          <h3 className="name-heading">Portfolio: Elin Segelöv</h3>
          <h1>frontend <br /> developer</h1>
          <NoBackgroundH2 className="">with a background in social work</NoBackgroundH2>
        </HeroText>
        <Logos
          githubLogo={githubLogo}
          linkedinLogo={linkedinLogo}
          stackOverflowLogo={stackOverflowLogo} />
        <PortraitImg src={profileImage} className="portrait-img" alt="Portrait" />
      </HeroContainer>
    </StyledHeader>
  )
}

export default Header;

const StyledHeader = styled.header`
  background-image: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5)), url(${heroImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 60vh;
  position: relative;
  width: 100%;

@media (min-width: 600px) {
  display: flex;
  justify-content: center;
}
`
const HeroContainer = styled.div`
  position: relative;
  width: 90%;

  @media (min-width: 600px) {
    max-width: 1000px;
  }
`
const HeroText = styled.div`
  color: #FCF8EC;
  position: absolute;
  left: 1rem;
  top: 7rem;

  h2 {
  margin-top: 0;
  text-align: left;
  text-transform: lowercase;
  }

  h3 {
  background: none;
  color: #FCF8EC;
  margin: 0;
  padding: 0;
  }

  @media (min-width: 600px) {
    top: 10rem; 
    
    h1 {
      font-size: 50px;
    }
  }

`
const PortraitImg = styled.img`
  border: solid white 2px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: -1rem;
  top: 49vh;
  width: 7rem;

@media (min-width: 600px) {
    right: 1rem;
    top: 43vh;
    width: 20vh;
}
`