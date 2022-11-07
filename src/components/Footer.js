import React from 'react'
import styled from 'styled-components'

import { Icons } from './StyleComp.js'

const Footer = ({ linkedinLogo, githubLogo }) => {
  return (
    <FooterStyle>
      <h2>Contact</h2>
      <p>Julia Östedt</p>
      <a href="mailto:julia.ostedt@gmail.com">
          julia.ostedt@gmail.com
      </a>
      <FooterIcons>
        <a href="https://www.linkedin.com/in/juliaostedt/" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/juliaostedt" aria-label="Link to LinkedIn profile">
          <img src={githubLogo} alt="github logo" />
        </a>
      </FooterIcons>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
background-color: var(--color-darkGreen);
color: white;
text-align: center;
font-family: 'Montserrat', sans-serif;
padding: 2em;
line-height: 1.2em;

& h2 {
  font-weight: 700;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 2.5em;
}

@media screen and (min-width: 1024px) {
  a:hover {
    border-bottom: 2px solid #fff;
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