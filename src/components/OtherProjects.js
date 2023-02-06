import React from 'react'
import styled from 'styled-components/macro';
import OtherProject from '../data/OtherProject.json'
import { ProjectTags, SectionHeader, SubParagraphArrows, InnerWrapper } from './GlobalStyleComponents'

/* Component that fetches data from OtherProject.json, basicaly it prints the list thats
 written there. */

const OtherProjects = ({ tagColor }) => {
  return (
    <OtherProjectBackground>
      <InnerWrapper>
        <OtherProjectHeader>OTHER PROJECTS</OtherProjectHeader>
        <OtherProjectContainer>
          {OtherProject.map((project) => {
            return (
              <><a href={project.netlify}>
                <InfoContainer>
                  <SubTitle>{project.title}</SubTitle>
                  <SubParagraph>
                    {project.description}<SubParagraphArrows>{'>>>'}</SubParagraphArrows>
                  </SubParagraph>
                </InfoContainer>
          </a> {/* eslint-disable-line */}
              <SkillTagContainer>
                {project.tags.map((tag) => (
                  <ClonedProjectTags key={tag} tagColor={tagColor}>
                    {tag}
                  </ClonedProjectTags>
                ))}
              </SkillTagContainer>
              </>
            );
          })}
        </OtherProjectContainer>
      </InnerWrapper>
    </OtherProjectBackground>
  );
};
export default OtherProjects;

/* Components localy styled components  */

const OtherProjectBackground = styled.section`
background-color: #e1eedd; 
  padding: 5% 0 5% 0;
  width: 100%;
`;

const OtherProjectHeader = styled(SectionHeader)`
background: transparent;
color: #f0a04b;
text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;

  &:hover {
    transform: scale(1.04);
    transition: 400ms linear;
  }
`;

const SkillTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-bottom: 2%;
`;

const OtherProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;

  
`;

const SubTitle = styled.h4`
  color: #f0a04b;
  text-decoration: underline;
  margin-right: 1%;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;

`;

const SubParagraph = styled.p`
  color: #183a1d;
  text-decoration: underline;
  margin-block-end: 1em;
  margin-block-start: 1em;
  font-size: 20px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
`;

const ClonedProjectTags = styled(ProjectTags)`
  margin: 2px 3px;
`;