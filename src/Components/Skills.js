/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, RedTitle } from 'StyledComponents/GlobalComponents'

const SkillList = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 50px;
    display: flex;
    justify-content:center;
    align-items: center;
    flex-direction: column;
    padding: 15px;
    @media (min-width: 1025px) {
  display:grid;
    grid-template-columns: 1fr 1fr 1fr;
    }
`

const Code = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1025px) {
  display: grid;
  grid-column: 1 / 1;
  align-self: flex-start;
    }

`
const Toolbox = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1025px) {
  display: grid;
  grid-column: 2 / 2;
  align-self: flex-start;
    }

`
const More = styled.div`
display: flex;
flex-direction: column;
@media (min-width: 1025px) {
  display: grid;
  grid-column: 3 / 3;
  align-self: flex-start;
    }
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
            <ul>React</ul>
          </Code>
          <Toolbox>
            <RedTitle>TOOLBOX</RedTitle>
            <ul>Slack</ul>
            <ul>Figma</ul>
            <ul>VS Code</ul>
            <ul>Codepen</ul>
            <ul>Github</ul>
          </Toolbox>
          <More>
            <RedTitle>UPCOMING</RedTitle>
            <ul>Redux</ul>
          </More>
        </SkillList>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Skills