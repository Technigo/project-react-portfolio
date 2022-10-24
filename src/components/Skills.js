import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';

export const Skills = () => {
  const SkillsSection = styled.div`
    text-align: center;
    padding: 50px 0;
    background-color: white;
  `;

  const SkillsWrapper = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: center;
    margin: 0 auto;
    line-height: 30px;
    color: rgb(135, 133, 133);
    font-family: 'Roboto', sans-serif;
    font-size: 17px;
  `;

  const Skill = styled.div`
    width: 200px;
    margin-top: 30px;
    h3 {
      color: #c8aa89c6;
      text-transform: uppercase;
      }
  `;

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <SkillsSection>
          <SectionTitle>
            <p>Skills</p>
          </SectionTitle>
          <SkillsWrapper>
            <Skill>
              <h3>code</h3>
              <p>HTML5</p>
              <p>CSS3</p>
              <p>Javascript ES6</p>
              <p>React</p>
              <p>Jsx</p>
            </Skill>
            <Skill>
              <h3>toolbox</h3>
              <p>Github</p>
              <p>VS Code</p>
              <p>G suite</p>
              <p>Figma</p>
              <p>Slack</p>
              <p>Notion</p>
              <p>Code Pen</p>
            </Skill>
            <Skill>
              <h3>more</h3>
              <p>Leadership</p>
              <p>Scaling teams</p>
              <p>Discovery</p>
              <p>Customer Experience</p>
            </Skill>
            <Skill>
              <h3>upcoming</h3>
              <p>Redux</p>
              <p>Node.js</p>
            </Skill>
          </SkillsWrapper>
        </SkillsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}