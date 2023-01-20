import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p> Hello! I'm a Frontend Developer - but I haven't always been.
            I have a background in accounting and studies in
            French international business and administration.
            In programming, I adore the combo of logic and creativity to produce robust,
            readable and reliable code.
        </p>
      </IntroInnerWrapper>
    </IntroOuterWrapper>
  )
}

export const IntroOuterWrapper = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background: rgb(89,42,72);
`;

export const IntroInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 200px;
  display: flex;
  align-items: center;
  line-height: 25px;

  @media (min-width: 668px) {
    font-size: 18px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    line-height: 30px;
  }
`;