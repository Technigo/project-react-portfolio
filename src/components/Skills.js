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
              <p>HTML5</p>
              <p>CSS3</p>
              <p>JavaScript ES6</p>
            </div>
            <div>
              <SectionSubHeading>UPCOMING</SectionSubHeading>
              <p>React</p>
              <p>Redux</p>
              <p>Node.js</p>
            </div>
          </ColumnOne>
          <ColumnTwo>
            <SectionSubHeading>TOOLBOX</SectionSubHeading>
            <p>VSC</p>
            <p>Github</p>
            <p>Figma</p>
            <p>Slack</p>
          </ColumnTwo>
          <ColumnThree>
            <SectionSubHeading>MORE</SectionSubHeading>
            <p>Agile methodology</p>
            <p>Guardianship</p>
            <p>Open ePlatform</p>
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
