/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

import { Container } from './Globalstyles.styled';

const Intro = () => {
  return (
    <StyledIntro>
      <IntroText>
        <Line /><Dot />Hi! I am Julia, I’m a creative-minded explorer with a love for new technologies and design.
        I strive to constantly grow while solving problems that matter and creating engaging solutions for products that people love!
        I stay motivated by collaborating with like-minded and with a curiosity about learning new things.
      </IntroText>
    </StyledIntro>
  )
}

export default Intro

const StyledIntro = styled(Container)`
  min-height: 25vh;
  background-color: var(--color-grey);

  @media screen and (min-width: 667px) {
    min-height: 20vh;
  }
  `

const IntroText = styled.div`
  max-width: 80vw;
  line-height: 1.3rem;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60vw;
  }

  @media screen and (min-width: 1024px) {
    width: 40vw;
  }
`

const Line = styled.span`
  border: 1px solid var(--color-darkGreen);
  width: 40px;
  display: inline-block;
  margin-bottom: 4px;
`

const Dot = styled.span`
  height: 10px;
  width: 10px;
  background-color: var(--color-darkGreen);
  border-radius: 50%;
  display: inline-block;
  margin-right: 8px;
`