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
        Hi there! I'm a frontend developer with fullstack ambition and a background in social
        work. I am passionate about code and have a big interest in CSS.
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
}`

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