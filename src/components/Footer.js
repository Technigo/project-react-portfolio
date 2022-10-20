import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper } from './global/GlobalStyling';

export const Footer = () => {
  const FooterBackground = styled.footer`
    text-align: center;
    background-color: #333;
    color: white;
    width: 100%;
    padding: 20px;
    `
  const FooterHeading = styled.h2`
    text-transform: uppercase;
    font-family: 'Montserrat';
    margin-bottom: 20px;
    font-weight: 700;
    font-size: 20px;
    `
  const FooterEmail = styled.a`
    color: white;
    font-size: 16px;
    font-family: 'Montserrat';
    text-decoration: none;
  `
  return (
    <OuterWrapper background>
      <FooterBackground>
        <InnerWrapper>
          <FooterHeading>contact</FooterHeading>
          <p>Annika Gadman</p>
          <p>+1 (630) 352-1117</p>
          <FooterEmail href="mailto:annika.gadman@gmail.com">annika.gadman@gmail.com</FooterEmail>
        </InnerWrapper>
      </FooterBackground>
    </OuterWrapper>
  )
}