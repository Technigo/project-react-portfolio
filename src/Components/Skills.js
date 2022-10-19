/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title } from 'StyledComponents/GlobalComponents'

const SkillList = styled.div`

font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Skill = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>Skills</Title>
        <SkillList>
CODE
HTML

CSS

JavaScript

TOOLBOX
Slack

Figma

VS Code
        </SkillList>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Skill