import React from 'react';
import styled from 'styled-components';
import { Section, SectionTitle, TextWrapper } from 'components/Section';

const ContactFooter = () => {
  return (
    <Footer>
      <SectionTitle>CONTACT</SectionTitle>
      <FooterWrap>
        <FooterContainer>
          <h2>Cecilia Frånlund</h2>
          <h2>frontend developer</h2>
          <h2>ceciliafraanlund@gmail.com</h2>
          <h2>+46 728 5454 14</h2>
          <h2>Stockholm, Sweden</h2>
        </FooterContainer>
      </FooterWrap>
    </Footer>
  );
};
export default ContactFooter;

const FooterWrap = styled(TextWrapper)`
display:flex;
`

const FooterContainer = styled.div`
margin: 0 auto;
text-align: center;
padding-bottom: 50px;

h2{
    color: white;
    line-height: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
}
`;

const Footer = styled(Section)`
background-color: #42404A;
`;