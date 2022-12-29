/* eslint-disable linebreak-style */
import { SectionHeadings, SectionText } from 'Globalstyles';
import React from 'react'
import { StyledFooter, FooterSocialBar } from './Footer.styles';

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
      <FooterSocialBar>
        <a href="https://stackoverflow.com/c/technigo/users/394/" title="stackOverflow" role="button" aria-pressed="false" aria-label="stackOverflow-profile" target="_blank" rel="noreferrer"><i className="fa fa-stack-overflow" /></a>
        <a href="https://www.linkedin.com/in/sofierydmark/" title="LinkedIn" role="button" aria-pressed="false" aria-label="linkedin-profile" target="_blank" rel="noreferrer"><i className="fa fa-linkedin" /></a>
        <a href="https://github.com/SofieRydmark" title="github" role="button" aria-pressed="false" aria-label="github-profile" rel="noreferrer" target="_blank"><i className="fa fa-github" /></a>
      </FooterSocialBar>
    </StyledFooter>
  )
}

export default Footer;

