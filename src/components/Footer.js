import React from 'react';
import styled from 'styled-components/macro';
// import { InnerWrapper } from '../library/GlobalStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>CONTACT</FooterTitle>
      <p>Linda Norberg</p>
      <p>+46 739 06 99 23</p>
      <a href="mailto:linda@norberg.tv">or send me a e-mail here</a>
    </FooterWrapper>
  );
};

const FooterTitle = styled.h5`
    color: whitesmoke;
    letter-spacing: 2px;
    font-size: 1.5rem;
    padding-bottom: 20px;
`
const FooterWrapper = styled.div`
    width: 100%;
    background-color: var(--color-darkGreen);
    color: whitesmoke;
    text-align: center;
    padding: 45px 0 60px 0;
    line-height: 1.5;
    font-family: 'Montserrat', sans-serif;
    
    a {
      color: whitesmoke;
      &: hover{color: grey};
    }
`