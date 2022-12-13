import React from 'react';
import styled from 'styled-components';
import { Wrapper, MainText } from './GlobalStyles';

export const Introduction = () => {
  return (
    <IntroductionWrapper primary>
      <MainText primary>
        Hello! My name is Kartika,
        and I&apos;m a frontend developer from Indonesia living in Sweden
        who&apos;s aiming to be a fullstack developer.
        I love programming because I find my
        personality aligned with it. The fun and intensity I get
        from programming, allows me to develop myself. My
        ambitious self also get pushed by the constant change of
        tech world. I feel the need to learn more and more. and
        with my can-do attitude, I always make sure I finish my task correctly fast.
      </MainText>
    </IntroductionWrapper>
  )
}

const IntroductionWrapper = styled(Wrapper)`
  padding: 15% 10%;
  text-align: justify;
  

  @media (min-width: 668px){
    padding: 10%;   
  }
`

