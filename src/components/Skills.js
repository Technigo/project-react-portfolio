import React from 'react'
import styled from 'styled-components'
import { Heading } from './ComponentLibrary'
import PageSection from './PageSection'
import Wrapper from './Wrapper'

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

const Skills = () => {
  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Wrapper>
        <Heading>Skills</Heading>
        <div className="skills-container">
          <div className="skill-grid-code">
            <SkillsSubheading>Code</SkillsSubheading>
            <SkillsList className="skill-grid-list">
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>GitHub</li>
              <li>Bootstrap</li>
            </SkillsList>
          </div>
          <div className="skill-grid-toolbox">
            <SkillsSubheading>Toolbox</SkillsSubheading>
            <SkillsList className="skill-grid-list">
              <li>VS Code</li>
              <li>Slack</li>
            </SkillsList>
          </div>
          <div className="skill-grid-more hidden-on-mobile">
            <SkillsSubheading>More</SkillsSubheading>
            <SkillsList className="skill-grid-list">
              <li>Lorem</li>
              <li>to the</li>
              <li>ipsum</li>
            </SkillsList>
          </div>
          <div className="skill-grid-upcoming">
            <SkillsSubheading>Upcoming</SkillsSubheading>
            <SkillsList className="skill-grid-list">
              <li>React</li>
              <li>Redux</li>
              <li>Styled Components</li>
              <li>Node.js</li>
            </SkillsList>
          </div>
        </div>
      </Wrapper>
    </PageSection>
  )
}

export default Skills