import React from 'react';
import styled from 'styled-components';
import FeaturedProject from 'FeaturedProject.json';
import Github from 'assets/Github_icon.png';

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
              href={`${project['netlify-name']}`}
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
              <Button>
                <a
                  href={`https://github.com/${GITHUB_NAME}/${project['repo-name']}`}
                  alt="project landingpage"
                  target="_blank"
                  rel="noreferrer">
                  <Icon2
                    className="icon2"
                    src={Github}
                    alt="Github" />
                </a>
              </Button>
            </ProjectCard>
          );
        })}
      </FeaturedProjectWrapper>
      <ForMore
        href="https://github.com/Sofia-Andersson"
        alt="Sofias_github_page"
        target="_blank"> Go to github to see more projects created by Sofia...
      </ForMore>
    </Wrapper>
  );
};

export default FeaturedProjectCard;

const Wrapper = styled.div`
background-color: #FFF;
  width: 100%;
  margin: 0px auto;
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  line-height: 1.4;
  border-right: 1px solid black;
  border-bottom: 1px solid black;

  @media (min-width: 800px) {
    font-size: 16px;
    line-height: 1.4;
    margin-bottom: 80px;
  }
`;

const SectionHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  margin-bottom: 100px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.color};
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
  @media (min-width: 1024px) {
     font-size: 40px;
  }
`;

const FeaturedProjectWrapper = styled.div`
  width:80%;
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
  border-right: 1px solid black;
  border-bottom: 1px solid black;

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
  text-align:center;
`;

const ProjectInfoHeader = styled.h3`
  font-family: "Roboto Bold", sans-serif;
  color: ${(props) => props.color};
  font-size: 22px;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 17px;
  }
`;

const ProjectInfo = styled.p`
  font-family: "Roboto", sans-serif;
  color: black;
  font-size: 17px;
  line-height: 1.4;
  padding-right: 10px;
  margin: 0;

  ${ProjectCard}:hover & {
    text-decoration: underline;
  }

  @media (max-width: 800px) {
    font-size: 17px;
  }
`;

const ProjectTags = styled.li`
  padding: 0;
  font-family: "Roboto", sans-serif;
  color: black;
  padding: 5px 10px;
  background-color: ${(props) => props.tagColor};
  display: inline-block;
  font-size: 16px;
  margin-right: 5px;
  border: 1px solid black;
  margin-top: 5px;

  @media (max-width: 800px) {
    padding: 2px;
    font-size: 14px;
    margin-right: 3px;
  }
`;

const Button = styled.button`
  font-family: "Roboto", sans-serif;
  color: black;
  background-color: white;
  display: inline-block;
  border: 1px solid black;
  width: 50px;
  margin: -15px 0 10px 0;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.5s;
  }

  @media (max-width: 800px) {
  }
`;

const Icon2 = styled.img`
  height:25px;
  width:25px;
  padding: 5px 0 0 0;
`;

const ForMore = styled.a`
margin: 0 0 40px 0;
color: black;
font-size: 17px;
font-weight: bold;
`;