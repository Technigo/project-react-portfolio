import styled from 'styled-components';
import React from 'react'

export const Footer = () => {
  return (
    <FooterDesign>
      <FooterContact>
        <h2>Contact</h2>
      </FooterContact>
      <FooterText>
        <p>Charlotte Johansson</p>
        <p>+46 702798296</p>
        <p>lottaajohansson@live.se</p>
      </FooterText>
    </FooterDesign>
  )
}

export default Footer;

const FooterDesign = styled.div`
  background-color: #C4D7E0;
  height: 400px;
`

const FooterContact = styled.h2`
   font-size: 22px;
    text-align: center;
    font-weight: bold;
    color: #1C658C;
    text-align: center;
`

const FooterText = styled.p`
    text-align: center;
    color: #1C658C;
`