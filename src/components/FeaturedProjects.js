import React from 'react'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles'
import styled from 'styled-components'
import { SectionHeading } from 'StyledComponents/HeadlineStyles'

const FeaturedProjects = () => {
  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <SectionHeading> FEATURED PROJECTS</SectionHeading>
        <ProjectsWrapper>
          <p>Project</p>
        </ProjectsWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const ProjectsWrapper = styled.section`
    display: grid;
    grid-template-columns: 1fr;

    @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default FeaturedProjects