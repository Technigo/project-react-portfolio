import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <StyledFooter>
      <StyledWrapper>
        <h2>Contact</h2>
        <p>Linus Eriksson</p>
        <p>+46 72 51 66 086</p>
        <p>erilinus@gmail.com</p>
      </StyledWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
    background-color: var(--color-black);
    color: var(--color-white);
  `;

const StyledWrapper = styled.footer`
  display: flex;
    flex-direction: column;
    align-items: center;
    padding: var(--section-x-padding);
`;