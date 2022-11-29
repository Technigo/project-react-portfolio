import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionTitle } from './reusable/Wrappers';

export const Skills = () => {
  const SkillsSection = styled.div`
    text-align: center;
    padding: 90px 0 100px 0;
    background-color: white;
    // border-top: solid 1px var(---main);
    // border-bottom: solid 1px var(---main);
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
    @media (max-width: 760px) {
      font-size: 11px;
    }
  `;

  const Skill = styled.div`
    width: 200px;
    margin-top: 30px;
    color: grey;
    h3 {
      color: grey;
      text-transform: uppercase;
      font-size: 18px;
      }
  `;

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SkillsSection>
          <SectionTitle>
            <p>Skills</p>
          </SectionTitle>
          <SkillsWrapper>
            <Skill>
              <h3>code</h3>
              <p>React</p>
              <p>Javascript ES6</p>
              <p>Jsx</p>
              <p>Redux</p>
              <p>HTML5</p>
              <p>CSS3</p>
            </Skill>
            <Skill>
              <h3>toolbox</h3>
              <p>Github</p>
              <p>VS Code</p>
              <p>G suite</p>
              <p>Figma</p>
              <p>Slack</p>
              <p>Notion</p>
              {/* <p>Code Pen</p> */}
            </Skill>
            <Skill>
              <h3>more</h3>
              <p>Leadership</p>
              <p>Scaling teams</p>
              <p>Discovery</p>
              <p>CX</p>
            </Skill>
            <Skill>
              <h3>upcoming</h3>
              <p>MongoDB</p>
              <p>Node.js</p>
            </Skill>
          </SkillsWrapper>
        </SkillsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}