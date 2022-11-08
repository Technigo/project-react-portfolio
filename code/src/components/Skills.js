import React from 'react'
import styled from 'styled-components/macro'

import { ContainerWrapper, FlexWrapper, SectionHeadings } from 'GlobalStyles';

// react component

export const Skills = () => {
  return (
    <ContainerWrapper>
      <FlexWrapper>
        <SectionHeadings>skills</SectionHeadings>
        <SkillsContainer>
          <SkillsContainerItem>
            <h5>code</h5>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript ES6</li>
              <li>React</li>
              <li>API´s</li>
              <li>GitHub</li>
            </ul>
          </SkillsContainerItem>
          <SkillsContainerItem>
            <h5>toolbox</h5>
            <ul>
              <li>VSCode</li>
              <li>CodePen</li>
              <li>Figma</li>
              <li>Slack</li>
              <li>Notion</li>
              <li>Prezi</li>
              <li>Office 365°</li>
              <li>Adobe Creative Suite</li>
            </ul>
          </SkillsContainerItem>
          <SkillsContainerItem>
            <h5>more</h5>
            <ul>
              <li>Layout</li>
              <li>Typography</li>
              <li>Print & Advertising</li>
              <li>Agile methodology</li>
              <li>Mob-programming</li>
              <li>Communication</li>
            </ul>
          </SkillsContainerItem>
          <SkillsContainerItem>
            <h5>uppcomming</h5>
            <ul>
              <li>Node.js</li>
              <li>Backend development</li>
              <li>Redux</li>
            </ul>
          </SkillsContainerItem>
        </SkillsContainer>
      </FlexWrapper>
    </ContainerWrapper>
  )
}

// styled component
const SkillsContainer = styled.div`
  display: grid;
  gap: 3em;
  grid-template-columns: repeat(2, 1fr);

  @media (min-width: 668px) {
    margin: 0 100px;
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    /* max-width: 1000px; */
  } 
`;

// --------------

const SkillsContainerItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  ul {
    text-align: center;
    padding: 0;
  }

  li {
    list-style-type: none;
    line-height: 1.5em;
    text-align: center;

  }
`;

// --------------