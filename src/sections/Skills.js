import React from 'react';
import styled from 'styled-components';

import { OuterWrapper, InnerWrapper } from 'styles/MainStyles';

const Skills = () => {
  return (
    <OuterWrapper className="background">
      <InnerWrapper>
        <h2>Skills</h2>
        <StyledWrapper>
          <StyledUlWrapper>
            <h3>Code</h3>
            <ul>
              <li>HTML & CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li>NodeJS</li>
              <li>MongoDB</li>
            </ul>
          </StyledUlWrapper>
          <StyledUlWrapper>
            <h3>Toolbox</h3>
            <ul>
              <li>Github</li>
              <li>Figma</li>
              <li>Sketch</li>
              <li>Invision</li>
              <li>Illustrator</li>
              <li>Photoshop</li>
            </ul>
          </StyledUlWrapper>
          <StyledUlWrapper>
            <h3>More</h3>
            <ul>
              <li>WCAG 2.1</li>
              <li>Visual design</li>
              <li>Design systems</li>
              <li>Organizing projects</li>
              <li>Team development</li>
              <li>Cross functional-teamwork</li>
            </ul>
          </StyledUlWrapper>
        </StyledWrapper>
      </InnerWrapper>
    </OuterWrapper>
  );
};
export default Skills;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;

  @media (min-width: 668px) {
      flex-direction: row;
      gap: 72px;
  }
`;

const StyledUlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 668px) {
    align-items: flex-start;
  }
`;