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
    grid-template-columns: repeat(4, 1fr);
  }
`

const Skills = () => {
  return (
    <PageSection>
      <Wrapper>
        <Heading>Skills</Heading>
        <SkillsContainer>
          <div>
            <SkillsSubheading>Code</SkillsSubheading>
            <SkillsList>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
              <li>Node.js</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>Toolbox</SkillsSubheading>
            <SkillsList>
              <li>Figma</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>Slack</li>
              <li>Notion</li>
              <li>MongoDB Compass</li>
              <li>Google Cloud Run</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>More</SkillsSubheading>
            <SkillsList>
              <li>Branding</li>
              <li>and</li>
              <li>stuff</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>Upcoming</SkillsSubheading>
            <SkillsList>
              <li>Lorem</li>
              <li>to the</li>
              <li>ipsum</li>
            </SkillsList>
          </div>
        </SkillsContainer>
      </Wrapper>
    </PageSection>
  )
}

export default Skills