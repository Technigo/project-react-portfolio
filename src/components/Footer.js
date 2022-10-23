import React from 'react'
import styled from 'styled-components';
import { InnerWrapper } from './GlobalStyles';

export const Footer = () => {
  return (
    <FooterContainer>
      <InnerWrapper>
        <ContactHeading> Contact
        </ContactHeading>
        <ContactInfo>Neah Rockstroh</ContactInfo>
        <ContactInfo>+46 762053206</ContactInfo>
        <ContactInfo>neah.rockstroh@gmail.com</ContactInfo>
      </InnerWrapper>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
background-color: #ff7b00;
padding: 5%;
color: white;
`;

const ContactHeading = styled.h2`
text-align: center;
margin: 5%;
text-shadow: -0.5px 0.5px 0 #000;
`;

const ContactInfo = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.2em;
line-height: 138%;
text-align: center;
margin: 1%;
`;