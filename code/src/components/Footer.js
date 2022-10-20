import React from 'react'
import styled from 'styled-components'

const Footer = ({ linkedinLogo, githubLogo }) => {
  return (
    <FooterStyle>
      <h2>Contact</h2>
      <p>Julia Östedt</p>
      <a href="mailto:julia.ostedt@gmail.com" className="email">
          julia.ostedt@gmail.com
      </a>
      <div className="logo-container">
        <a href="https://www.linkedin.com/julia-ostedt" aria-label="Link to LinkedIn profile">
          <img src={linkedinLogo} className="logo" alt="LinkedIn logo" />
        </a>
        <a href="https://github.com/juliaostedt" aria-label="Link to LinkedIn profile">
          <img src={githubLogo} className="logo" alt="github logo" />
        </a>
      </div>
    </FooterStyle>
  )
}

export default Footer

const FooterStyle = styled.footer`
background-color: var(--color-darkGreen);
color: white;

& a {
    color: white;
}
`