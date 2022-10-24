import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './styles/Wrappers';

export const Footer = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <FooterStyled>
          <h4>Contact</h4>
          <p>Saralie Bognandi</p>
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
        </FooterStyled>
      </InnerWrapper>
    </BlockSection>
  );
};

export const FooterStyled = styled.div`
  color: white;
  text-align: center;

  p {
    font-family: 'Roboto', sans-serif;
    color: #2b2e34;
    font-weight: bold;
    color: white;
    text-align: center;
  }

  h4 {
    margin: 10px;
  }
`;
