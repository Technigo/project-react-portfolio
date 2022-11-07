import React from 'react';
import styled from 'styled-components';

import { Container } from './StyleComp';

const Intro = () => {
  return (
    <StyledIntro>
      <IntroText>
        <Line /><Dot />Hi! I am Julia, a Technigo student aspiring to become a frontend
            developer. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam dapibus sollicitudin massa id feugiat. Sed bibendum iaculis
            sem, sit amet mattis ex viverra at. Donec porttitor vulputate elit,
            vel dignissim est. Mauris sit amet ipsum justo.
      </IntroText>
    </StyledIntro>
  )
}

export default Intro

const StyledIntro = styled(Container)`
  height: 25vh;
  background-color: var(--color-grey);

  @media screen and (min-width: 667px) {
    height: 20vh;
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