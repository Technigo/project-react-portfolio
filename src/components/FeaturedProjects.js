/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react'
import { InnerWrapper, OuterWrapper, P } from 'StyledComponents/GlobalStyles'
import styled from 'styled-components'
import { SectionHeading, SubHeading } from 'StyledComponents/HeadlineStyles'

const FeaturedProjects = () => {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/jesshansson/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const featuredProjects = projects.filter((project) => project.name.includes('project-'));

  return (
    <OuterWrapper grey>
      <InnerWrapperProjects>
        <SectionHeadingProjects> FEATURED PROJECTS</SectionHeadingProjects>
        {featuredProjects.map((project) =>
          <ProjectsWrapper>
            <SubHeading>{project.name}</SubHeading>
            <PProject>{project.description}</PProject>
          </ProjectsWrapper>)}
      </InnerWrapperProjects>
    </OuterWrapper>
  )
}

const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6vh;
  
`;

const InnerWrapperProjects = styled(InnerWrapper)`
    display: grid;
    grid-template-columns: 1fr;
    position: relative;

    @media (min-width: 668px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SectionHeadingProjects = styled(SectionHeading)`
  position: absolute; 
  top: 4vh;
`
const PProject = styled(P)`
  text-align: center
`
export default FeaturedProjects