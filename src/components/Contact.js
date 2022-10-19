import React from 'react';
import { Section, SectionHeadline, SectionHeadlineBg } from 'StyledComponents/Section';
// import { FaLinkedinIn, FaGithub, FaStackOverflow } from 'react-icons/fa'
import styled from 'styled-components';

const Container = styled.div`
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display: block; 
justify-content: center;
text-align: center;
@media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
  
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em; }
`

const Info = styled.p`
font-family: 'Montserrat', sans-serif;
font-weight: ${(props) => (props.bold ? 'bold' : 'regular')};
`

const Link = styled.a`
text-decoration: none;
color: black;
`

const Contact = () => {
  return (
    <Section first>
      <SectionHeadline><SectionHeadlineBg>Contact</SectionHeadlineBg></SectionHeadline>
      <Container>
        <Info bold>Hanna Nörgård</Info>
        <Info>+46 734 22 29 23</Info>
        <Info>
          <Link href="mailto:hannanorgardgmail.com">hannanorgard@gmail.com</Link>
        </Info>
      </Container>
    </Section>
  )
}

export default Contact;