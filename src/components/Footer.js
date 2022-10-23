import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Footer = () => {
  const FooterBackground = styled.footer`
    text-align: center;
    background-color: #f4a5e1;
    color: rgb(135, 133, 133);
    width: 100%;
    padding: 70px 0px;
    background-color: rgba(208, 203, 203, 0.572);
    border-top: solid #c8aa89c6 1px;
    `
  const FooterHeading = styled.h3`
    text-transform: uppercase;
    margin: 30px, 0px, 10px 0px;
   
    `
  const FooterEmail = styled.a`
    color: rgb(135, 133, 133);
    font-size: 16px;
    text-decoration: none;
    padding: 2px;
    font-weight: 450;
  `
  return (
    <OuterWrapper>
      <FooterBackground>
        <InnerWrapper>
          <FooterHeading>contact</FooterHeading>
          <p>Caroline Söderström</p>
          <FooterEmail href="mailto:caroline.soderstrom@gmail.com">caroline.soderstrom@gmail.com</FooterEmail>
          <p>Remote, Europe</p>
        </InnerWrapper>
      </FooterBackground>
    </OuterWrapper>
  )
}