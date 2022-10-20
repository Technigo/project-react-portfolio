import React from 'react'
import styled from 'styled-components'

import profileImg from '../assets/profile-img.jpg'
import backgroundImg from '../assets/hero-1.jpg'

const Header = ({ linkedinLogo, githubLogo }) => {
  return (
    <HeaderStyling>
      <div className="header-container">
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
      <Icons>
        <a href="https://www.linkedin.com/julia-ostedt" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/juliaostedt" aria-label="Link to LinkedIn profile">
          <img src={githubLogo} className="logo" alt="github logo" />
        </a>
      </Icons>
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
  `
const HeaderText = styled.div`
  position: absolute;
  top: 7rem;
  left: 3rem;
  max-width: 250px;

  & h1 {
    font-weight: 700;
    line-height: 1em;
  }

  & h2 {
    line-height: 25px;
  }

  & p {
    font-family: "Roboto", sans-serif;
    text-transform: uppercase;
    color: #fff;
  }
  & span {
    font-weight: 700;
  }
`
const ImgContainer = styled.div`
  position: absolute;
  bottom: -5%;
  right: 10%;
`
const ProfileImg = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 50%;
  opacity: 93%;
`
const Icons = styled.div`
  position: absolute;
  top: 50px;
  right: 25px;
  display: flex;
  gap: 10px;

& :hover {
  opacity: 75%;
  transition: 0.3s ease;
}

& img {
  height: 50px;
}
`
