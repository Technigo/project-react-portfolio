/* eslint-disable linebreak-style */
import React from 'react'
import projects from 'other-projects.json'
import { SectionContainer, SectionHeadings, Tags, SubHeadings, ArticleText } from 'Globalstyles';
import { StyledFeaturedProjects, FeaturedProject } from 'components/FeaturedProjects/FeaturedProjects.styles';

const OtherProjects = () => {
  return (
    <SectionContainer bgColor="#eeeeee">
      <SectionHeadings>OTHER PROJECTS</SectionHeadings>
      <StyledFeaturedProjects>

        {projects.map((project) => (
          <FeaturedProject key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
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

export default OtherProjects;