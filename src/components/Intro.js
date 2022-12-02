/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components/macro';
import { ContentWrapper, DarkerContainer } from './ReusableStyles.style';

const Intro = () => {
  return (
    <StyledIntro>
      <ContentWrapper>
        <p>
          <Line /><Dot />
          Hello World! I am a problem-solving Frontend Developer with great communication
          skills and a knack for seeing things from different perspectives. I have several
          years of working experience in social work, where I got to level up my interpersonal
          skills. Now I want to use those skills together with my passion for coding to become
          a truly skilled and communicative developer. I am aiming to go full-stack and learning
          mobile app development further down the road.
        </p>
      </ContentWrapper>
    </StyledIntro>
  )
}

export default Intro;

const StyledIntro = styled(DarkerContainer)`
  height: 40vh;

p {
  letter-spacing: 1px;
}
`

const Line = styled.span`
  border: 1px solid var(--ligtherGreen);
  display: inline-block;
  margin-bottom: 4px;
  width: 40px;
`

const Dot = styled.span`
  background-color: var(--ligtherGreen);
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 8px;
`