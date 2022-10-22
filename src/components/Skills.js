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
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript ES6</p>
          <p>React</p>
          <p>Node.js</p>
        </SkillsBox>
        <SkillsBox>
          <h5>TOOLS</h5>
          <p>Figma</p>
          <p>Slack</p>
          <p>VS Code</p>
          <p>Notion</p>
          <p>Github</p>
        </SkillsBox>
      </SkillsInnerWrapper>
    </SkillsWrapper>
  )
}

export default Skills;

const SkillsWrapper = styled(Wrapper)`
    align-items: center;

`

const SkillsInnerWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const SkillsBox = styled.div`
    margin: 0;
    h5 {
        font-size: 18px;
        color: #fff;
        background: #1C658C;
        border-radius: 3px;
        padding: 5px;
        width: fit-content;
    }

    p {
      line-height: 10px;
    }
`