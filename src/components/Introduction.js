import React from 'react';
import styled from 'styled-components';

import heroImage2 from 'assets/heroImage2.jpg';

export const Introduction = () => {
  return (
    <IntroductionWrapper>
      <IntroductionContent>
      Sofia is an ambitious Frontend Developer with an interest
       for user experience, function and design. She has a
       solution oriented mindset, easily adapt to new conditions
        and is eager to learn more.
      </IntroductionContent>
    </IntroductionWrapper>
  );
};
export const IntroductionWrapper = styled.div`
margin:0;
background-image: url(${heroImage2});
background-size: cover;
width: 100%;
color: black;
display: flex;
justify-content: center;
padding: 50px 0;
text-align: center;
`;

export const IntroductionContent = styled.p`

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
    font-size: 20px;

  img{
  height: 75px;
  }
}
`;