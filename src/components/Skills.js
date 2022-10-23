import React from 'react';
import styled from 'styled-components';
import { InnerWrapper, SectionHeading, SectionSubHeading, OuterWrapperGrey } from '../library/GlobalStyles'

export const Skills = () => {
  return (
    <OuterWrapperGrey>
      <InnerWrapper>
        <SectionHeading>SKILLS</SectionHeading>
        <SkillContainer>
          <ColumnOne>
            <div>
              <SectionSubHeading>CODE</SectionSubHeading>
              <SkillText>HTML5</SkillText>
              <SkillText>CSS3</SkillText>
              <SkillText>JavaScript ES6</SkillText>
            </div>
            <div>
              <SectionSubHeading>UPCOMING</SectionSubHeading>
              <SkillText>React</SkillText>
              <SkillText>Redux</SkillText>
              <SkillText>Node.js</SkillText>
            </div>
          </ColumnOne>
          <ColumnTwo>
            <SectionSubHeading>TOOLBOX</SectionSubHeading>
            <SkillText>VSC</SkillText>
            <SkillText>Github</SkillText>
            <SkillText>Figma</SkillText>
            <SkillText>Slack</SkillText>
          </ColumnTwo>
          <ColumnThree>
            <SectionSubHeading>MORE</SectionSubHeading>
            <SkillText>Agile methodology</SkillText>
            <SkillText>Guardianship</SkillText>
            <SkillText>Open ePlatform</SkillText>
          </ColumnThree>
        </SkillContainer>
      </InnerWrapper>
    </OuterWrapperGrey>
  );
};

const SkillContainer = styled.div`
    display: flex;
    justify-content: space-around;
    text-align: center;
    font-family: 'Roboto', sans-serif;
`

const SkillText = styled.p`
  font-family: 'Roboto', sans-serif;
`

export const ColumnOne = styled.div`
  
`;

export const ColumnTwo = styled.div`

`;

export const ColumnThree = styled.div`
  
`;

export const SkillTagContainer = styled.div`
  display: flex;
`;
