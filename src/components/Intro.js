/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';
import { DarkerContainer } from './DarkerContainer.syled';

const Intro = () => {
  return (
    <StyledIntro className="intro bg-darker">
      <p className="intro-text">
        <span className="line" /><span className="dot" />
        Hi there! I'm a frontend developer with fullstack ambition and a background in social
        work. I am passionate about code and have a big interest in CSS.
      </p>
    </StyledIntro>
  )
}

export default Intro;

const StyledIntro = styled(DarkerContainer)`
  align-items: center;
  display: flex;
  height: 40vh;
  justify-content: center;

p {
  letter-spacing: 1px;
}
.line {
  border: 1px solid var(--ligtherGreen);
  display: inline-block;
  margin-bottom: 4px;
  width: 40px;
}
.dot {
  background-color: var(--ligtherGreen);
  border-radius: 50%;
  display: inline-block;
  height: 10px;
  width: 10px;
  margin-right: 8px;
}
`