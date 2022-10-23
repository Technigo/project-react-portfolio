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

          {/* maps the SubHeadings and the skills for each heading */}
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
text-align: center;
`;

/* sets three columns for desktop and two columns for smaller screens */
const SkillWrapper = styled.div`
flex-basis: 33%;

@media (max-width: 800px) {
   flex-basis: 50%;
    
  }

`;
