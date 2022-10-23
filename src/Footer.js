import React from 'react';
import { StyledFooter, SocialMediaIcons } from 'GlobalStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <SocialMediaIcons>
        <a href="https://nl.linkedin.com/in/carimoreno" target="_blank" rel="noreferrer">
          <img src="General-Images/LinkedIn.png" alt="LinkedIn Profile Link" />
        </a>
        <a href="https://github.com/carimore" target="_blank" rel="noreferrer">
          <img src="General-Images/Github.png" alt="Github Profile Link" />
        </a>
        <a href="https://stackoverflow.com/users/19840222/carina-moreno" target="_blank" rel="noreferrer">
          <img src="General-Images/StackOverflow.png" alt="StackOverflow Profile Link" />
        </a>
      </SocialMediaIcons>

    </StyledFooter>

  )
}

export default Footer