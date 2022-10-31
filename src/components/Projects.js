import React from 'react'
import { Heading, Subheading, Wrapper } from './ComponentLibrary'
import PageSection from './PageSection'
import Project from './Project'
import projectData from '../projects.json'

const Projects = () => {
  return (
    <PageSection backgroundColor="var(--sectionbg)">
      <Wrapper>
        <Heading>Featured Projects</Heading>
        <div style={{ gridTemplateColumns: '1fr 1fr', display: 'grid', gap: 30 }}>

          {projectData.filter((project) => project.featured).map((project) => (
            <Project
              key={project.name}
              name={project.name}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              url={project.url}
              featured />
          ))}
        </div>

        <Subheading>Other Projects</Subheading>
        {projectData.filter((project) => !project.featured).map((project) => (
          <Project
            key={project.name}
            name={project.name}
            title={project.title}
            description={project.description}
            tags={project.tags}
            image={project.image}
            url={project.url} />
        ))}

      </Wrapper>
    </PageSection>
  )
}

export default Projects