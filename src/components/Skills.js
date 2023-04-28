import React from 'react';
import styled from 'styled-components';

const Skills = () => {
  return (
    <SkillSection>
      <Header>
        <h1>Skills</h1>
      </Header>
      <TechSkills>
        <Code>
          <ul>
            <li><span>Code</span></li> 
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Styled Components</li>
          </ul>
        </Code>
        <ToolBox>
          <ul>
            <li><span>Toolbox</span></li>
            <li>Visual Studio Code</li>
            <li>Figma</li>
            <li>Slack</li>
            <li>Canva</li>
            <li>Github</li>
          </ul>
        </ToolBox>
        <More>
          <ul>
            <li><span>More</span></li>
            <li>Design lead</li>
            <li>Branding</li>
          </ul>
        </More>
        <Upcoming>
          <li><span>Upcoming</span></li>
          <li>Node.js</li>
        </Upcoming>
      </TechSkills>
    </SkillSection>
  )
}

export default Skills;

const SkillSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Header = styled.h1`
font-size: 25px;
`
const TechSkills = styled.div`
font-size: 22px;
`
const Code = styled.span`
background-color: blue;
`
const Toolbox = styled.span`
background-color: pink;
`

const More = styled.span`
background-color: red;
`

const Upcoming = styled.span`
background-color: yellow;
`