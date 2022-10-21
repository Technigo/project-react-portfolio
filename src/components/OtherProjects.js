import styled from 'styled-components';
import React from 'react'
import { Section, SectionHeader } from 'components/Section'

export const OtherProjects = () => {
  return (
    <Section primary>
      <SectionHeader>OTHER PROJECTS</SectionHeader>
      <OtherProjectText>
        <p>
        OtherProjects
        </p>
      </OtherProjectText>
    </Section>
  )
}

export default OtherProjects;

const OtherProjectText = styled.p`
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    margin: 0px auto 30px;
    width: 320px;
`