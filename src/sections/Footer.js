import React from 'react';
import styled from 'styled-components';

import { InnerWrapper } from 'styles/MainStyles';

const Footer = () => {
  const StyledFooter = styled.footer`
    background-color: var(--color-black);
    color: var(--color-white);
    `;

  return (
    <StyledFooter>
      <InnerWrapper>
        <h2>Contact</h2>
        <p>Contact info goes here</p>
      </InnerWrapper>
    </StyledFooter>
  );
};
export default Footer;