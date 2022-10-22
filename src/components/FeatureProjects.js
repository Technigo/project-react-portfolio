import React from 'react'
import styled from 'styled-components';
import { Wrapper, SectionHeader } from 'components/GlobalStyles'
import ProjectList from 'components/ProjectList';

export const FeatureProjects = () => {
  return (
    <FeatureWrapper primary>
      <SectionHeader>FEATURE PROJECTS</SectionHeader>
      <ProjectList />
    </FeatureWrapper>
  )
}

export default FeatureProjects;

const FeatureWrapper = styled(Wrapper)`
`