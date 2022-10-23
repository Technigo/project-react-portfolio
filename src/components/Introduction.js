import React from 'react';
import styled from 'styled-components';

import heroImage2 from 'assets/heroImage2.jpg';

export const IntroductionWrapper = styled.div`
margin:0;
background-image: url(${heroImage2});
background-size: cover;
width: 100%;
color: black;
display: flex;
justify-content: center;
padding: 50px 0;
`;

export const IntroductionContent = styled.p`
font-size: 17px;
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
    font-size: 30px;

  img{
  height: 75px;  
  } 
}
`;

export const Introduction = () => {
  return (
    <IntroductionWrapper>
      <IntroductionContent>
      This is an accessible presentation in the first section.
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation
         ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </IntroductionContent>
    </IntroductionWrapper>
  );
};