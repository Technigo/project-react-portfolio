/* eslint-disable linebreak-style */
import React from 'react'
import projects from 'featured-projects.json'
import { ArticleText, SectionContainer, SectionHeadings, SubHeadings, Tags } from 'Globalstyles';
import { FeaturedProject, OverlayImage, StyledFeaturedProjects } from './FeaturedProjects.styles';

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <SectionHeadings>FEATURED PROJECTS</SectionHeadings>
      <StyledFeaturedProjects>

        {projects.map((project) => (
          <FeaturedProject key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
              <OverlayImage>
                <h2>{project.overlay_title}</h2>
              </OverlayImage>
              <img src={project.img_src} alt={project.repo_name} />
              <SubHeadings>{project.title}</SubHeadings>
              <ArticleText>{project.project_description}</ArticleText>
              <Tags>
                {project.tags && project.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>))}
              </Tags>
            </a>
          </FeaturedProject>
        ))}

      </StyledFeaturedProjects>
    </SectionContainer>
  )
}

export default FeaturedProjects;