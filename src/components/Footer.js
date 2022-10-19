import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterStyler>
      <div>
        <p>Petra Söderström</p>
        <a href="mailto:petrasoderstrom1612@gmail.com">
        petrasoderstrom1612@gmail.com
        </a>
      </div>
      <div>
        <a href="https://www.linkedin.com/in/petra-soderstrom" target="_blank" rel="noreferrer">
          <div>
            <img
              aria-label="visit my linked in"
              src="images/linkedin-logo-pink.png"
              alt="linked-in-icon" />
          </div>
        </a>
        <a href="https://github.com/Petrasoderstrom1612" target="_blank" rel="noreferrer">
          <div>
            <img
              aria-label="visit my github"
              src="images/github-logo-pink.png"
              alt="github-icon" />
          </div>
        </a>
        <a href="https://www.instagram.com/petra_kodar/" target="_blank" rel="noreferrer">
          <div>
            <img
              aria-label="visit my github"
              src="images/instagram-logo-pink.png"
              alt="instagram-icon" />
          </div>
        </a>
      </div>
    </FooterStyler>
  )
}

export default Footer;

const FooterStyler = styled.footer`
display: flex;
justify-content: center;
flex-direction: column;
border-style: solid;
`
