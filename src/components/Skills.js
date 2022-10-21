import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper, OverlinedHeading, ProjectParagraph } from './GlobalStyles';

export const Skills = () => {
  return (
    <Wrapper primary>
      <SectionTitle>SKILLS</SectionTitle>
      <SkillsContainer>
        <SkillsCategory>
          <OverlinedHeading>CODE</OverlinedHeading>
          <SkillsList primary>JavaScript ES6</SkillsList>
          <SkillsList primary>CSS3</SkillsList>
          <SkillsList primary>HTML5</SkillsList>
          <SkillsList primary>APIs</SkillsList>
          <SkillsList primary>React</SkillsList>
          <SkillsList primary>🔜 Redux</SkillsList>
        </SkillsCategory>
        <SkillsCategory>
          <OverlinedHeading>TOOLBOX</OverlinedHeading>
          <SkillsList primary>GitHub</SkillsList>
          <SkillsList primary>VSCode</SkillsList>
          <SkillsList primary>Figma</SkillsList>
          <SkillsList primary>Slack</SkillsList>
          <SkillsList primary>Stack Overflow</SkillsList>
        </SkillsCategory>
        <SkillsCategory>
          <OverlinedHeading>MORE</OverlinedHeading>
          <SkillsList primary>Pair-Programming</SkillsList>
          <SkillsList primary>Mob-Programming</SkillsList>
          <SkillsList primary>Responsive Design</SkillsList>
          <SkillsList primary>Agile Methodology</SkillsList>
          <SkillsList primary>Indonesian</SkillsList>
        </SkillsCategory>
      </SkillsContainer>
    </Wrapper>
  )
}

const SkillsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5% 0 0 0;

  @media (min-width: 668px) and (max-width: 1023px){
    flex-direction: row;
  }

  @media (min-width: 1024px){
    flex-direction: row;
  }
`
const SkillsCategory = styled.div`
  margin-top: 2%;
  margin-bottom: 10%;
  text-align: center;
  color: #614124;
`

const SkillsList = styled(ProjectParagraph)`
  margin: 10% 0;
  display: block;
  line-height: 12px;

  @media (min-width: 520px) and (max-width: 1023px){
    font-size: 16px;
  }
  
  @media (min-width: 1024px){
    font-size: 18px;
  }
`