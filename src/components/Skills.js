import React from 'react'
import styled from 'styled-components';
import SkillsList from 'data/SkillsList'
import { OuterWrapper, InnerWrapper, MainHeading, SecondaryHeading } from './GlobalStyles';

export const Skills = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <MainHeading>SKILLS</MainHeading>
        <SkillContainer>
          {SkillsList.map((skills) => {
            return (
              <SkillWrapper>
                <SecondaryHeading>{skills['skill-title']}</SecondaryHeading>
                {skills['skill-list'].map((list) => (
                  <ListedSkills>
                    {list}
                  </ListedSkills>
                ))}
              </SkillWrapper>
            )
          })}
        </SkillContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const SkillContainer = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
width: 100%;
justify-content: space-between;
`;

const ListedSkills = styled.p`
color: red;
text-align: center;
`;

const SkillWrapper = styled.div`
flex-basis: 33%;
`;
