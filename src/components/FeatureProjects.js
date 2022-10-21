import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'

export const FeatureProjects = () => {
  return (
    <Section primary>
      <SectionHeader>FEATURE PROJECTS</SectionHeader>
      <FeatureProjectsText>
        <p>
          Feature projects
        </p>
      </FeatureProjectsText>
    </Section>
  )
}

export default FeatureProjects;

const FeatureProjectsText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`