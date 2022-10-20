import React from 'react';
import styled from 'styled-components';
import { Wrapper, Paragraph } from './GlobalStyles';

export const Introduction = () => {
  return (
    <IntroductionWrapper primary>
      <ClonedParagraph primary>Hello! My name is Kartika,
        and I&apos;m a curious front-end developer from Indonesia
        who&apos;s currently based in Sweden.
        I am an eager learner and always committed to finish all tasks at hand.
      </ClonedParagraph>
      <ClonedParagraph primary>I have worked in retail,
        which fast-paced nature has developed my communication, selling, customer service,
        and problem solving skills.
      </ClonedParagraph>
    </IntroductionWrapper>
  )
}

const IntroductionWrapper = styled(Wrapper)`
padding: 15% 10%;

@media (min-width: 668px) and (max-width: 1023px){
    padding: 10%;   
}

@media (min-width: 1024px){
    padding: 10%; 
}
`

const ClonedParagraph = styled(Paragraph)`
text-align: justify;

@media (min-width: 668px) and (max-width: 1023px){
    font-size: 16px;
  }

@media (min-width: 1024px){
    font-size: 18px;
}
`