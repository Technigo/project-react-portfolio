import React from 'react';
import styled from 'styled-components';
import FeaturedProjectsInfo from 'data/FeaturedProjectsInfo';
import { OuterWrapper, InnerWrapper, MainHeading, ProjectTags } from './GlobalStyles';

export const FeaturedProjects = ({ color }) => {
  const GITHUB_NAME = 'Archkrull';
  return (
    <OuterWrapper>
      <InnerWrapper>

        <MainHeading>FEATURED PROJECTS</MainHeading>
        <FeaturedProjectWrapper>

          {/* This function takes info from the json file and maps through to get the info.
           Both for the thumbnail and project description */}
          {FeaturedProjectsInfo.map((project) => {
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

                {/* This function  maps through the tag array to give us separate tags */}
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

      </InnerWrapper>
    </OuterWrapper>
  );
};

const FeaturedProjectWrapper = styled.div`
text-align: left;
display: grid;
grid-template-columns: 1fr 1fr;
gap: 5%;

@media (max-width: 800px) {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1%;
}
`;

const ProjectCard = styled.a`
transform: translateY(0%);
transition: transform 0.5s;
display: flex;
flex-direction: column;
gap: 1%;
text-decoration: none;
position: relative;
`;

/* styles the div for the thumbnail and "overlay" */

const ThumbnailWrapper = styled.div`
background-size: cover;
background-position: center;
height: 300px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin-bottom: 8%;
font-size: 140%;
background-image: linear-gradient(180deg, #1c232580, #1c232580),
  url(${(props) => props.url});
&:hover {
  background-image: linear-gradient(#1c23255e, #1c23255e),
    url(${(props) => props.url});
}
`;

const ThumbnailTitle = styled.h2`
font-family: 'Montserrat', sans-serif;
font-weight: 700;
color: white;
position: absolute;
text-align: center;
`;

/* Syles the info beneath the thumbnail */

const ProjectInfoHeader = styled.h3`
font-family: 'Roboto', sans-serif;
font-weight: 700;
color: ${(props) => props.color};
font-size: 130%;
text-shadow: -0.5px 0.5px 0 #000;
margin-bottom: 0;

${ProjectCard}:hover & {
  text-decoration: underline;
}

@media (max-width: 800px) {
  font-size: 120%;
}
`;

const ProjectInfo = styled.p`
font-family: 'Roboto', sans-serif;
font-weight: 400;
color: black;
font-size: 120%;
line-height: 1.4;
margin: 0;

${ProjectCard}:hover & {
  text-decoration: underline;
}

@media (max-width: 800px) {
  font-size: 110%;
}
`;