/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import profileImage from '../images/portrait.webp';
import heroImage from '../images/hero-img.webp'

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
  .hero-container {
  position: relative;
  width: 90%;
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
.logo {
  height: 3rem;
  margin: 0 .1rem;
  width: 3rem;
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
`

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledHeader className="hero">
      <div className="hero-container">
        <div className="hero-text">
          <h3 className="name-heading">Portfolio: Elin Segelöv</h3>
          <h1>frontend <br /> developer</h1>
          <h2 className="">with a background in social work</h2>
        </div>
        <div className="logo-container">
          <a href="https://www.linkedin.com/in/elin-s-683a867a/" aria-label="Link to LinkedIn profile">
            <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
          </a>
          <a href="https://github.com/ElinSegelov" aria-label="Link to LinkedIn profile">
            <img src={githubLogo} className="logo" alt="github logo" />
          </a>
          {/* <a href="https://stackoverflow.com/c/technigo/users/375" aria-label="Link to LinkedIn profile">
            <img src={stackOverflowLogo} className="logo" alt="StackOverflow logo"/>
          </a> */}
        </div>

        <img src={profileImage} className="portrait-img" alt="Portrait" />
      </div>
    </StyledHeader>
  )
}

export default Header;