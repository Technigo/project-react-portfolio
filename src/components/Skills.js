import React from 'react';
import styled from 'styled-components';

export const Skills = () => {
  return (
    <SkillsOuterWrapper>
      <SkillsInnerWrapper>
        <h5>SKILLS</h5>
        <SkillsContainer>
          <SkillList>
            <h7>CODE</h7>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>Styled Components</p>
            <p>GitHub</p>
          </SkillList>
          <SkillList>
            <h7>TOOLBOX</h7>
            <p>Figma</p>
            <p>Slack</p>
            <p>IFS</p>
            <p>Agresso Unit4</p>
            <p>Visma PX</p>
          </SkillList>
          <SkillList className="More">
            <h7>MORE</h7>
            <p>Business</p>
            <p>Marketing</p>
            <p>Finance</p>
            <p>French</p>
          </SkillList>
        </SkillsContainer>
      </SkillsInnerWrapper>
    </SkillsOuterWrapper>
  )
}

export const SkillsOuterWrapper = styled.div`
  background-color: var(--green);
  width: 100%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const SkillsInnerWrapper = styled.div`  
  max-width: 900px;
  width: 80vw;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 30px;
  gap: 25px;

.More {
  display:none;
}

@media (min-width: 668px) {
    gap: 30px;

    .More {
      display:inline;
      flex-direction: column;
    }
}
`;

export const SkillList = styled.div`

h7 {
  font-weight: 700;
}

@media (min-width: 668px) {
  font-size: 18px;
}

@media (min-width: 1024px) {
  font-size: 20px;
}
`;