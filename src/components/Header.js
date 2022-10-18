/* eslint-disable no-unused-vars */
import React from 'react';
import profileImage from '../images/portrait.webp';
// import styled from 'styled-components';

// const StyledHeader = styled.header`

// `

const Header = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <header className="hero">
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
    </header>
  )
}

export default Header;