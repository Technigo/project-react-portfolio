import React from 'react'
import styled from 'styled-components'
import { Heading, Space, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'
import Project from './Project'
import projectData from '../projects.json'

const FeaturedProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 35px;

  @media (max-width: 669px) {
    grid-template-columns: 1fr;
  }
`

const Projects = () => {
  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Wrapper>
        <Heading>Projects</Heading>
        <FeaturedProjectContainer>
          {projectData.filter((project) => project.featured).map((project) => (
            <Project
              key={project.name}
              name={project.name}
              title={project.title}
              description={project.description}
              tags={project.tags}
              date={project.date}
              image={project.image}
              liveurl={project.liveurl}
              githuburl={project.githuburl}
              featured />
          ))}
        </FeaturedProjectContainer>
        <Space />
        {projectData.filter((project) => !project.featured).map((project) => (
          <Project
            key={project.name}
            name={project.name}
            title={project.title}
            description={project.description}
            tags={project.tags}
            date={project.date}
            image={project.image}
            liveurl={project.liveurl}
            githuburl={project.githuburl} />
        ))}

      </Wrapper>
    </PageSection>
  )
}

export default Projects