/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, RedTitle } from 'StyledComponents/GlobalComponents'

const SkillList = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    justify-content:center;

`
const Code = styled.div`
display: flex;
flex-direction: column;
`
const Toolbox = styled.div`
display: flex;
flex-direction: column;
`

const Skills = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>Skills</Title>
        <SkillList>
          <Code>
            <RedTitle>CODE</RedTitle>
            <ul>HTML</ul>
            <ul>CSS</ul>
            <ul>JavaScript</ul>
          </Code>
          <Toolbox>
            <RedTitle>TOOLBOX</RedTitle>
            <ul>Slack</ul>
            <ul>Figma</ul>
            <ul>VS Code</ul>
          </Toolbox>
        </SkillList>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Skills