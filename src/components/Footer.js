import React from 'react';
import styled from 'styled-components/macro';
import { Devices } from 'styles/mainStyles';

// Contact-information
const Footer = () => {
  return (
    <FooterWrapper>
      <FooterHeadline>CONTACT</FooterHeadline>
      <FooterText>Linda Malm</FooterText>
      <FooterText>+46 73 951 79 71</FooterText>
      <FooterText>linda.malm237@gmail.com</FooterText>
      <FooterInfo>This page is hosted on a server that I built myself.</FooterInfo>
    </FooterWrapper>
  )
}

export default Footer;

// Styled components
const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 200px; 
  width: 100vw;
  background: #48a0a4; 
  font-family: 'Montserrat', sans-serif;

  @media ${Devices.tablet} {
    height: 300px; 
    padding-bottom: 5%;
  }

  @media ${Devices.laptop} {
    height: 300px; 
    padding-bottom: 5%;
  }
`

const FooterHeadline = styled.h2`
  color: #FFFFFF;
  font-weight: bold;
  font-size: 21px;
  padding-bottom: 10%;

  @media ${Devices.tablet} {
    font-size: 25px;
    padding-bottom: 3%;
  }

  @media ${Devices.laptop} {
    font-size: 25px;
    padding-bottom: 3%;
  }
`

const FooterText = styled.p`
  color: #FFFFFF;
  font-size: 17px;
  line-height: 25px;

  @media ${Devices.tablet} {
    font-size: 18px;
  }

  @media ${Devices.laptop} {
    font-size: 18px;
  }
`

const FooterInfo = styled.p`
  color: #FFFFFF;
  font-size: 17px;
  line-height: 25px;
  padding-top: 1%;
  text-align: center;

  @media ${Devices.tablet} {
    font-size: 18px;
  }

  @media ${Devices.laptop} {
    font-size: 18px;
  }
`