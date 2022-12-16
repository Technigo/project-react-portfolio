import React from 'react';
import styled from 'styled-components';
import { SectionTitle, Wrapper, OverlinedHeading, ProjectText } from './GlobalStyles';
import data from '../assets/skills.json'

export const Skills = () => {
  return (
    <Wrapper primary>
      <SectionTitle primary>SKILLS</SectionTitle>
      <SkillsContainer>
        {data.map((item) => (
          <SkillsList key={item.id}>
            <OverlinedHeading>{item.title}</OverlinedHeading>
            {item.skills.map((skill) => (
              <SkillName primary key={skill}>{skill}</SkillName>
            ))}
          </SkillsList>
        ))}

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