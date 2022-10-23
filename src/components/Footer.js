import React from 'react';
import styled from 'styled-components';
import { InnerWrapper } from '../library/GlobalStyles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterTitle>CONTACT</FooterTitle>
      <div>Linda Norberg</div>
      <div>+46 739 06 99 23</div>
      <div>linda@norberg.tv</div>
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
`