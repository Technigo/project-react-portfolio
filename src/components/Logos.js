import React from 'react'
import { LogoContainer, StyledLogo } from './ReusableStyles.style';

const Logos = ({ linkedinLogo, githubLogo }) => {
  return (
    <LogoContainer className="logo-container">
      <a href="https://www.linkedin.com/in/elin-s-683a867a/" aria-label="Link to LinkedIn profile">
        <StyledLogo src={linkedinLogo} className="logo" alt="LinkedIn icon" />
      </a>
      <a href="https://github.com/ElinSegelov" aria-label="Link to LinkedIn profile">
        <StyledLogo src={githubLogo} className="logo" alt="GitHub icon" />
      </a>
      {/* <a href="https://stackoverflow.com/c/technigo/users/375" aria-label="Link to LinkedIn profile">
            <StyledLogo src={stackOverflowLogo} className="logo" alt="StackOverflow logo"/>
          </a> */}
    </LogoContainer>

  )
}

export default Logos;

