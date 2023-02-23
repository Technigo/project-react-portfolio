/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components/macro';

import { OuterWrapper, InnerWrapper } from '../Styles/Globalstyles';

const Intro = () => {
  return (
    <StyledIntro>
      <InnerWrapper>
        <Line /><Dot />Hi! I am Julia,  a creative-minded team player with a love for new technologies and design.
        I strive to constantly grow while solving problems that matter and creating engaging solutions for products that people love!
        I stay motivated by collaborating with like-minded and with a curiosity about learning new things.
      </InnerWrapper>
    </StyledIntro>
  )
}

export default Intro

const StyledIntro = styled(OuterWrapper)`
  background-color: var(--color-grey);
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