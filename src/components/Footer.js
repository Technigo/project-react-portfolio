import React from 'react';
import styled from 'styled-components';
import { OverlinedHeading, MainText, Wrapper } from './GlobalStyles';

export const Footer = () => {
  return (
    <FooterWrapper>
      <OverlinedHeading primary>Contact Me</OverlinedHeading>
      <ContactInfoContainer>
        <MainText>Kartika Purwahyuningrum</MainText>
        <MainText>tikaprw@gmail.com</MainText>
        <MainText>+46-70203 4940</MainText>
      </ContactInfoContainer>
    </FooterWrapper>
  )
}

export const FooterWrapper = styled(Wrapper)`
  background: linear-gradient(180deg, #003333, #001F1F, #001515);
  padding-top: 20%;

  @media (min-width: 668px){
    padding-top: 10%;
  }
`

const ContactInfoContainer = styled.div`
  margin: 5% auto;
  text-align: center;

  @media (min-width: 1024px){
    margin: 2% auto;
  }
`