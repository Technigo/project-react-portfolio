import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BASE_URL, PROJECT_THUMBNAIL } from 'util/URLs';
import { ProjectCard, Image, SmallHeadline, Tags, Tag } from '../styles/GlobalStyles';

export const FeaturedProjects = () => {
  const [projects, setProjects] = useState([])

  /* Fetching all my projects from giithub */
  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error(error))
  }, []);

  /* Filtering our the ones I want to keep in Featured here */
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
          <ImageContainer>
            <ImageOverlay />
            <Image src={PROJECT_THUMBNAIL(project.name)} alt="" />
            <Tags>{getTags(project.topics)}</Tags>
          </ImageContainer>
        </ProjectCard>
      );
    })
  )
}

export const ImageContainer = styled.div`
  position: relative;

`

export const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* Overlay on the image */
  background-color: rgba(0, 0, 0, 0.8);

`