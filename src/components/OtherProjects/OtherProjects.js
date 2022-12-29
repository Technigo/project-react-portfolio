/* eslint-disable linebreak-style */
import React from 'react'
import projects from 'data/other-projects.json'
import { SectionContainer, SectionHeadings, Tags, SubHeadings, ArticleText } from 'Globalstyles';
import { ProjectWrapper, StyledProjectGrid } from 'components/FeaturedProjects/FeaturedProjects.styles';

const OtherProjects = () => {
  return (
    <SectionContainer bgColor="#d0c9c05c">
      <SectionHeadings>OTHER PROJECTS</SectionHeadings>
      <StyledProjectGrid>

        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
              <SubHeadings>{project.title}</SubHeadings>
              <ArticleText>{project.project_description}</ArticleText>
              <Tags>
                {project.tags && project.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>))}
              </Tags>
            </a>
          </ProjectWrapper>
        ))}

      </StyledProjectGrid>
    </SectionContainer>
  )
}

export default OtherProjects;