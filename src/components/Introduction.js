import React from 'react';
import styled from 'styled-components';
import { Wrapper, MainText } from './GlobalStyles';

export const Introduction = () => {
  return (
    <IntroductionWrapper primary>
      <MainText primary>Hello! My name is Kartika,
        and I&apos;m a curious front-end developer from Indonesia
        who&apos;s who&apos;s aiming to be a fullstack developer.
        I am an eager learner and always committed to finish all tasks at hand.
      </MainText>
      <MainText primary>I am always up to challenges and willing to learn.
      I am flexible and I adapt easily in a new environment.
      I love working in teams but I can also initiate individual projects with little supervision
      as I am discipline and efficient with my time.
      </MainText>
    </IntroductionWrapper>
  )
}

const IntroductionWrapper = styled(Wrapper)`
  padding: 15% 10%;
  text-align: justify;
  

  @media (min-width: 668px) and (max-width: 1023px){
    padding: 10%;   
  }

  @media (min-width: 1024px){
    padding: 10%; 
  }
`

