import React from 'react';
import styled from 'styled-components';
import projects from '../library/projects.json';
import { SectionHeading, InnerWrapper, OuterWrapperGrey } from '../library/GlobalStyles'

export const Projects = ({ color, tagColor }) => {
  const GITHUB_NAME = 'lindanorberg';

  return (
    <OuterWrapperGrey>
      <InnerWrapper>
        <SectionHeading>FEATURED PROJECTS</SectionHeading>
        <FeaturedProjectWrapper>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <ThumbnailWrapper url="../assets/happy-thoughts">
                  <ThumbnailTitle>{project.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader color={color}>
                  {project['title-description'].toUpperCase()}
                </ProjectInfoHeader>
                <ProjectInfo>{project['project-description']}</ProjectInfo>
                <ul style={{ padding: 0 }}>
                  {project.tags.map((tag) => (
                    <ProjectTags tagColor={tagColor}>
                      {tag}
                    </ProjectTags>
                  ))}
                </ul>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
      </InnerWrapper>
    </OuterWrapperGrey>
  );
};

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const ProjectCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;
`;

const ThumbnailWrapper = styled.div`
  background-size: cover;
  background-position: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.3rem;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const ThumbnailTitle = styled.h2`
  font-family: "Montserrat Bold";
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
  color: ${(props) => props.color};
  font-size: 1.2rem;
`;

const ProjectInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 1.2rem;
  line-height: 1.4;
`;

const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: black;
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
