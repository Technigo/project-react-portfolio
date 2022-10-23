/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import styled from 'styled-components/macro';
import { ProjectTags, ceruleanBlue, TagWrapper, SectionHeader } from 'Styles';
import FeaturedProject from './FeaturedProject.json';

const FeaturedProjectCard = () => {
  const color = ceruleanBlue;
  const GITHUB_NAME = 'joeohm';

  return (
    <>
      <SectionHeader color={color}>FEATURED PROJECTS</SectionHeader>
      <FeaturedProjectWrapper>
        {FeaturedProject.map((project) => {
          return (
            <ProjectCard
              key={project.title}
              href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
              target="_blank"
            >
              <ThumbnailWrapper url={project.image}>
                <ThumbnailTitle>{project.title.toUpperCase()}</ThumbnailTitle>
              </ThumbnailWrapper>
              <ProjectInfoHeader color={color}>
                {project['title-description'].toUpperCase()}
              </ProjectInfoHeader>
              <ProjectInfo>{project['project-description']}</ProjectInfo>
              <TagWrapper>
                {project.tags.map((tag) => (
                  <ProjectTags key={tag}>{tag}</ProjectTags>
                ))}
              </TagWrapper>
            </ProjectCard>
          );
        })}
      </FeaturedProjectWrapper>
    </>
  );
};

export default FeaturedProjectCard;

// const SectionHeader = styled.h2`
//   font-size: 50px;
//   line-height: 1;
//   padding: 10px 15px;
//   margin-bottom: 100px;
//   font-family: 'Montserrat Bold';
//   background-color: ${(props) => props.color};
//   color: white;

//   @media (max-width: 800px) {
//     font-size: 22px;
//     line-height: 1;
//     padding: 10px 15px;
//     margin-bottom: 40px;
//   }
// `;

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

  &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  }
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
  /* &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  } */
`;

const ThumbnailTitle = styled.h2`
  font-family: 'Montserrat Bold';
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h3`
  font-family: 'Roboto Bold', sans-serif;
  color: ${(props) => props.color};
  font-size: 24px;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
`;

const ProjectInfo = styled.p`
  font-family: 'Roboto', sans-serif;
  color: black;
  font-size: 17px;
  line-height: 1.4;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (min-width: 800px) {
    font-size: 24px !important;
  }
`;
