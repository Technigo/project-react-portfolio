/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, Title, Tags, TagsContainer } from 'StyledComponents/GlobalComponents'

const MyProjects = styled.div`
background: #F4F4F4;
display: flex;
flex-direction: column;
align-items: center;
`

const TextContainerProjects = styled.h1`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    @media (min-width: 1025px) {
  display:grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 3vw;
    }
`

const Thumbnail = styled.img`
width: 40%;
`

const ImgOverlay = styled.div`

`

const Projects = () => {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceciliamichele/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const filteredProjects = projects.filter((project) => project.name.includes('project-'));

  return (
    <OuterWrapper>
      <InnerWrapper>
        <Title>Featured projects</Title>
        <MyProjects>

          <TextContainerProjects>
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <ImgOverlay>
                  <div>
                    <Thumbnail alt="project-img" src={`https://raw.githubusercontent.com/ceciliamichele/${project.name}/master/code/src/thumbnail/thumbnail.jpg`} />
                  </div>
                </ImgOverlay>
                <p>{project.name}</p>
                <p>{project.description}</p>
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