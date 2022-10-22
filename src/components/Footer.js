import React from 'react';
import styled from 'styled-components';

import heroImage from 'assets/heroImage.jpg';

export const FooterWrapper = styled.section`
background-image: url(${heroImage});
margin:0;
background-size: cover;
width: 100%;  

color: white;
display: flex;
align-items: center;
justify-content:center;

`;

export const FooterContent = styled.div`
font-size: 14px;
width:80%;
display:flex;
flex-direction:column;
align-items:center;
padding:50px 0 80px 0;

p.contact{
    font-weight: 700;
    line-height:1;
    font-size: 24px;
}

p{
    line-height: 0;
    font-size: 21px;
}


@media (min-width: 668px){

p.contact{
    font-size:38px;
}

p{
    font-size:30px;
}

`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p className="contact">CONTACT</p>
        <p>Sofia Andersson</p>
        <p>+46 70 00 00 00</p>
        <p>sofia.e.i.andersson@gmail.com</p>
      </FooterContent>
    </FooterWrapper>
  );
};