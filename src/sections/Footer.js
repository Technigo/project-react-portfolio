import React from 'react';
import styled from 'styled-components';

import { InnerWrapper } from 'styles/MainStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <InnerWrapper>
        <h2>Contact</h2>
        <p>Linus Eriksson</p>
        <p>+46 72 51 66 086</p>
        <p>erilinus@gmail.com</p>
      </InnerWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
    background-color: var(--color-black);
    color: var(--color-white);
    `;