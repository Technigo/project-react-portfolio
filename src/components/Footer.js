import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <h2 className="footer-heading">Contact</h2>
      <p>Elin Segelöv</p>
      <a href="mailto:elin.segelov@gmail.com">
        <p><span className="sr-only">E-mail</span>elin.segelov@gmail.com</p>
      </a>
    </StyledFooter>
  )
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--ligtherGreen);
  padding-bottom: 40px;
  text-align: center;

h2 {
  background: none;
}
p {
  color: #FFF;
  display: block;
  font-family: 'Montserrat', serif;
  margin: 0 auto;
}
`