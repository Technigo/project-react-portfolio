import React from 'react';
import styled from 'styled-components';
import { OverlinedHeading, Paragraph, Wrapper } from './GlobalStyles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <OverlinedHeading primary>Contact Me</OverlinedHeading>
      <ContactInfo>
        <Paragraph>Kartika Purwahyuningrum</Paragraph>
        <Paragraph>tikaprw@gmail.com</Paragraph>
        <Paragraph>+46-70203 4940</Paragraph>
      </ContactInfo>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled(Wrapper)`
  background-color: #006f45;
  padding-top: 20%;

  @media (min-width: 668px) and (max-width: 1023px) {
    padding-top: 10%;
  }

  @media (min-width: 1024px){
    padding-top: 10%;
  }
`
const ContactInfo = styled.div`
  margin: 5% auto;
  text-align: center;

  @media (min-width: 1024px){
    margin: 0 auto;
  }
`