import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from './reusable/Wrappers';

export const Footer = () => {
  const FooterBackground = styled.footer`
    text-align: center;
    color: whitesmoke;
    width: 100%;
    padding: 70px 0px;
    background-color: var(---secondary);
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
  `;
  const FooterHeading = styled.h3`
    text-transform: uppercase;
    margin: 30px, 0px, 10px 0px;
    color: var(---highlight);
    font-weight: bold;
   
  `;
  const FooterEmail = styled.a`
    color: whitesmoke;
    font-size: 16px;
    font-weight: 500;
    text-decoration: none;
    padding: 2px;
  `;
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