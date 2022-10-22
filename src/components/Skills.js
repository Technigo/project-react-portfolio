import React from 'react';
import styled from 'styled-components';
import { OuterWrapper, InnerWrapper, SectionHeader } from './GlobalStyleComponents';

const Skills = ({ color }) => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SectionHeader color={color}>SKILLS</SectionHeader>
        <SkillsContainer>
          <AboutMeBox>
            <TechParagraph>HTML, CSS, Flexbox, JavaScript, ES6, JSX,<SpanColored> React</SpanColored>,<SpanColored> React Hooks</SpanColored>,<SpanColored> Redux</SpanColored>, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
            </TechParagraph>
          </AboutMeBox>
        </SkillsContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const SkillsContainer = styled.div`
    display: flex;

`;

export default Skills;