import React from 'react';
import styled from 'styled-components';

export const Intro = () => {
  return (
    <IntroOuterWrapper>
      <IntroInnerWrapper>
        <p> Hi there, I am a junior frontend developer and a graphic designer.
            I am passionate about working creatively and solving problems.
            From my experience as a coordinator I am quite used to handle many tasks
            at once and being on top of things.
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
  background: #e9e2dc;
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

