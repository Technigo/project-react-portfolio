import React from 'react'
import styled from 'styled-components';
import OtherProjectsInfo from 'data/OtherProjectsInfo';
import { OuterWrapper, InnerWrapper, SecondaryHeading, ProjectTags } from './GlobalStyles';

export const OtherProjects = ({ color, tagColor }) => {
  const GITHUB_NAME = 'Archkrull';

  return (
    <OuterWrapper>
      <InnerWrapper>
        <SecondaryHeading>Other Projects</SecondaryHeading>
        <OtherProjectContainer>
          {OtherProjectsInfo.map((project) => {
            return (
              <OtherProjectCard
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <ProjectInfoHeader color={color}>
                  {project.title}
                </ProjectInfoHeader>
                <ProjectInfo>{project['project-description']}</ProjectInfo>
                <ul style={{ padding: 0 }}>
                  {project.tags.map((tag) => (
                    <ProjectTags tagColor={tagColor}>
                      {tag}
                    </ProjectTags>
                  ))}
                </ul>
              </OtherProjectCard>
            );
          })}

        </OtherProjectContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

const OtherProjectCard = styled.div`
    display: flex;
    flex-wrap: wrap;
  }
  `;

/*  const SkillTagContainer = styled.div`
    display: flex;
  `; */

const OtherProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin: 0 auto;
  `;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
  color: ${(props) => props.color};
  font-size: 120%;
  margin-right: 0;

  ${OtherProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 110%;
  }
`;

const ProjectInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 120%;
  flex-basis:70%;

  ${OtherProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 110%;
  }
`;

