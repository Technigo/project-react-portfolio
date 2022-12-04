import React from 'react';
import styled from 'styled-components/macro';
import { SmallHeadline } from 'styles/GlobalStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <SmallHeadline>CONTACT</SmallHeadline>
      <p>Thérèse Ånmark</p>
      <p>+46 769 417 655</p>
      <p>thereseanmark@hotmail.com</p>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.div`
     background-color: var(--third-bg-color);
     text-align: center;
     color: #585B58;
     padding-top: 1.5rem;
     padding-bottom: 1.5rem;
`;

export default Footer