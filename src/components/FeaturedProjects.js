import React from 'react';
import styled from 'styled-components/macro';
import featuredProjects from '../library/featuredProjects.json';
import { SectionHeading, InnerWrapper, OuterWrapperGrey, GridWrapper } from '../library/GlobalStyles'

export const FeaturedProjects = ({ color, tagColor }) => {
  // const GITHUB_NAME = 'lindanorberg';

  return (
    <OuterWrapperGrey>
      <InnerWrapper>
        <SectionHeading>FEATURED PROJECTS</SectionHeading>
        <GridWrapper>
          {featuredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                href={project.netlify}
                target="_blank">
                <CardWrapper url={project.image}>
                  <CardTitle>{project.title.toUpperCase()}</CardTitle>
                </CardWrapper>
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
        </GridWrapper>
      </InnerWrapper>
    </OuterWrapperGrey>
  );
};

const ProjectCard = styled.a`
  transform: translateY(0%);
  transition: transform 0.5s;
  display: flex;
  flex-direction: column;
  gap: 5px;
  text-decoration: none;
  position: relative;
`;

const CardWrapper = styled.div`
  background-size: cover;
  background-position: center;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.3rem;
  background-image: linear-gradient(#0000006f, #0000006f), url(${(props) => props.url}); 
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const CardTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: absolute;
  font-size: 1.5rem;
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
  font-family: "Roboto", sans-serif;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline;
  font-size: 1rem;
  margin: 0 10px 0 0;


  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin: 10px;
  }
`;
