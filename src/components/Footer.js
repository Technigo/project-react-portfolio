import React from 'react';
import styled from 'styled-components';
import { NoBackgroundH2 } from './ReusableStyles.style';

const Footer = () => {
  return (
    <StyledFooter>
      <NoBackgroundH2 className="footer-heading">Contact</NoBackgroundH2>
      <p>Elin Segelöv</p>
      <p><span className="sr-only">E-mail</span>elin.segelov@gmail.com</p>
    </StyledFooter>
  )
}

export default Footer;

const StyledFooter = styled.footer`
  background-color: var(--ligtherGreen);
  padding-bottom: 40px;
  text-align: center;

p {
  color: #FFF;
  display: block;
  font-family: 'Montserrat', serif;
  margin: 0 auto;
}
`