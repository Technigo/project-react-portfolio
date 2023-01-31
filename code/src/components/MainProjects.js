import React, { useEffect, useState } from 'react';
import { BASE_URL, PROJECT_THUMBNAIL, MATH_THUMBNAIL } from 'utils/urls';
import styled from 'styled-components/macro';
import { ProjectCard, Image, SmallHeadline, Tags, Tag } from 'styles/GlobalStyles';

export const MainProjects = () => {
  const [projects, setProjects] = useState([]);

  // Get all my projects on GitHub via API call:
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((error) => console.error(error))
  }, []);

  // Filtered array with all relevant projects:
  const relProjects = projects.filter((item) => item.name.includes('project-') && (!item.name.includes('portfolio')));

  // Filter for 4 main projects (starred on github):
  const mainFour = relProjects.filter((item) => item.stargazers_count !== 0);

  // Function to map over the tags and display them:
  const renderTags = (tags) => {
    return tags.map((tag) => {
      return <Tag key={tag}>{tag.toUpperCase()}</Tag>
    })
  }

  // Image as link to deployed site and Text description as link to GitHub:
  return (
    mainFour.map((project) => {
      return (
        <ProjectCard key={project.id}>
          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
            <ImageContainer>
              <ImageOverlay />
              {project.name === 'project-math-app' ? <Image src={MATH_THUMBNAIL(project.name)} alt="" />
                : <Image src={PROJECT_THUMBNAIL(project.name)} alt="" />}
              <OverlayTitle className="title">{project.name.replace('project-', '').replace('-', ' ')}</OverlayTitle>
            </ImageContainer>
          </a>

          <a href={project.svn_url} target="_blank" rel="noopener noreferrer">
            <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
            <p>{project.description}</p>
            <Tags>{renderTags(project.topics)}</Tags>
          </a>
        </ProjectCard>
      );
    })
  )
}

// STYLING FOR THE ABOVE REACT COMPONENT
const ImageContainer = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;

  &:hover > .title {
    color: transparent;
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  /* This is a semi-transparent overlay on the image */
  background-color: rgba(0, 0, 0, 0.5);
  /* This will cause the overlay to fade */
  transition: 0.5s ease;

  &:hover {
    background-color: transparent;
  }
`

const OverlayTitle = styled.p`
  text-align: center;
  position: absolute;
  top: 33%;
  left: 25%;
  right: 26%;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
`

