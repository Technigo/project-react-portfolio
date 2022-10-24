import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

const FooterStyle = styled.div`
  background-color: var(--primaryBackground);
  color: var(--secondaryBackground);
  padding-bottom: 70px;
  flex-direction: column;
  text-align: center;
  font-family: Montserrat, sans-serif;
  line-height: 27px;

  .contact {
    font-size: 21px;
    padding: 40px 0 30px 0;
    font-weight: 600;
    font-family: Montserrat, sans-serif;
    letter-spacing: 1px;
  }

  .text{
    color: var(--secondaryBackground)
  
  }
  @media (min-width: 1025px) {
    .contact {
      font-size: 23px;
      font-weight: 500;
    }
  }
`;

const Footer = () => {
  return (
    <ContentWrapper as="footer" backgroundColor="var(--primaryBackground)">
      <FooterStyle>
        <h2 className="contact">CONTACT</h2>
        <p className="text" role="contentinfo">
          Petra Eriksson
        </p>
        <p className="text" role="contentinfo">
          +46 761 81 35 19
        </p>
        <p className="text" role="contentinfo">
          eriksson.petra@gmail.com
        </p>
      </FooterStyle>
    </ContentWrapper>
  );
};
export default Footer;
