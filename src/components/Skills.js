import React from 'react'
import styled from 'styled-components/macro'
import { InnerWrapper, MainHeaders, OuterWrapper, TitleQuaternary } from './globalStyling'

export const Skills = () => {
  return (
    <OuterWrapper backgroundImage="linear-gradient(180deg,#ffffff 0%,#fec8ab 100%)">
      <InnerWrapper>
        <SkillsContainer>
          <MainHeaders>skills</MainHeaders>
          <SkillsList>
            <div>
              <TitleQuaternary>CODE</TitleQuaternary>
              <ul>
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript ES6</li>
                <li>React </li>
                <li>Redux</li>
                <li>Node.js</li>
                <li>Styled Components</li>
              </ul>
            </div>
            <div className="toolbox">
              <TitleQuaternary>TOOLBOX</TitleQuaternary>
              <ul>
                <li>GitHub</li>
                <li>Postman</li>
                <li>Figma</li>
                <li>Keynote</li>
                <li>Slack</li>
              </ul>
            </div>

          </SkillsList>
        </SkillsContainer>
      </InnerWrapper>
    </OuterWrapper>

  )
}

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 100%;
`

export const SkillsList = styled.div`

    ul {
      margin-bottom: 2rem;    
    }

    li{
      font-size: 1.3rem;
      line-height: 2rem;
    }

    @media (min-width: 668px) {
      display: flex;
      width: 70%;

        div {
        width: 50%;
      }
    }
`