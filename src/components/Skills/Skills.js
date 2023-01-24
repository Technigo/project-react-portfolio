/* eslint-disable linebreak-style */
/* eslint-disable jsx-quotes */
import React from 'react'
import { SectionContainer, SectionHeadings, SubHeadings } from 'Globalstyles'
import { SkillsWrapper } from './Skills.styles'

const Skills = () => {
  return (
    <SectionContainer bgColor='#d0c9c05c'>
      <SectionHeadings>SKILLS</SectionHeadings>
      <SkillsWrapper>
        <div>
          <SubHeadings>CODE</SubHeadings>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript ES6</p>
          <p>React</p>
          <p>React Native</p>
          <p>Redux</p>
          <p>Node.js</p>
          <p>MongoDB</p>
        </div>
        <div>
          <SubHeadings>TOOLBOX</SubHeadings>
          <p>Visual Studio Code</p>
          <p>Git</p>
          <p>GitHub</p>
          <p>Figma</p>
          <p>Slack</p>
        </div>
        <div>
          <SubHeadings>MORE</SubHeadings>
          <p>Online conversion strategy</p>
          <p>Programmatic advertising strategy</p>
          <p>Google Display and Video 360</p>
          <p>Google Ads</p>
          <p>Google Analytics</p>
          <p>Adform</p>
        </div>
        <div>
          <SubHeadings>UPCOMING</SubHeadings>
          <p>WordPress</p>
          <p>Flutter</p>
        </div>
      </SkillsWrapper>
    </SectionContainer>
  )
}

export default Skills
