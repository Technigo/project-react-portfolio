import React from 'react';
import styled from 'styled-components'

import { SectionSubTitle, Container } from './StyleComp'
import projects from './projects.json'

const OtherProjects = () => {
  return (
    <StyledOtherProjects>
      <SectionSubTitle>Other Projects</SectionSubTitle>
      <div>
        {projects.slice(2, 7).map((projectList) => (
          <ProjectWrapper key={projectList.id}>
            <a
              href={projectList.netlify_link}
              target="_blank"
              rel="noreferrer">
              <Title>{projectList.title}</Title>
              <p>{projectList.project_description}</p>
            </a>
            <TagWrapper>
              {projectList.tags.map((tag) => (
                <TagWrapperText key={tag.id}>{tag.tech}</TagWrapperText>
              ))}
              <a
                href={projectList.repo_link}
                target="_blank"
                rel="noreferrer"><TagRepo>GitHub Repo</TagRepo>
              </a>
            </TagWrapper>
          </ProjectWrapper>
        ))}
      </div>
    </StyledOtherProjects>
  )
}

export default OtherProjects

const StyledOtherProjects = styled(Container)`
  background-color: var(--color-grey);
`
export const ProjectWrapper = styled.div`
  margin-bottom: 1.5em;
  max-width: 80vw;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60vw;
    
  }
  @media screen and (min-width: 1024px) {
    width: 40vw;
  }
`
export const Title = styled.h3`
  color: var(--color-darkGreen);
  font-weight: 700;
  font-size: 1.3rem;
  text-transform: uppercase;
  text-align: left;
  margin: 10px 0 0;
`
export const TagWrapper = styled.div`
  display: flex;
  `
export const TagWrapperText = styled.p`
   font-family: "Roboto", sans-serif;
    color: #fff;
    font-weight: bold;
    background-color: var(--color-darkGreen);
    font-size: 12px;
    line-height: 12px;
    padding: 5px;
    margin: 3px 3px 3px 0;
    border-radius: 5px;
  `
export const TagRepo = styled(TagWrapperText)`
@media screen and (min-width: 1024px) {
  &:hover {
    opacity: 75%;
    transition: 0.3s ease;
  }
}`