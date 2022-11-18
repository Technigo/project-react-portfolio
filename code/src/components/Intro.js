import React from 'react';
import styled from 'styled-components/macro';
import { OuterWrapper, InnerWrapper, Paragraph } from 'styles/GlobalStyles';
import startFigure from '../assets/startFigure.svg';

export const Intro = () => {
  return (
    <OuterWrapper backGroundcolor="#f4f4f4">
      <InnerWrapper backGroundcolor="#f4f4f4">
        <Paragraph>
          <StartFigure src={startFigure} alt="lollipop separator" />
           Hello! I am a frontend developer who previously worked with clinical trial
           start-up in the pharmaceutical industry. Detail-oriented and a relentless
           problem solver, the puzzle-like aspect of programming is what
           draws me to it the most - understanding how things connect and seeing the
           immediate effects of my work.
        </Paragraph>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const StartFigure = styled.img`
  width: 3.4rem;
  margin-right: 5px;

  @media (min-width: 668px) {
    width: 6.1rem;
  }
`