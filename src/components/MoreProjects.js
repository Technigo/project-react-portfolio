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
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <InfoContainer>
                  <SubTitle color={color}>{project.title.toUpperCase()}</SubTitle>
                  <SubParagraph>{project.paragraph}<EndingArrows color={color}>{' >>'}</EndingArrows></SubParagraph>
                </InfoContainer>
                <SkillTagContainer>
                  <ul style={{ padding: 0 }}>
                    {project.tags.map((tag) => (
                      <ProjectTags tagColor={tagColor}>
                        {tag}
                      </ProjectTags>
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
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;

  @media (max-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
  }
`;

const MoreProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
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
ul {
  margin: 0;
}
`

const InfoContainer = styled.div`
  display: flex;
`;

const SkillTagContainer = styled.div`
  display: flex;

  ul {
    padding-inline-start: 2px;
  }
`;

const ProjectTags = styled.li`
padding: 0;
font-family: 'Montserrat', sans-serif;
color: black;
border-radius: 5px;
padding: 10px 10px;
background-color: ${(props) => props.tagColor};
display: inline;
font-size: 14px;
margin-right: 10px;

@media (max-width: 800px) {
  padding: 3px;
  font-size: 14px;
  margin-right: 7px;
  }
`;

const SubTitle = styled.p`
  color: ${(props) => props.color};
  text-decoration: underline;
  font-family: 'Montserrat', sans-serif;
  margin-right: 1%;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  margin-bottom: 0;
`;

const SubParagraph = styled.p`
  color: black;
  text-decoration: underline;
  font-family: 'Montserrat', sans-serif;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  margin-bottom: 0;
`;

export const EndingArrows = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.color};
  display: inline;
`;