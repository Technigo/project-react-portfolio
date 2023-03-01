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
              <li>ES6</li>
              <li>CSS3</li>
              <li>HTML5</li>
              <li>JavaScript</li>
              <li>Styled Components</li>
              <li>Mongoose</li>
              <li>Node.js</li>
              <li>React</li>
              <li>Redux</li>

            </SkillsText>
          </SkillsColumn>
          <SkillsColumn>
            <SkillsHeader>TOOLBOX</SkillsHeader>
            <SkillsText>
              <li>Slack</li>
              <li>Figma</li>
              <li>Discord</li>
              <li>MONGO DB</li>
              <li>Google Cloud Platform</li>
              <li>Postman</li>
              <li>VS Code</li>
              <li>Github</li>
              <li>Atlas</li>

            </SkillsText>
          </SkillsColumn>
        </SkillsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const SkillsContent = styled.div`
  display: flex;
  justify-items: center;
  font-family: 'Roboto', sans-serif;
  justify-content: center;
  column-gap: 50px;
  line-height: 25px;
`
const SkillsColumn = styled.ul`
  text-align: center;
  width: 30%;
`

const SkillsHeader = styled.h6`
  color: #D36B00;
  padding-top: 10px;
  font-size: 20px;
@media (min-width: 1025px) {
  font-size:25px ;
}
`
const SkillsText = styled.p`
  font-size: 17px;
@media (min-width: 1025px) {
  font-size:20px ;
  line-height: 30px;
}
`