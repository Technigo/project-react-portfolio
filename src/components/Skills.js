import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper, OverlinedHeading, ProjectText } from './GlobalStyles';

export const Skills = () => {
  return (
    <Wrapper primary>
      <SectionTitle primary>SKILLS</SectionTitle>
      <SkillsContainer>
        <SkillsList>
          <OverlinedHeading>CODE</OverlinedHeading>
          <SkillName primary>JavaScript ES6</SkillName>
          <SkillName primary>CSS3</SkillName>
          <SkillName primary>HTML5</SkillName>
          <SkillName primary>APIs</SkillName>
          <SkillName primary>React</SkillName>
          <SkillName primary>Redux</SkillName>
          <SkillName primary>Express</SkillName>
          <SkillName primary>MongoDB</SkillName>
          <SkillName primary>Node JS</SkillName>
          <SkillName primary>Styled Components</SkillName>
        </SkillsList>
        <SkillsList>
          <OverlinedHeading>TOOLBOX</OverlinedHeading>
          <SkillName primary>GitHub</SkillName>
          <SkillName primary>VSCode</SkillName>
          <SkillName primary>Figma</SkillName>
          <SkillName primary>Canva</SkillName>
          <SkillName primary>Slack</SkillName>
          <SkillName primary>Netlify</SkillName>
          <SkillName primary>Google Cloud</SkillName>
          <SkillName primary>Stack Overflow</SkillName>
        </SkillsList>
        <SkillsList>
          <OverlinedHeading>MORE</OverlinedHeading>
          <SkillName primary>Googling</SkillName>
          <SkillName primary>Responsive Design</SkillName>
          <SkillName primary>Agile Methodology</SkillName>
          <SkillName primary>Mob Programming</SkillName>
          <SkillName primary>Indonesian</SkillName>
          <SkillName primary>Swedish</SkillName>
        </SkillsList>
      </SkillsContainer>
    </Wrapper>
  )
}

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 5% 0 0 0;

  @media (min-width: 668px){
    grid-template-columns: repeat(3, 1fr);
  }

`

const SkillsList = styled.div`
  margin-top: 2%;
  margin-bottom: 10%;
  text-align: center;
  color: #614124;
`

const SkillName = styled(ProjectText)`
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