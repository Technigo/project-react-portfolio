import React from 'react';
import styled from 'styled-components/macro';
import profileImage from '../images/portrait.webp';
import heroImage from '../images/hero-img.webp'
import Logos from './Logos';
import { NoBackgroundH2 } from './ReusableStyles.style';

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledHeader>
      <HeroContainer>
        <HeroText>
          <h3>Portfolio: Elin Segelöv</h3>
          <h1>frontend</h1> <h1>developer</h1>
          <NoBackgroundH2>
            and proficient googler
          </NoBackgroundH2>
        </HeroText>
        <Logos
          githubLogo={githubLogo}
          linkedinLogo={linkedinLogo}
          stackOverflowLogo={stackOverflowLogo} />
        <PortraitImg src={profileImage} alt="Portrait" />
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
  max-height: 30rem;
  position: relative;
  width: 100vw;
  
  @media (min-width: 600px) {
  height: 30rem;
  display: flex;
  justify-content: center;
}
`
const HeroContainer = styled.div`
  position: relative;
  height: 100%;
  
  @media (min-width: 600px) {
    width: 100%;
    max-width: 1000px;
  }
`
const HeroText = styled.div`
  color: #FCF8EC;
  position: absolute;
  left: 1rem;
  top: 10rem;
  width: fit-content;

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
  right: 1rem;
  bottom: -1.5rem;
  width: 7rem;

@media (min-width: 600px) {
    width: 10rem;
}
`