import React from 'react'
import styled from 'styled-components';
import moreprojects from '../data/moreprojects.json';

export const MoreProjects = ({ color, tagColor }) => {
  const GITHUB_NAME = 'linneawa';

  return (
    <Wrapper>
      <SectionHeader color={color}>MORE PROJECTS</SectionHeader>
      <MoreProjectsContainer>
        {moreprojects.map((project) => {
          return (
            <MoreProject
              key={project.title}
              href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
              target="_blank">
              <InfoContainer>
                <SubTitle>{project.title.toUpperCase()}</SubTitle>
                <SubParagraph>{project.paragraph}<EndingArrows>{'>>'}</EndingArrows></SubParagraph>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
background: #f4f4f457;
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
  display: inline-block;
  padding: 4px;
  margin: 20px 0 20px 0;
  font-weight: bold;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
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
  font-family: "Roboto", sans-serif;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline;
  font-size: 14px;
  margin-right: 5px;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`;

const SubTitle = styled.p`
  color: red;
  text-decoration: underline;
  margin-right: 1%;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  margin-bottom: 0;
`;

const SubParagraph = styled.p`
  color: black;
  text-decoration: underline;
  font-size: 18px;
  margin-block-end: 1em;
  margin-block-start: 1em;
  margin-bottom: 0;
`;

export const EndingArrows = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: #f44336;
  display: inline;
`;