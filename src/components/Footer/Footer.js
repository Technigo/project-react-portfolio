/* eslint-disable linebreak-style */
import { SectionHeadings, SectionText } from 'Globalstyles';
import React from 'react'
import { StyledFooter } from './Footer.styles';

const Footer = () => {
  return (
    <StyledFooter>
      <SectionHeadings textColor="black" bgColor="transparent">CONTACT</SectionHeadings>
      <SectionText color="#000000d9;">
        Sofie Rydmark<br />
        073-383 21 01<br />
        <a href="mailto:sofie.rydmark@gmail.com" id="email">
          sofie.rydmark@gmail.com
        </a>
      </SectionText>
    </StyledFooter>
  )
}

export default Footer;

