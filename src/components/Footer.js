import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';

export const Footer = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h2>Contact</h2>
        <FooterStyled>Saralie Bognandi</FooterStyled>
        <p>
          <a className="address-style" href="tel:+46 70 459 08 38 ">
            +46 70 459 08 38
          </a>
        </p>
        <p>
          <a href="saralie.bognandi@gmail.com" className="email">
            saralie.bognandi@gmail.com
          </a>
        </p>
      </InnerWrapper>
    </BlockSection>
  );
};

export const FooterStyled = styled.div`
  color: white;
`;
