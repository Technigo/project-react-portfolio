import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL, PROJECT_THUMBNAIL } from 'util/URLs';
import { ProjectCard, Image, Tags, Tag } from '../styles/GlobalStyles';

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([]);

  /* Fetching all my projects from giithub */
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error))
  }, []);

  /* Filtering our the ones with a star on github which want to keep in Featured here */
  const mainProjects = projects.filter((item) => item.stargazers_count !== 0);

  /* Map and display the tags */
  const getTags = (tags) => {
    return tags.map((tag) => {
      return <Tag key={tag}>{tag.toUpperCase()}</Tag>
    })
  }

  return (
    mainProjects.map((project) => {
      return (
        <ProjectCard key={project.id}>
          <a href={project.homepage} target="_blank" rel="noreferrer">
            <ImageContainer>
              <ImageOverlay />
              <Image src={PROJECT_THUMBNAIL(project.name)} alt="" />
              <OverlayTitle>{project.name.replace('project-', '').replace('-', ' ')}</OverlayTitle>
              <Tags>{getTags(project.topics)}</Tags>
            </ImageContainer>
          </a>
        </ProjectCard>

      );
    })
  )
}

export const ImageContainer = styled.div`
  border: 2px solid red;
  position: relative;

`

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* Overlay on the image */
  background-color: rgba(0, 0, 0, 0.4);

  /*transition: 0.5s ease;

  &:hover {
    background-color: transparent;
  }*/
`;

const OverlayTitle = styled.p`
  text-align: center;
  position: absolute;
  top: 33%;
  left: 25%;
  right: 26%;
  color: whitesmoke;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
`;

export default FeaturedProjects