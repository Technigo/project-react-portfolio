/*eslint-disable linebreak-style*/   
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces*/  
/*eslint-disable no-multiple-empty-lines*/  
import React from 'react';
import styled from 'styled-components';
import { Section} from 'GlobalStyles';


const FooterStyles = styled.div`
font-family: 'montserrat';
text-align:center;
background-color:#2e5894 ;
color: white;
text-align: center;
padding: 5% 0% 5% 0%;
`

const FooterText  = styled.div`
font-size: 1rem;
letter-spacing: 0.10rem;
line-height: 40px; 
`

export const Footer = () =>
   {
    return (
   <Section>
    <FooterStyles>
       <FooterText>
        <p>Johanna Rosenholm </p>
        <p>Rosenholm.Johanna88@gmail.com</p>
        <p>+46 70 980 90 30</p> 
       </FooterText>
    </FooterStyles>
    </Section>
    );
  };

export default Footer;
