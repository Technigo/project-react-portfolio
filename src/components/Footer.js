import React from 'react';
import styled from 'styled-components/macro';
import ClipBoard from './Clipboard';
import { NoBackgroundH2 } from './ReusableStyles.style';

const Footer = () => {
  return (
    <StyledFooter>
      <NoBackgroundH2>Contact</NoBackgroundH2>
      <ContactWrapper>
        <p>Elin Segelöv</p>
        <ClipBoard>
          <p><span className="sr-only">E-mail</span>elin.segelov@gmail.com</p>
        </ClipBoard>
      </ContactWrapper>
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

const ContactWrapper = styled.div`
position: relative;
width: fit-content;
margin: 0 auto;
`