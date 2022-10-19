/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper } from '../Styled components/GlobalStyles'
import { WhitePinkH2, PinkH3 } from '../Styled components/HeadlineStyles'

const GitHubAPI = 'https://api.github.com/users/jessikalind/repos'

const FeaturedProjects = () => {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch(GitHubAPI)
      .then((res) => res.json())
      .then((data) => setProjects(data))
  })

  // Filtering out all the projects which I do not want to display in featuredProjects
  const featuredProjects = projects.filter((project) => (project.name !== 'project-business-site') && (project.name !== 'project-chatbot') && (project.name !== 'project-guess-who') && (project.name !== 'project-portfolio') && (project.name !== 'project-news-site') && (project.name !== 'project-react-portfolio') && (project.name !== 'project-weather-app'))

  return (
    <OuterWrapper gray>
      <InnerWrapperFeaturedProjects>
        <WhitePinkH2Absolute>FEATURED PROJECTS</WhitePinkH2Absolute>
        {featuredProjects.map((project) =>
          <ProjectWrapper>
            <WillBeImage />
            <PinkH3>{project.name}</PinkH3>
          </ProjectWrapper>)}
      </InnerWrapperFeaturedProjects>
    </OuterWrapper>
  )
}

export default FeaturedProjects

const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 6vh;
`
const InnerWrapperFeaturedProjects = styled(InnerWrapper)`
    display: grid;
    grid-template-columns: 1fr;
    background-color: #F4F4F4;
    position:relative;
  
  @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3vw;
  }
`
const WillBeImage = styled.div`
  height: 200px;
  width: 200px;
  background-color: black;
`
const WhitePinkH2Absolute = styled(WhitePinkH2)`
  position: absolute; 
  top: 4vh;
`