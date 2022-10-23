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
           Hello! I’m a frontend developer with a particular interest in the problem-solving
          aspect of programming. I have a background in working with clinical trials in the
          pharmaceutical industry, which has developed an attention to detail whilst working
          towards a bigger end goal.
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