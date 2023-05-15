import React from 'react';
import styled from 'styled-components';

import { Player, Controls } from '@lottiefiles/react-lottie-player';

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
          <li>UX-design</li>
          <li>Ready to learn more</li>
        </More>
        <Upcoming>
          <li><span>Upcoming</span></li>
          <li>Node.js</li>
        </Upcoming>
      </TechSkills>
      <Lottie>
        <Player
          autoplay
          loop
          src="https://assets2.lottiefiles.com/packages/lf20_2BTmhJ.json"
          style={{ height: '300px', width: '300px' }}>
          <Controls visible={false} buttons={['play', 'repeat', 'frame', 'debug']} />
        </Player>
      </Lottie>
    </SkillSection>
  )
}

export default Skills;

const SkillSection = styled.div`
background-color: #F0EAD4;
height: 900px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
list-style: none;
text-align: center;
@media (min-width: 1000px) {
  height: 500px;
}
`

const Header = styled.h1`
font-family: 'Satoshi';
font-size: 43px;
color: #7A896D;
margin-top: -40px;
margin-bottom: -20px;
@media (min-width: 1000px) {
  margin-top: -80px;
  padding-left: 300px;
}
`
const TechSkills = styled.div`
display: flex;
flex-direction: column;
font-size: 22px;
line-height: 32px;
font-family: 'EB Garamond';
@media (min-width: 1000px){
  flex-direction: row;
  gap: 30px;
  padding-left: 300px;
}
`
const Code = styled.div`
margin-bottom: 20px;
span {
    background-color: #cdcf7f;
    color: white;
}
`
const ToolBox = styled.div`
margin-bottom: 20px;
span {
    background-color: rgb(11, 11, 175);
    color: white;
}
`

const More = styled.div`
margin-bottom: 20px;
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
const Lottie = styled.div`
display: none;
@media (min-width: 1000px){ 
display: block;
position: absolute;
margin-left: -800px;
}
`