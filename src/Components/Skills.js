/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, RedTitle } from 'StyledComponents/GlobalComponents'

const SkillList = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2vh;
    margin-bottom: 25px;
    text-align: center;
    font-family: "Roboto";
    font-size: 18px;
    letter-spacing: 0em;
    
    @media (min-width: 668px) {
      grid-template-columns: 1fr 1fr;
    }
`
const Code = styled.li`
 font-weight: 400;
    line-height: 29px;
    list-style-type: none;
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
            <ul>Redux</ul>
            <ul>Node</ul>
            <ul>Mongoose</ul>
          </Code>
          <Code>
            <RedTitle>TOOLBOX</RedTitle>
            <ul>Slack</ul>
            <ul>Figma</ul>
            <ul>VS Code</ul>
            <ul>Codepen</ul>
            <ul>Github</ul>
            <ul>MongoDB</ul>
            <ul>Postman</ul>
            <ul>Atlas</ul>
            <ul>Google Cloud Platform</ul>
          </Code>
        </SkillList>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Skills