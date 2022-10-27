/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';
import { OuterWrapperSecond, InnerWrapper, SectionHeader } from './GlobalStyleComponents';

/* Component that shows 3 columns with Code, toolbox, and a more section of what i know. */

const Skills = ({ color }) => {
  return (
    <OuterWrapperSecond>
      <ClonedInnerWrapper>
        <SectionHeader color={color}>SKILLS</SectionHeader>
        <SkillsContainer>
          <SkillsBoxParent>
            <SkillsBox>
              <SkillsBoxHeader>CODE</SkillsBoxHeader>
              <SkillsBoxParagraph>HTML5</SkillsBoxParagraph><SkillsBoxParagraph>CSS3</SkillsBoxParagraph><SkillsBoxParagraph>JavaScript ES6</SkillsBoxParagraph>
              <SkillsBoxParagraph>React</SkillsBoxParagraph><SkillsBoxParagraph>Styled Components</SkillsBoxParagraph><SkillsBoxParagraph>GitHub</SkillsBoxParagraph>
              <SkillsBoxParagraph>Redux</SkillsBoxParagraph><SkillsBoxParagraph>Node.js</SkillsBoxParagraph>
            </SkillsBox>
            <SkillsBox>
              <SkillsBoxHeader>TOOLBOX</SkillsBoxHeader>
              <SkillsBoxParagraph>Atom</SkillsBoxParagraph><SkillsBoxParagraph>Postman</SkillsBoxParagraph><SkillsBoxParagraph>Adobe</SkillsBoxParagraph>
              <SkillsBoxParagraph>GitHub</SkillsBoxParagraph><SkillsBoxParagraph>Figma</SkillsBoxParagraph><SkillsBoxParagraph>Slack</SkillsBoxParagraph><SkillsBoxParagraph>Notion</SkillsBoxParagraph>
            </SkillsBox>
            <SkillsBox>
              <SkillsBoxHeader>MORE</SkillsBoxHeader>
              <SkillsBoxParagraph>Agile methodology</SkillsBoxParagraph> <SkillsBoxParagraph>Customer service</SkillsBoxParagraph><SkillsBoxParagraph>Team lead</SkillsBoxParagraph>
              <SkillsBoxParagraph>Assistant store Manager</SkillsBoxParagraph><SkillsBoxParagraph>Onboarding</SkillsBoxParagraph><SkillsBoxParagraph>Teaching</SkillsBoxParagraph>
            </SkillsBox>
          </SkillsBoxParent>
        </SkillsContainer>
      </ClonedInnerWrapper>
    </OuterWrapperSecond>
  );
};

/* localy styled components */

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const SkillsBoxParent = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-evenly;
}
`;

const SkillsBox = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 5% 5% 5%;
`;

const SkillsBoxHeader = styled.h4`
    color: #f6c453;
    font-size: 22px;
    line-height: 1.4;
    font-weight: bold;

    &:hover {
    color: #f0a04b;
    }
  
    @media (max-width: 800px) {
      font-size: 16px;
      line-height: 1.4;
`;

const SkillsBoxParagraph = styled.p`
font-size: 21px;
line-height: 1.4;
font-weigt: bold;
color: #183a1d;

&:hover {
  text-decoration: underline;
  text-decoration-color: #f6c453;
}

@media (max-width: 800px) {
  font-size: 16px;
  line-height: 1.4;

`;

const ClonedInnerWrapper = styled(InnerWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default Skills;