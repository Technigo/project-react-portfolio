import React from 'react'
import styled from 'styled-components';
import FeaturedProject from '../data/FeaturedProject.json';
import { OuterWrapper, SectionHeader, Wrapper, FeaturedProjectWrapper, ProjectCard, ThumbnailWrapper, ThumbnailTitle, ProjectInfoHeader, ProjectInfo } from './GlobalStyleComponents';

/* Component that loops a list (FeaturedProject.json), and prints it */

const FeaturedProjectCard = ({ color, tagColor }) => {
  const GITHUB_NAME = 'ViktorSvenssonN';

  return (
    <OuterWrapper>
      <Wrapper>
        <SectionHeader color={color}>FEATURED PROJECTS</SectionHeader>
        <FeaturedProjectWrapper>
          {/* Loop projects */}
          {FeaturedProject.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <ThumbnailWrapper url={project.image}>
                  <ThumbnailTitle>{project.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader color={color}>
                  {project['title-description'].toUpperCase()}
                </ProjectInfoHeader>
                <ProjectInfo>{project['project-description']}</ProjectInfo>
                <ul style={{ padding: 0 }}>
                  {/* Loop tags per project */}
                  {project.tags.map((tag) => (
                    <ProjectTags tagColor={tagColor} key={tag}>
                      {tag}
                    </ProjectTags>
                  ))}
                </ul>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
      </Wrapper>
    </OuterWrapper>
  );
};

export default FeaturedProjectCard;

/* Featured projects styled component */

const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: #183a1d;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline;
  font-size: 16px;
  margin-right: 5px;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`;
