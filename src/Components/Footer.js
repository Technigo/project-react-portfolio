import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

const Footer = () => {
  const FooterStyle = styled.div`
  border: solid 2px red;
  background-color: var(--primaryBackground);
  color: var(--secondaryBackground);
  padding-bottom: 90px;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  text-align: center;
  line-height: 27px;
  text-align: center;
`
  return (
    <ContentWrapper as="footer" textColor="var(--secondaryBackground)">
      <FooterStyle>
        <h2 className="contact">CONTACT</h2>
        <p className="text" role="contentinfo">Petra Eriksson</p>
        <p className="text" role="contentinfo">+46 761 81 35 19</p>
        <p className="text" role="contentinfo">eriksson.petra@gmail.com</p>
      </FooterStyle>
    </ContentWrapper>
  );
};
export default Footer;
