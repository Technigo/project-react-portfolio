import React from 'react';
import styled from 'styled-components/macro'
import { Headings } from '../Reusable/Headings';

import { InnerWrapper, OuterWrapper } from '../Styles/Globalstyles'

const Skills = () => {
  return (
    <StyledSkillsContainer>
      <Headings heading="Skills" />
      <StyledSkills>
        <ul>
          <SkillTitle>Code</SkillTitle>
          <li>JavaScript</li>
          <li>React</li>
          <li>Redux</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>REST APIs</li>
          <li>Styled components</li>
        </ul>
        <ul>
          <SkillTitle>Tools</SkillTitle>
          <li>VS Code</li>
          <li>Git</li>
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

const StyledSkillsContainer = styled(OuterWrapper)`
  width: 80vw;
  height: 30vh;
  line-height: 1.5rem;
  text-align: center;
`
const StyledSkills = styled(InnerWrapper)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  text-align: center;
`

const SkillTitle = styled.h4`
  color: var(--color-darkGreen);
  font-weight: 700;
  text-transform: uppercase;
  font-size: 1.1rem;
  text-shadow: .5px .5px #5f7161;
`