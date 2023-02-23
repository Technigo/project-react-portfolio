import React from 'react'
import styled from 'styled-components/macro'

import profileImg from '../../assets/profile-img.jpg'
import backgroundImg from '../../assets/hero-1.jpg'
import { Icons, InnerWrapper, OuterWrapper } from '../Styles/Globalstyles.js'

const Header = ({ linkedinLogo, githubLogo }) => {
  return (
    <StyledHeader>
      <InnerWrapper>
        <HeaderIcons>
          <a
            href="https://www.linkedin.com/in/juliaostedt/"
            title="Link to LinkedIn Profile"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to LinkedIn profile">
            <img src={linkedinLogo} alt="LinkedIn logo" />
          </a>
          <a
            href="https://github.com/juliaostedt"
            title="Link to GitHub Profile"
            target="_blank"
            rel="noreferrer"
            aria-label="Link to LinkedIn profile">
            <img src={githubLogo} alt="GitHub logo" />
          </a>
        </HeaderIcons>
        <HeadingsContainer>
          <h1>Portfolio: <span>Julia Östedt</span></h1>
          <h2>frontend developer</h2>
          <h3>with an executive assistant background</h3>
        </HeadingsContainer>
        <ProfileImg
          src={profileImg}
          alt="headshot-of-Julia" />
      </InnerWrapper>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled(OuterWrapper)`
  background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  height: 50vh;
  position: relative;

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 40vh;
  }

  @media screen and (min-width: 1024px) {
    height: 45vh;
  }
`

const HeadingsContainer = styled.div`
  position: absolute;
  max-width: 55%;
  color: whitesmoke;
  top: 30%;
  left: 10%;

  & h1 {
  font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  color: white;
  }
  
  & span {
  font-weight: 700;
  }

  & h2 {
  font-weight: 700;
  line-height: 1.2em;
  font-size: 2em;
  }

  & h3 {
  line-height: 1.5em;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
  left: 20%;
  max-width: 30%;
  transform: scale(1.2) ;
  }

  @media screen and (min-width: 1024px) {
  left: 30%;
  top: 40%;
  max-width: 20%;
  transform: scale(1.3)
  }
`

const ProfileImg = styled.img`
 position: absolute;
  right: 8%;
  bottom: -5%;
  opacity: 93%;
  border-radius: 50%;
  width: 160px;

  @media (min-width: 667px) and (max-width: 1024px) {
    right: 20%;
    bottom: -3%;
    transform: scale(1.2);
  }

  @media screen and (min-width: 1024px) {
    right: 30%;
    bottom: 0;
    transform: scale(1.4);

  }
`
const HeaderIcons = styled(Icons)`
  position: absolute;
  top: 10%;
  right: 8%;
  
  @media (min-width: 667px) and (max-width: 1024px) {
    right: 20%
  }
  @media screen and (min-width: 1024px) {
    right: 30%;

  }

`
