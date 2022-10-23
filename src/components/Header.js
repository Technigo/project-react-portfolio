import React from 'react'
import styled from 'styled-components'

import profileImg from '../assets/profile-img.jpg'
import backgroundImg from '../assets/hero-1.jpg'
import { Icons } from './StyleComp.js'

const Header = ({ linkedinLogo, githubLogo }) => {
  return (
    <HeaderStyling>
      <div>
        <HeaderText>
          <p>Portfolio: <span>Julia Östedt</span></p>
          <h1>frontend developer</h1>
          <h2>with an executive assistant background</h2>
        </HeaderText>
        <ImgContainer>
          <ProfileImg
            src={profileImg}
            alt="headshot-of-Julia" />
        </ImgContainer>
      </div>
      <HeaderIcons>
        <a href="https://www.linkedin.com/julia-ostedt" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/juliaostedt" aria-label="Link to LinkedIn profile">
          <img src={githubLogo} alt="github logo" />
        </a>
      </HeaderIcons>
    </HeaderStyling>
  )
}

export default Header

const HeaderStyling = styled.header`
  background: linear-gradient(rgba(82, 81, 81, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImg});
  background-size:cover;
  background-repeat: no-repeat;
  color: white;
  height: 45vh;
  width: 100%;
  position: relative;

  @media (min-width: 667px) and (max-width: 1024px) {
    height: 40vh;
  }

  @media screen and (min-width: 1024px) {
    height: 60vh;
  }
`
const HeaderText = styled.div`
  position: absolute;
  top: 30%;
  left: 8%;
  max-width: 55%;
  font-family: "Montserrat", sans-serif;

  & h1 {
    font-weight: 700;
    line-height: 1.1em;
    font-size: 2em;
  }

  & h2 {
    line-height: 1.5em;
    font-size: 1rem
  }

  & p {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    color: white;
  }
  & span {
    font-weight: 700;
  }

   @media (min-width: 667px) and (max-width: 1024px) {
    left: 20%;
    max-width: 30%;
    transform: scale(1.2) ;
  }
  @media screen and (min-width: 1024px) {
    left: 30%;
    max-width: 20%;
    transform: scale(1.3)
  }
`
const ImgContainer = styled.div`
  position: absolute;
  bottom: -5%;
  right: 8%;

 @media (min-width: 667px) and (max-width: 1024px) {
    right: 20%;
    bottom: 0;
  }
  @media screen and (min-width: 1024px) {
    bottom: -2%;
    right: 30%;
  }
`
const ProfileImg = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  opacity: 93%;

  @media screen and (min-width: 768px) {
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
    
    & :hover {
      opacity: 75%;
      transition: 0.3s ease;
    }
  }

`
