import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import {
  OuterWrapper,
  InnerWrapper,
  Heading,
  Topics,
  ProjectsHeading,
  TopicsContainer
} from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState([''])

  useEffect(() => {
    fetch(GithubAPI)
      .then((res) => res.json())
      .then((data) => {
        setFeaturedProjects(data)
      })
  }, [])
  const BigProjects = featuredProjects.filter((firstProjects) => (firstProjects.name === 'project-happy-thoughts') || (firstProjects.name === 'project-labyrinth') || (firstProjects.name === 'project-todos') || (firstProjects.name === 'project-redux-quiz') || (firstProjects.name === 'project-music-releases') || (firstProjects.name === 'project-movies'));
  return (
    <OuterWrapper beige>
      <Heading dark>FEATURED PROJECTS</Heading>
      <InnerWrapper>
        <FeaturedProjectsContent>
          {BigProjects.map((prop) => (
            <FeaturedProjectsContainer key={prop.id}>
              <ProjectLink href={prop.homepage} alt="Link to project" target="_blank">
                <ImageAndName>
                  <BigProjectsImage alt="project-img" src={`https://raw.githubusercontent.com/marwebdesign/${prop.name}/master/code/Thumbnail/thumbnail.png`} />
                  <ProjectNameOverImage>{prop.name.replace(/project-/g, '').replace(/-/g, ' ').toUpperCase()}</ProjectNameOverImage>
                </ImageAndName>
                <ProjectsHeading>{prop.name.replace(/-/g, ' ').toUpperCase()}</ProjectsHeading>
              </ProjectLink>
              <ProjectLink href={prop.html_url} alt="Link to project" target="_blank">{prop.description}</ProjectLink>
              <TopicsContainer>
                {prop.topics.map((tag) => (
                  <Topics>{tag}</Topics>
                ))}
              </TopicsContainer>
            </FeaturedProjectsContainer>
          ))}
        </FeaturedProjectsContent>
      </InnerWrapper>
    </OuterWrapper>
  )
}

const FeaturedProjectsContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  font-family:'Roboto', sans-serif;
  line-height: 30px;
  margin-bottom: 20px;

  @media (min-width: 1025px) {
  grid-template-columns: repeat(2, 1fr);
  column-gap: 5%;
  }
`

const FeaturedProjectsContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ImageAndName = styled.div`
  position: relative;
`

const BigProjectsImage = styled.img`
  width: 100%;
  border: 4px solid #D36B00;
  border-radius: 10px;
  opacity: 0.5;
&:hover {
  opacity: 1;
  transition: 0.5s ease-in-out;
}
`

const ProjectNameOverImage = styled.h2`
  text-transform: uppercase;
  position: absolute;
  background-color: #D36B00;
  padding: 2px 6px;
  display: inline;
  font-size: 22px;
  border-radius: 5px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
&:hover {
  opacity: 1;
}
`

const ProjectLink = styled.a`
  color: black;
  text-decoration: none;
&:visited {
  color:black;
}
`
