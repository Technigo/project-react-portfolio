import React from 'react'
import PageSection from './PageSection'
import Project from './Project'
import Wrapper from './Wrapper'

const Projects = () => {
  return (
    <PageSection>
      <Wrapper>
        <h2>Featured Projects</h2>
        <Project title="Test 1" featured />
        <Project title="Test 2" featured />
        <Project title="Test 3" featured />
        <Project title="Test 4" featured />
        <h2>Other Projects</h2>
        <Project title="Test 1" />
        <Project title="Test 2" />
      </Wrapper>
    </PageSection>
  )
}

export default Projects