import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Footer = () => {
  const FooterBackground = styled.footer`
    text-align: center;
    background-color: var(---highlight);
    color: white;
    width: 100%;
    padding: 30px;
    `
  const FooterHeading = styled.h3`
    text-transform: uppercase;
    margin: 30px, 0px, 10px 0px;
   
    `
  const FooterEmail = styled.a`
    color: white;
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