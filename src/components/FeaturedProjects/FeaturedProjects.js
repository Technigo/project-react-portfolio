/* eslint-disable linebreak-style */
import React from 'react'
import projects from 'featured-projects.json'
import { ArticleText, SectionContainer, SectionHeadings, SubHeadings, Tags } from 'Globalstyles';
import { FeaturedProjectOverlay, OverlayImage, StyledFeaturedProjects } from './FeaturedProjects.styles';

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <SectionHeadings>FEATURED PROJECTS</SectionHeadings>
      <StyledFeaturedProjects>

        {projects.map((project) => (
          <article key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
              <FeaturedProjectOverlay>
                <OverlayImage />
                <img src={project.img_src} alt={project.repo_name} />
                <ArticleText>{project.overlay_title}</ArticleText>
              </FeaturedProjectOverlay>
              <SubHeadings>{project.title}</SubHeadings>
              <ArticleText>{project.project_description}</ArticleText>
              <Tags>
                {project.tags && project.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>))}
              </Tags>
            </a>
          </article>
        ))}

      </StyledFeaturedProjects>
    </SectionContainer>
  )
}

export default FeaturedProjects;