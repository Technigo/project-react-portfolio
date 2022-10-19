import React from 'react';
import styled from 'styled-components';
import FeaturedProject from 'FeaturedProject.json';

const FeaturedProjectCard = ({ color, tagColor }) => {
  const GITHUB_NAME = 'Sofia-Andersson';

  return (
    <Wrapper>
      <SectionHeader color={color}>FEATURED PROJECTS</SectionHeader>
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
              <ProjectInfoHeader color={color}>
                {project['title-description'].toUpperCase()}
              </ProjectInfoHeader>
              <ProjectInfo>{project['project-description']}</ProjectInfo>
              <ul style={{ padding: 0 }}>
                {project.tags.map((tag, i) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <ProjectTags tagColor={tagColor} key={i}>
                    {tag}
                  </ProjectTags>
                ))}
              </ul>
            </ProjectCard>
          );
        })}
      </FeaturedProjectWrapper>
    </Wrapper>
  );
};

export default FeaturedProjectCard;

const Wrapper = styled.div`
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
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  margin-bottom: 100px;
  font-family: "Montserrat Bold";
  background-color: ${(props) => props.color};
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
`;

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

  /* Optional hover effect, delete if not desired */
  /* &:hover {
    transform: translateY(-1%);
    transition: transform 0.3s;
  } */
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
  font-family: "Montserrat Bold";
  color: white;
  position: absolute;
`;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
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
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 24px;
  line-height: 1.4;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 20px;
  }
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
