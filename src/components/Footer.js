import React from 'react'
import styled from 'styled-components/macro'

import { Icons, OuterWrapper } from './Styles/Globalstyles.js'
import { Headings } from './Reusable/Headings';

const Footer = ({ linkedinLogo, githubLogo }) => {
  return (
    <FooterStyle>
      <Headings heading="Contact" />
      <p>Julia Östedt</p>
      <a href="mailto:julia.ostedt@gmail.com">
        julia.ostedt@gmail.com
      </a>
      <FooterIcons>
        <a href="https://www.linkedin.com/in/juliaostedt/" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/juliaostedt" aria-label="Link to GitHub profile">
          <img src={githubLogo} alt="github logo" />
        </a>
      </FooterIcons>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled(OuterWrapper)`
background-color: var(--color-darkGreen);
color: white;

@media screen and (min-width: 1024px) {
  a:hover {
    font-weight: 700;
  }
}
`
const FooterIcons = styled(Icons)`
  padding: 2rem;
  justify-content: center;

   & :hover {
      opacity: 75%;
      transition: 0.3s ease;
    }
    a:hover {
    border: none;
  }
`