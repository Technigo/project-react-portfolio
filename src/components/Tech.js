import React from 'react'
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, MainHeading } from './GlobalStyles';

export const Tech = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <MainHeading>TECH</MainHeading>
        <Intro> HTML, CSS, Flexbox, Grid, JavaScript ES6, Web Accessibly,
             API:s, mob-programming, pair-programming, Github.
        </Intro>
      </InnerWrapper>
    </OuterWrapper>
  );
};

export const Intro = styled.p`
padding: 10%;
font-family: 'Montserrat';
font-style: normal;
font-weight: 400;
font-size: 1.2em;
line-height: 138%;
`;
