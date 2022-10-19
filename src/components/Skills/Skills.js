/* eslint-disable linebreak-style */
import React from 'react'
import { ContainerWhite, SectionHeadings, SubHeadings } from 'Globalstyles';
import { SkillsWrapper } from './Skills.styles';

const Skills = () => {
  return (
    <ContainerWhite>
      <SectionHeadings>SKILLS</SectionHeadings>
      <SkillsWrapper>
        <div>
          <SubHeadings>CODE</SubHeadings>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>Javascript ES6</p>
          <p>React</p>
          <p>GitHub</p>
          <p>Redux</p>
          <p>Node.js</p>
        </div>
        <div>
          <SubHeadings>TOOLBOX</SubHeadings>
          <p>Figma</p>
          <p>Slack</p>
          <p>Visual Studio Code</p>
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
          <p>Wordpress</p>
          <p>C#</p>
        </div>
      </SkillsWrapper>
    </ContainerWhite>
  )
}

export default Skills;