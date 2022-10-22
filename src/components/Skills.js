import styled from 'styled-components';
import React from 'react'
import { Wrapper, SectionHeader } from 'components/GlobalStyles'

export const Skills = () => {
  return (
    <SkillsWrapper primary>
      <SectionHeader>SKILLS</SectionHeader>
      <SkillsInnerWrapper>
        <SkillsBox>
          <h5>CODE</h5>
          <ul>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>JavaScript ES6</li>
            <li>React</li>
            <li>Node.js</li>
          </ul>
        </SkillsBox>
        <SkillsBox>
          <h5>TOOLS</h5>
          <ul>
            <li>Figma</li>
            <li>Slack</li>
            <li>VS Code</li>
            <li>Notion</li>
            <li>Github</li>
          </ul>
        </SkillsBox>
      </SkillsInnerWrapper>
    </SkillsWrapper>
  )
}

export default Skills;

const SkillsWrapper = styled(Wrapper)`
`

const SkillsInnerWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    grid-gap: 50px;
    padding-bottom: 30px;
`

const SkillsBox = styled.div`
    text-align: center;
    margin: 0;
    ul {
        list-style: none;
        display: inline;
        text-align: center;
        line-height: 25px;
    }

    li {
        font-size: 18px;
        grid-gap: 20px;
    }
    
    h5 {
        font-size: 18px;
        margin: 4px;
        color: #fff;
        background: #1C658C;
        border-radius: 3px;
        padding: 5px;
        width: fit-content;
    }
`