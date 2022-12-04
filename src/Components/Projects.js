/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, Title, Tags, TagsContainer, Link } from 'StyledComponents/GlobalComponents'
import { ClonedRedTitle } from './OtherProjects'

const MyProjects = styled.div`
background: #F4F4F4;
display: flex;
flex-direction: column;
align-content: center;
align-items: center;
align-self: center;
justify-content: center;
`

const TextContainerProjects = styled.h1`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display:grid;
    grid-template-columns: 1fr;
   padding: 15px;
    
    @media (min-width: 1025px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 3vw;
    }
`

const ImageContainer = styled.div`
  transition: 0.5s ease;

`
const Thumbnail = styled.img`
   display: block;
    width: 100%;
    filter: brightness(0.50);
`

const ImgOverlay = styled.div`
  display:flex; 
  justify-content:center;
  position: relative;

  p {
    color: white;
    position: absolute;
    top: 40%;
    font-weight: bold;
   }
`

const Projects = () => {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceciliamichele/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const filteredProjects = projects.filter((project) => (project.name.includes('redux')) || (project.name.includes('todo')) || (project.name === 'project-happy-thoughts') || (project.name.includes('movies')) || (project.name.includes('survey')) || (project.name.includes('music')))

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>Featured projects</Title>
        <MyProjects>
          <TextContainerProjects>
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <Link href={project.homepage}>
                  <ImageContainer>
                    <ImgOverlay>
                      <Thumbnail alt="project-img" src={`https://raw.githubusercontent.com/ceciliamichele/${project.name}/master/code/src/thumbnail/thumbnail.jpg`} />
                      <p>{project.name.replaceAll('-', ' ').toUpperCase()}</p>
                    </ImgOverlay>
                    <ClonedRedTitle>
                      <p>{project.name.replaceAll('-', ' ').toUpperCase()}.</p>
                    </ClonedRedTitle>
                  </ImageContainer>
                  <p>{project.description}</p>
                </Link>
                <TagsContainer> {project.topics.map(((topic) => <Tags>{topic}</Tags>))}</TagsContainer>
              </div>
            ))}
          </TextContainerProjects>
        </MyProjects>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Projects