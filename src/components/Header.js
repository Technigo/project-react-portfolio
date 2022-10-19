import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/portrait.webp';
import heroImage from '../images/hero-img.webp'
import Logos from './Logos';

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledHeader className="hero">
      <HeroContainer className="hero-container">
        <div className="hero-text">
          <h3 className="name-heading">Portfolio: Elin Segelöv</h3>
          <h1>frontend <br /> developer</h1>
          <h2 className="">with a background in social work</h2>
        </div>
        <Logos
          githubLogo={githubLogo}
          linkedinLogo={linkedinLogo}
          stackOverflowLogo={stackOverflowLogo} />

        <img src={profileImage} className="portrait-img" alt="Portrait" />
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

  h2 {
  background: none;
  margin-top: 0;
  text-align: left;
  text-transform: lowercase;
  }

  h3 {
  background-color: transparent;
  color: #FCF8EC;
  margin: 0;
  padding: 0;
  }

.hero-text {
  color: #FCF8EC;
  position: absolute;
  left: 1rem;
  top: 7rem;
}
.logo-container {
  height: 5rem;
  position: absolute;
  right: 1rem;
  top: 2rem;
}

.portrait-img {
  border: solid white 2px;
  border-radius: 50%;
  object-fit: cover;
  position: absolute;
  right: -1rem;
  top: 49vh;
  width: 7rem;
}
@media (min-width: 600px) {
  display: flex;
  justify-content: center;

  h1 {
    font-weight: 700;
    font-size: 50px;
    letter-spacing: .2rem;
  }

  .hero-text {
    top: 10rem; 
  }
  .portrait-img {
    right: 1rem;
    top: 43vh;
    width: 20vh;
  }
}
`
const HeroContainer = styled.div`
  position: relative;
  width: 90%;

  @media (min-width: 600px) {
    max-width: 1000px;
  }
`