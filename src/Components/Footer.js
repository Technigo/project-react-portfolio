import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';

const FooterStyle = styled.div`
background-color: var(--primaryBackground);
color: var(--secondaryBackground);
padding-bottom: 70px;
border: solid 3px black;
flex-direction: column;
text-align: center;
font-family: Montserrat, sans-serif;
line-height: 27px;

.contact {
  font-size: 20px;
  padding: 40px 0 30px 0;
  font-weight: 700;
}
`

const Footer = () => {
  return (
    <ContentWrapper
      as="footer"
      backgroundColor="var(--primaryBackground)">
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
