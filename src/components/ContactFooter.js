import React from 'react';
import { Section, SectionTitle, TextWrapper } from 'styledcomponents/Section';
import styled from 'styled-components'

const ContactFooter = () => {
  return (
    <Section>
      <SectionTitle>CONTACT</SectionTitle>
      <FooterWrap>
        <FooterContainer>
          <h2>Cecilia Frålund</h2>
          <h2>Frontend Developer</h2>
          <h2>ceciliafraanlund@gmail.com</h2>
          <h2>+46 728 5454 14</h2>
          <h2>Stockholm, Sweden</h2>
        </FooterContainer>
      </FooterWrap>
    </Section>
  );
};
export default ContactFooter;

const FooterWrap = styled(TextWrapper)`
display:flex;
`

const FooterContainer = styled.div`
border: red solid 3px;
margin: 0 auto;
text-align: center;

h2{
    color:black;
    line-height: 1rem;
    font-weight: 400;
    font-size: 1.2rem;
}

`