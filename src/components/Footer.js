import React from 'react';
import styled from 'styled-components';

import heroImage from 'assets/heroImage.jpg';

export const FooterWrapper = styled.section`
margin:0;
background-image: url(${heroImage});
background-size: cover;
width: 100%;  
height: 200px;
color: white;
postition: relative;
display: flex;
align-items: center;

`;

export const FooterContent = styled.p`
position: absolute;
left: 50%;
transform: translate(-50%);
font-size: 14px;
width:80%;

.line {
    border: 1px solid black;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
    margin-right: -8px;
}

@media (min-width: 668px) and (max-width: 1023px){
    width:70%;

    img{
        height: 65px
    }
}

@media (min-width: 1024px){
    width:50%;

  img{
  height: 75px;  
  } 
}
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
      CONTACT
      Name
      Surname
      +46 70 00 00 00
      name@email.com
      </FooterContent>
    </FooterWrapper>
  );
};