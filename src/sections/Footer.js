import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Footer = () => {
  return (
    <StyledFooter>
      <OuterWrapper>
        <InnerWrapper>
          <h2>Contact</h2>
          <StyledWrapper>
            <p>Linus Eriksson</p>
            <p>+46 72 51 66 086</p>
            <p>erilinus@gmail.com</p>
          </StyledWrapper>
        </InnerWrapper>
      </OuterWrapper>
    </StyledFooter>
  );
};
export default Footer;

const StyledFooter = styled.footer`
    width: 100vw;
    background-color: var(--color-black);
    color: var(--color-white);
  `;

const StyledWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    @media (min-width: 668px) {
        align-items: flex-start;
    }
`;