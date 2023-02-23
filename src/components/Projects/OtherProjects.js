import { InnerWrapper, OuterWrapper } from 'components/Styles/Globalstyles';
import React from 'react';
import styled from 'styled-components'

import projects from './data/projects.json'
import { Headings } from '../Reusable/Headings';

const OtherProjects = () => {
  return (
    <OuterWrapper>
      <Headings heading="Other Projects" />
      <InnerWrapper>
        {projects.slice(2, 8).map((projectList) => (
          <div key={projectList.id}>
            <a
              href={projectList.netlify_link}
              title="Click to view it live"
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
                title="Link to GitHub repo"
                target="_blank"
                rel="noreferrer"><TagRepo>GitHub Repo 👈</TagRepo>
              </a>
            </TagWrapper>
          </div>
        ))}
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects

export const Title = styled.h3`
  color: var(--color-darkGreen);
  text-shadow: .5px .5px var(--color-beige);
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.2em;
  margin: .5em 0;
`
export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  `
export const TagWrapperText = styled.p`
    font-family: "Roboto", sans-serif;
    color: white;
    font-weight: bold;
    background-color: var(--color-darkGreen);
    font-size: .8em;
    line-height: 1em;
    padding: .5em;
    margin: .5em .2em 1.8em 0;
    border-radius: 5px;
  `
export const TagRepo = styled(TagWrapperText)`
@media screen and (min-width: 1024px) {
  &:hover {
    opacity: 75%;
    transition: 0.3s ease;
  }
}`