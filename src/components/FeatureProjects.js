import React from 'react'
import { Section, SectionHeader } from 'components/Section'
import ProjectList from 'components/ProjectList';

export const FeatureProjects = () => {
  return (
    <Section primary>
      <SectionHeader>FEATURE PROJECTS</SectionHeader>
      <ProjectList />
    </Section>
  )
}

export default FeatureProjects;

