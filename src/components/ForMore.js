/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';
import { StyledLogo } from './ReusableStyles.style';

const ForMore = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <section className="for-more">
      <h2>For more</h2>
      <StyledDarkLogoContainer className="FMlogo-container">
        <a href="https://www.linkedin.com/in/elin-s-683a867a/" aria-label="Link to LinkedIn profile">
          <DarkLogo src={linkedinLogo} className="logo dark-logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/ElinSegelov" aria-label="Link to Github profile">
          <DarkLogo src={githubLogo} className="logo dark-logo" alt="Github logo" />
        </a>
        {/* <a href="https://stackoverflow.com/c/technigo/users/375" aria-label="Link to Stack Overflow profile">
          <DarkLogo src={stackOverflowLogo} className="logo dark-logo" alt="Stack Overflow logo" />
        </a> */}
      </StyledDarkLogoContainer>
    </section>
  )
}

export default ForMore;

const DarkLogo = styled(StyledLogo)`
  height: 48px;
  filter: invert(13%) sepia(18%) saturate(351%) hue-rotate(149deg) brightness(20%) contrast(95%);
  margin: 0 .5rem;
  width: 48px;

  @media (min-width: 600px) {
    height: 4rem;
    width: 4rem;
  }
`

const StyledDarkLogoContainer = styled.div`
 display: flex;
 justify-content: center;

  
`