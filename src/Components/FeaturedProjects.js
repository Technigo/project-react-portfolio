/* eslint-disable implicit-arrow-linebreak */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { TagContainer, Tag } from 'Styled components/TagStyles'
import { OuterWrapper, InnerWrapper, P } from '../Styled components/GlobalStyles'
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
            <ImageContainer>
              <ImageOverlay>
                <p>{project.name.replaceAll('-', ' ').toUpperCase()}</p>
              </ImageOverlay>
              <img alt="project-img" src={`https://raw.githubusercontent.com/jessikalind/${project.name}/master/code/Thumbnail/thumbnail.png`} />
            </ImageContainer>
            <PinkH3>{project.name.replaceAll('-', ' ').toUpperCase()}</PinkH3>
            <P>{project.description}</P>
            <TagContainer>{project.topics.map((topic) => <Tag>{topic}</Tag>)}
            </TagContainer>
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

const WhitePinkH2Absolute = styled(WhitePinkH2)`
  position: absolute; 
  top: 4vh;
`

const ImageContainer = styled.div`
  position: relative;
  transition: 0.5s ease;

  img {
    display: block;
    width: 100%;
  }
`
const ImageOverlay = styled.div`
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    width: 100%;
    height: 100%;
    transition: .5s ease;
    opacity:1;
    text-align: center;

    p {
      padding: 25%;
      font-weight: 700;
      font-size: 28px;
      line-height: 34px;
      letter-spacing: 0.01em;
      font-family: 'Montserrat';
    }

  &:hover {
    opacity: 0;
  }

`