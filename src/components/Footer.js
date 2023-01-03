import React from 'react';
import styled from 'styled-components/macro';
import { InnerWrapper } from '../library/GlobalStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>CONTACT</FooterTitle>
      <p>Linda Norberg</p>
      <p>+46 739 06 99 23</p>
      <a href="mailto:linda@norberg.tv">or send me a mail here</a>
    </FooterWrapper>
  );
};

const FooterTitle = styled.h5`
    color: white;
    letter-spacing: 2px;
    font-size: 1.5rem;
    padding-bottom: 20px;
`
const FooterWrapper = styled(InnerWrapper)`
    width: 100%;
    background-color: var(--color-darkGreen);
    color: whitesmoke;
    text-align: center;
    padding: 45px 0 60px 0;
    line-height: 1.5;
    
    a {
      color: whitesmoke;
      &: hover{color: grey};
    }
`