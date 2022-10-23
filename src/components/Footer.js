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
padding:50px 0 40px 0;

p.contact{
    font-weight: 700;
    line-height:1;
    font-size: 24px;
}

p{
    line-height: 0;
    font-size: 21px;
}

.typingWrapper {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.typing {
  width: 25ch;
  animation: typing 10s steps(30, end) infinite, blink-caret .5s step-end infinite;
  white-space: nowrap;
  overflow: hidden;
  border-right: 3px solid;
  font-family: "Roboto", sans-serif;
  font-size: 21px;
  color: white;
  padding-top:10px;
}

@keyframes typing {
  from {
    width: 0;
  }
  50% {
    width:100%
  }
}
    
@keyframes blink {
  50% {
    border-color: transparent
  }
}

@media (min-width: 668px){

p.contact{
    font-size:38px;
}

p{
    font-size:30px;
}
.typing{
  font-size: 30px;
}
`;

export const ImageCredWrapper = styled.div`
width: 100%;
margin-top:70px;

.imagecred{
  color:#615241;
  font-size:10px;
  float:right;
}
@media (min-width: 668px){
  .typing {
    font-size: 12px;
  }
}
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <p className="contact">CONTACT</p>
        <p>Sofia Andersson</p>
        <p>+46 70 00 00 00</p>
        <typingWrapper>
          <div className="typing">sofia.e.i.andersson@gmail.com</div>
        </typingWrapper>
        <ImageCredWrapper>
          <p className="imagecred">Image: Photo by Courtney Smith on Unsplash </p>
        </ImageCredWrapper>
      </FooterContent>
    </FooterWrapper>
  );
};