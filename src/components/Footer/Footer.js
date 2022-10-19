/* eslint-disable linebreak-style */
import React from 'react'
import { FooterHeading, FooterText } from 'Globalstyles';
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <FooterHeading>CONTACT</FooterHeading>
      <FooterText>
        Sofie Rydmark<br />
        073-383 21 01<br />
        <a href="mailto:sofie.rydmark@gmail.com" id="email">
          sofie.rydmark@gmail.com
        </a>
      </FooterText>
    </StyledFooter>
  )
}

export default Footer;

