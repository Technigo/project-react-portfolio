import React from 'react';
import styled from 'styled-components'

import { SectionTitle, Container } from './Globalstyles'

const Skills = () => {
  return (
    <StyledSkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      <StyledSkills>
        <ul>
          <SkillTitle>Code</SkillTitle>
          <li>JavaScript ES6</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Styled components</li>
        </ul>
        <ul>
          <SkillTitle>Tools</SkillTitle>
          <li>VS Code</li>
          <li>GitHub</li>
          <li>Google Cloud</li>
          <li>MongoDB</li>
          <li>Figma</li>
          <li>Trello</li>
        </ul>
      </StyledSkills>
    </StyledSkillsContainer>
  )
}

export default Skills

const StyledSkillsContainer = styled(Container)`
  width: 80vw;
  height: 30vh;
  line-height: 1.5rem;
  text-align: center;
`
const StyledSkills = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  
  @media screen and (min-width: 667px) {
    gap: 4em;
  }
  `
const SkillTitle = styled.h4`
  color: var(--color-darkGreen);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-shadow: .5px .5px #5f7161;
`