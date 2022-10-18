/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

const ForMore = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <section className="for-more">
      <h2>For more</h2>
      <StyledDarkLogoContainer className="FMlogo-container">
        <a href="https://www.linkedin.com/in/elin-s-683a867a/" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} className="logo dark-logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/ElinSegelov" aria-label="Link to Github profile">
          <img src={githubLogo} className="logo dark-logo" alt="Github logo" />
        </a>
        {/* <a href="https://stackoverflow.com/c/technigo/users/375" aria-label="Link to Stack Overflow profile">
          <img src={stackOverflowLogo} className="logo dark-logo" alt="Stack Overflow logo" />
        </a> */}
      </StyledDarkLogoContainer>
    </section>
  )
}

export default ForMore;

const StyledDarkLogoContainer = styled.div`
 display: flex;
 justify-content: center;

img {
  height: 48px;
  filter: invert(13%) sepia(18%) saturate(351%) hue-rotate(149deg) brightness(20%) contrast(95%);
  margin: 0 .5rem;
  width: 48px;
}
`