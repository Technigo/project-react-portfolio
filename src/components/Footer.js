import React from 'react'
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './GlobalStyles';

export const Footer = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ContactHeading> Contact
        </ContactHeading>
        <ContactInfo>Neah Rockstroh</ContactInfo>
        <ContactInfo>Telefonnummer</ContactInfo>
        <ContactInfo>Email</ContactInfo>
      </InnerWrapper>
    </OuterWrapper>
  );
};
const ContactHeading = styled.h2`
text-align: center;
margin: 5%;
`;

const ContactInfo = styled.p`
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.2em;
line-height: 138%;
text-align: center;
`;