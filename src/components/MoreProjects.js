import React from 'react'
import styled from 'styled-components';
import moreprojects from '../data/moreprojects.json';

export const MoreProjects = ({ color, tagColor, backColor }) => {
  const GITHUB_NAME = 'linneawa';

  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SectionHeader color={color}>MORE PROJECTS</SectionHeader>
        <MoreProjectsContainer>
          {moreprojects.map((project) => {
            return (
              <MoreProject
                color={color}
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <InfoContainer>
                  <SubTitle color={color}>{project.title}</SubTitle>
                  <SubParagraph>{project.paragraph}<EndingArrows color={color}>{' >>'}</EndingArrows></SubParagraph>
                </InfoContainer>
                <SkillTagContainer>
                  <ul style={{ padding: 0 }}>
                    {project.tags.map((tag) => (
                      <ProjectTags tagColor={tagColor}> {tag}</ProjectTags>
                    ))}
                  </ul>
                </SkillTagContainer>
              </MoreProject>
            );
          })}
        </MoreProjectsContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor}
`

const InnerWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

const MoreProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;

const SectionHeader = styled.h3`
  color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  font-size: 22px;
  line-height: 1;
  padding: 5px 10px;
  margin: 20px 0 20px 0;
  line-height: 1;
`

const MoreProject = styled.a`
text-decoration: none;
border-top: 3px solid ${(props) => props.color};
margin: 5px;
ul {
  margin: 10px;
  margin-left: 0;
}
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SkillTagContainer = styled.div`
  display: flex;

  ul {
    padding-inline-start: 2px;
  }
`;

const ProjectTags = styled.li`
font-family: 'Montserrat', sans-serif;
color: white;
border-radius: 5px;
padding: 5px 10px;
background-color: ${(props) => props.tagColor};
display: inline;
font-size: 14px;
margin-right: 5px;
margin-bottom: 10px;

@media (max-width: 800px) {
  padding: 4px 8px;
  font-size: 14px;
  margin-right: 7px;
  }
`;

const SubTitle = styled.p`
  color: ${(props) => props.color};
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin: 0;
`;

const SubParagraph = styled.p`
  color: black;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
`;

export const EndingArrows = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.color};
  display: inline;
`;