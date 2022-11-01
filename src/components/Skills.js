import React from 'react'
import styled from 'styled-components/macro'
import { Heading, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'

const SkillsList = styled.ul`
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
`

const SkillsSubheading = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: var(--accent);
  padding-bottom: 3px;
  text-align: center;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: fit-content;
  gap: 10px;

   /* tablet and larger -v */
   @media (min-width: 668px) {
    grid-template-columns: repeat(3, 1fr);
  }
`

const SkillsMore = styled.div`
   /* hide section on mobile */
   @media (max-width: 669px) {
     display: none;
  }
`

const Skills = () => {
  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Wrapper>
        <Heading>Skills</Heading>
        <SkillsContainer>
          <div>
            <SkillsSubheading>Code</SkillsSubheading>
            <SkillsList>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>GitHub</li>
              <li>Bootstrap</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>Toolbox</SkillsSubheading>
            <SkillsList>
              <li>VS Code</li>
              <li>Slack</li>
            </SkillsList>
          </div>
          <SkillsMore>
            <SkillsSubheading>More</SkillsSubheading>
            <SkillsList>
              <li>Lorem</li>
              <li>to the</li>
              <li>ipsum</li>
            </SkillsList>
          </SkillsMore>
          <div>
            <SkillsSubheading>Upcoming</SkillsSubheading>
            <SkillsList>
              <li>React</li>
              <li>Redux</li>
              <li>Styled Components</li>
              <li>Node.js</li>
            </SkillsList>
          </div>
        </SkillsContainer>
      </Wrapper>
    </PageSection>
  )
}

export default Skills