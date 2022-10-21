import React from 'react'
import styled from 'styled-components';
import projects from '../data/projects.json';

export const Projects = ({ color, tagColor, backColor }) => {
  const GITHUB_NAME = 'linneawa';

  return (
    <OuterWrapper backColor={backColor}>
      <InnerWrapper>
        <SectionHeader color={color}>FEATURED PROJECTS</SectionHeader>
        <FeaturedProjectWrapper>
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.title}
                href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                target="_blank">
                <ThumbnailWrapper url={project.image}>
                  <ThumbnailTitle>{project.title.toUpperCase()}</ThumbnailTitle>
                </ThumbnailWrapper>
                <ProjectInfoHeader color={color}>
                  {project['title-description']}
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
    </OuterWrapper>
  );
};

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
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

const SectionHeader = styled.h2`
background-color: ${(props) => props.color};
color: white;
font-family: 'Montserrat', sans-serif;
display: inline-block;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
`;

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 50px;

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
  border-radius: 20px;
  text-align: center;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  font-size: 24px;
  background-image: linear-gradient(180deg, #1c232580, #1c232580),
    url(${(props) => props.url});
  &:hover {
    background-image: linear-gradient(#1c23255e, #1c23255e),
      url(${(props) => props.url});
  }
`;

const ThumbnailTitle = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h2`
  font-family: 'Montserrat', sans-serif;
  color: ${(props) => props.color};
  font-size: 18px;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 18px;
  }
`;

const ProjectInfo = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: black;
  font-size: 16px;
  line-height: 1.4;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 18px;
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