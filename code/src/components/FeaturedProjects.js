import React from 'react';
import styled from 'styled-components'
import OtherProjects from './OtherProjects';

import { SectionTitle, Container } from './StyleComp'
import projects from './projects.json'

const FeaturedProjects = () => {
  console.log(projects)
  return (
    <>
      <StyledFeaturedProjects>
        <SectionTitle>Featured Projects</SectionTitle>
        {projects.map((item) => (
          <div key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.project_description}</p>
            <p>{item.tags}</p>
            <p>{item.repo_link}</p>
          </div>
        ))}
      </StyledFeaturedProjects>
      <OtherProjects />
    </>
  )
}

export default FeaturedProjects

const StyledFeaturedProjects = styled(Container)`
  background-color: var(--color-grey);

`
