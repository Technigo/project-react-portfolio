import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BlockSection, InnerWrapper } from './styles/Wrappers';

export const Footer = () => {
  return (
    <FooterBlockSection>
      <InnerWrapper>
        <FooterStyled>
          <h4>Contact</h4>
          <p>Saralie Bognandi</p>
          <p>
            <a className="address-style" href="tel:+46 70 459 08 38 ">
              <FontAwesomeIcon icon={faPhone} /> +46 70 459 08 38
            </a>
          </p>
          <p>
            <a href="mailto: saralie.bognandi@gmail.com" className="email">
              <FontAwesomeIcon icon={faEnvelope} /> saralie.bognandi@gmail.com
            </a>
          </p>
        </FooterStyled>
      </InnerWrapper>
    </FooterBlockSection>
  );
};

const FooterStyled = styled.div`
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

const FooterBlockSection = styled(BlockSection)`
  background-color: blue;
`;
