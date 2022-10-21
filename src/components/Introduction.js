import React from 'react';
import styled from 'styled-components';

export const IntroductionWrapper = styled.section`
width: 200%;  
height: 200px;
color: black;
`;

export const IntroductionContent = styled.p`
`;

export const Introduction = () => {
  return (
    <IntroductionWrapper>
      <IntroductionContent>
INTRODUCTION HERE
      </IntroductionContent>
    </IntroductionWrapper>
  );
};