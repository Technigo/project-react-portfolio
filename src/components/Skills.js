import React from 'react'
import styled from 'styled-components'
import { Heading, InnerWrapper, OuterWrapper } from './Styling'

export const Skills = () => {
  return (
    <OuterWrapper beige>
      <Heading dark>SKILLS</Heading>
      <InnerWrapper>
        <SkillsContent>
          <SkillsColumn>
            <SkillsHeader>CODE</SkillsHeader>
            <SkillsText>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>ES6</li>
              <li>React</li>
              <li>Styled Components</li>
              <li>GitHub</li>
            </SkillsText>
          </SkillsColumn>
          <SkillsColumn>
            <SkillsHeader>UPCOMING</SkillsHeader>
            <SkillsText>
              <li>Redux</li>
              <li>Node.js</li>
            </SkillsText>
            <SkillsHeader>TOOLBOX</SkillsHeader>
            <SkillsText>
              <li>Figma</li>
              <li>Slack</li>
              <li>Discord</li>
            </SkillsText>
          </SkillsColumn>
        </SkillsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export const SkillsContent = styled.div`
display: flex;
justify-items: center;
font-family: 'Roboto', sans-serif;
justify-content: center;
column-gap: 50px;
line-height: 25px;
`
export const SkillsColumn = styled.ul`
  text-align: center;
  width: 30%;
`

export const SkillsHeader = styled.h6`
color: #D36B00;
padding-top: 10px;
font-size: 20px;
@media (min-width: 1025px) {
  font-size:25px ;
}
`
export const SkillsText = styled.p`
font-size: 17px;
@media (min-width: 1025px) {
  font-size:20px ;
  line-height: 30px;
}
`