import React from 'react'
import styled from 'styled-components/macro'
import { Heading, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'

const SkillsList = styled.ul`
  font-family: "Roboto Flex", sans-serif;
  font-weight: 400;
  text-align: center;
  line-height: 1.6;
`

const SkillsSubheading = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Roboto Flex", sans-serif;
  color: var(--accent);
  padding-bottom: 3px;
  text-align: center;
`

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: fit-content;
  gap: 10px;

   @media (max-width: 668px) {
    font-size: 0.9rem;
    /* grid-template-columns: repeat(3, 1fr); */
  }
`

const Skills = () => {
  return (
    <PageSection>
      <Wrapper>
        <Heading>Skills</Heading>
        <SkillsContainer>
          <div>
            <SkillsSubheading>Frontend</SkillsSubheading>
            <SkillsList>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>Redux</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>Backend</SkillsSubheading>
            <SkillsList>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Express</li>
            </SkillsList>
          </div>
          <div>
            <SkillsSubheading>Tools</SkillsSubheading>
            <SkillsList>
              <li>Figma</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>GCP</li>
              <li>Slack</li>
              <li>Notion</li>
            </SkillsList>
          </div>
        </SkillsContainer>
      </Wrapper>
    </PageSection>
  )
}

export default Skills