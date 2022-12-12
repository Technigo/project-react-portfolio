import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SiteSection, SectionTitle } from './global/GlobalStyling';
import { ProjectCard } from './ProjectCard'
import data from '../data.json'

const projectsPerRow = 2;

export const Projects = () => {
  const [next, setNext] = useState(projectsPerRow);
  const loadMoreProjects = () => {
    setNext(next + projectsPerRow);
  };
  return (
    <OuterWrapper>
      <InnerWrapper>
        <SiteSection>
          <SectionTitle>Featured Projects</SectionTitle>
          <FeaturedProjectsWrapper>
            {data.filter((project) => project.featured).reverse().map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                href={project.github}
                image={project.image}
                name={project.name}
                tools={project.tools}
                featured />
            ))}
          </FeaturedProjectsWrapper>

          <OtherProjectHeading>Other Projects</OtherProjectHeading>
          <OtherProjectsWrapper>
            {data.filter((project) => !project.featured).reverse().slice(0, next).map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                tools={project.tools}
                href={project.github} />
            ))}
            {next < data.length && (
              <LoadMoreWrapper>
                <LoadMoreProjectsButton
                  className="mt-4 button-one"
                  onClick={loadMoreProjects}>
                Load more
                </LoadMoreProjectsButton>
              </LoadMoreWrapper>
            )}
          </OtherProjectsWrapper>
        </SiteSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const LoadMoreWrapper = styled.div`
width: 100%;
text-align: center;
`

const LoadMoreProjectsButton = styled.button`
border: none;
border-top: 1px solid var(--color-turquoise);
border-bottom: 1px solid var(--color-turquoise);
margin-top: 30px;
background-color: var(--color-white);
cursor: pointer;
transition: transform .2s;

&:hover {
  transform: scale(1.5);
}
`

const FeaturedProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  text-align: left;
  @media (max-width: 667px) {
    grid-template-columns: 1fr;
  }
`
const OtherProjectsWrapper = styled.div`
  margin-bottom: 30px;
  text-align: left;
  `
const OtherProjectHeading = styled.h3`
    color: #548179;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 20px;
    margin-top: 50px;
  `