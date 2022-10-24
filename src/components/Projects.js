/* eslint-disable react/no-array-index-key */
import React from 'react';
import styled from 'styled-components';
import FeaturedProject from '../FeaturedProject.json';

export const Projects = () => {
  const GITHUB_NAME = 'LisaVasic';

  return (
    <ProjectOuterWrapper>
      <ProjectInnerWrapper>
        <h5>FEATURED PROJECTS</h5>
        <FeaturedProjectWrapper>
          {FeaturedProject.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <ThumbnailWrapper url={project.image}>
                  <ThumbnailTitle>{project.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader>
                  {project['title-description'].toUpperCase()}
                </ProjectInfoHeader>
                <ProjectInfo>{project['project-description']}</ProjectInfo>
                <ul style={{ padding: 0 }}>
                  {project.tags.map((tag) => (
                    <ProjectTags>
                      {tag}
                    </ProjectTags>
                  ))}
                </ul>
              </ProjectCard>
            );
          })}
        </FeaturedProjectWrapper>
      </ProjectInnerWrapper>
    </ProjectOuterWrapper>
  );
};

const ProjectOuterWrapper = styled.div`
  background-color: #dab9a8;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
`;

const ProjectInnerWrapper = styled.div`
 max-width: 900px;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-content: center;
 align-items: center;
 margin: 50px;
`;

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr;
  gap: 40px;
  margin-top: 30px;

  @media (min-width: 668px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
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
  margin-bottom: 20px;
  font-size: 26px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const ThumbnailTitle = styled.h2`
  font-family: Montserrat, sans-serif;
  color: white;
  position: absolute;
  font-size: 22px;
`;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
  font-size: 20px;
  color: #293a4f;
  margin: 0;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (min-width: 668px) {
    font-size: 20px;
  }
`;

const ProjectInfo = styled.p`
  font-family: Montserrat, sans-serif;
  color: #293a4f;
  font-size: 16px;
  line-height: 1.4;
  margin: 0;

  ${ProjectCard}:hover & {
    text-decoration: underline;

  }

  @media (min-width: 668px) {
   font-size: 18px
  }

  @media (min-width: 1024px) {
    font-size: 20px
   }
`;

const ProjectTags = styled.li`
  font-family: "Roboto", sans-serif;
  color: #ffff;
  border-radius: 3px;
  background-color: #293a4f;
  display: inline;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  margin-right: 10px;
  padding: 3px 5px;


  @media (min-width: 668px) {
    font-size: 16px;
  }
`;
