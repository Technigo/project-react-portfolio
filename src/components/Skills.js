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
            <p>HTML5 CSS3 JavaScript ES6 React Styled Components GitHub</p>

            <SkillsHeader>UPCOMING</SkillsHeader>
            <p>Redux Node.js</p>
          </SkillsColumn>
          <SkillsColumn>
            <SkillsHeader>TOOLBOX</SkillsHeader>
            <p> Atom Postman Adobe Photoshop Adobe Illustrator Figma Keynote Slack</p>
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
column-gap: 50px;
line-height: 25px;
`
export const SkillsColumn = styled.div`
  text-align: center;

`

export const SkillsHeader = styled.h6`
color: #D36B00;
padding-top: 10px;
`
