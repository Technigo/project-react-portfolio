import React, { useEffect, useState } from 'react';
import styled from 'styled-components/macro';
import { ProjectCard, Image, SmallHeadline } from 'styles/GlobalStyles';

export const MainProject = () => {
  const [projects, setProjects] = useState([]);

  // Get all my projects on GitHub via API call:
  useEffect(() => {
    fetch('https://api.github.com/users/brucette/repos')
      .then((response) => response.json())
      .then((json) => setProjects(json))
      .catch((error) => console.error(error))
  }, []);

  // Filtered array with relevant projects:
  const relProjects = projects.filter((item) => item.name.includes('project-') && (!item.name.includes('portfolio')));

  // array for 4 favourite projects:
  // const mainFour = relProjects.filter((item) => item.name.includes('happy-thoughts') ||
  // (item.name.includes('movies')) || (item.name.includes('survey')) ||
  // (item.name.includes('weather')));

  return (
  // Check all projects in filtered list and return the top 4 (starred on github)
    relProjects.map((project) => {
      if (project.stargazers_count !== 0) {
        return (
          <ProjectCard key={project.id} href="#" target="_blank" rel="noopener noreferrer">
            <ImageContainer>
              <ImageOverlay />
              <Image src={`https://raw.githubusercontent.com/brucette/${project.name}/master/code/preview/projPreview.png`} alt="" />
              <OverlayTitle>{project.name.replace('project-', '').replace('-', ' ')}</OverlayTitle>
            </ImageContainer>
            <SmallHeadline>{project.name.replace('project-', '').replace('-', ' ')}</SmallHeadline>
          </ProjectCard>
        )
      }
    })
  )
}

// STYLING FOR THE ABOVE COMPONENT
export const ImageContainer = styled.div`
  position: relative;
  /* This transition will cause the text to fade */
  transition: 0.5s ease;
`

export const ImageOverlay = styled.div`
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

export const OverlayTitle = styled.p`
  text-align: center;
  position: absolute;
  top: 33%;
  left: 25%;
  right: 26%;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  
  /* This causes the text to fade, color is the text color */
  &:hover {
    color: transparent;
  }
`