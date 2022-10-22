import React from 'react'
import styled from 'styled-components';
import OtherProject from './OtherProject.json'
import { ProjectTags, SectionHeader, SubParagraphArrows } from './GlobalStyleComponents'

const OtherProjects = ({ tagColor }) => {
  return (
    <><OtherProjectHeader>OTHER PROJECTS</OtherProjectHeader>
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
                <ProjectTags key={tag} tagColor={tagColor}>
                  {tag}
                </ProjectTags>
              ))}
            </SkillTagContainer>
            </>
          );
        })}
      </OtherProjectContainer>
    </>
  );
};
export default OtherProjects;

const OtherProjectHeader = styled(SectionHeader)`
background: transparent;
color: #54BAB9;
text-align: center;
`;

const InfoContainer = styled.div`
  display: flex;
`;

const SkillTagContainer = styled.div`
  display: flex;
`;

const OtherProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 0 auto;
`;

const SubTitle = styled.h4`
  color: red;
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  font-weight: bold;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

const SubParagraph = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
`;

/* const SubParagraphArrows = styled.span`
  color: #54BAB9;
  font-weight: bold;
`;
 */