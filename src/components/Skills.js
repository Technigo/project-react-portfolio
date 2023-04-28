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
          <li><span>Code</span></li> 
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Styled Components</li>
        </Code>
        <ToolBox>
          <li><span>Toolbox</span></li>
          <li>Visual Studio Code</li>
          <li>Figma</li>
          <li>Slack</li>
          <li>Canva</li>
          <li>Github</li>
        </ToolBox>
        <More>
          <li><span>More</span></li>
          <li>Design lead</li>
          <li>Branding</li>
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
background-color: rgb(237, 200, 201);
height: 900px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
`
const Header = styled.h1`
font-size: 25px;
`
const TechSkills = styled.div`
font-size: 22px;
`
const Code = styled.div`
span {
    background-color: #cdcf7f;
    color: white;
}
`
const ToolBox = styled.div`
span {
    background-color: rgb(11, 11, 175);
    color: white;
}
`

const More = styled.div`
span {
    background-color: rgb(124, 172, 193);
    color: white
}

`

const Upcoming = styled.div`
span {
    background-color: rgb(216, 148, 167);
    color:white;
}
`