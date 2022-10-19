import React from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';

const Skills = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <SectionHeading>SKILLS</SectionHeading>
        <SkillsWrapper>

          <SkillsList>
            <SkillsTitles>CODE</SkillsTitles>

            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>GitHub</li>
              <li>React</li>
            </ul>
          </SkillsList>

          <SkillsList>
            <SkillsTitles>TOOLBOX</SkillsTitles>

            <ul>
              <li>Visual Studio Code</li>
              <li>Figma</li>
              <li>Slack</li>
              <li>CodePen</li>
            </ul>
          </SkillsList>

          <SkillsList>
            <SkillsTitles>UPCOMING</SkillsTitles>
            <ul>
              <li>Redux</li>
              <li>Node.js</li>
              <li>Python</li>
            </ul>
          </SkillsList>

        </SkillsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const SkillsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 6vh;
    height: 30vh;
    text-align: center;
    font-family: "Roboto";
    font-size: 17px;
    letter-spacing: 0em;
`

const SkillsTitles = styled.h3`
    font-weight: 700;
    padding: 7px;
`
const SkillsList = styled.li`
    font-weight: 400;
    line-height: 29px;
    list-style-type: none;
`

export default Skills;