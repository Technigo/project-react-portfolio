import React from 'react'
import styled from 'styled-components/macro'
import { MainHeaders, InnerWrapper, TitleQuaternary } from './globalStyling'

export const Skills = () => {
  return (
    <InnerWrapper selectedColor="#578e8724">
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
              <li> Styled Components</li>
              <li> GitHub</li>
            </ul>
            <div>
              <TitleQuaternary>UPCOMING</TitleQuaternary>
              <ul>
                <li>Redux</li>
                <li>Node.js</li>
              </ul>
            </div>
          </div>
          <div className="toolbox">
            <TitleQuaternary>TOOLBOX</TitleQuaternary>
            <ul>
              <li>Atom</li>
              <li>Postman</li>
              <li>Adobe Photoshop</li>
              <li>Figma</li>
              <li>Keynote</li>
              <li>Slack</li>
              <li>Node.js</li>
            </ul>
          </div>

        </SkillsList>
      </SkillsContainer>

    </InnerWrapper>

  )
}

export const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
`

export const SkillsList = styled.div`
    display: flex;
    text-align: center;

    ul {
      margin-bottom: 2rem;    
    }

    li{
      font-size: 1.3rem;
      line-height: 1.8rem;
    }
`