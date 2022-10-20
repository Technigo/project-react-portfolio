import React from 'react';
import styled from 'styled-components';
import { BlockSection, InnerWrapper } from './StyledComponents/Wrappers';

export const Skills = () => {
  return (
    <BlockSection>
      <InnerWrapper>
        <h3>Skills</h3>
        <SkillsItem>
          <Content>
            <h4>code</h4>
            <div>
              <p>HTML</p>
              <p>JavaScript</p>
              <p>CSS</p>
              <p>GitHub</p>
              <p>React</p>
            </div>
          </Content>
        </SkillsItem>
        <SkillsItem>
          <Content>
            <h4>More</h4>
            <div>
              <p>Agile</p>
            </div>
          </Content>
        </SkillsItem>
        <SkillsItem>
          <Content>
            <h4>Toolbox</h4>
            <div>
              <p>Slack</p>
              <p>Figma</p>
              <p>CatiaV5</p>
            </div>
          </Content>
        </SkillsItem>
        <SkillsItem>
          <Content>
            <h4>Upcoming</h4>
            <div>
              <p>Node.js</p>
              <p>Redux</p>
            </div>
          </Content>
        </SkillsItem>
      </InnerWrapper>
    </BlockSection>
  );
};

const SkillsItem = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Content = styled.div`
  width: 50%;
  max-width: 50%;

  div {
    display: block;
  }
`;
