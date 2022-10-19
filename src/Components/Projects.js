/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, Title } from 'StyledComponents/GlobalComponents'

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
`

const TagsContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

const Tags = styled.div`
font-family: "Roboto", sans-serif;
  font-weight: bold;
  background-color: #FDDFE7;
  font-size: 12px; 
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
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
        <MyProjects>
          <Title>Featured projects</Title>
          <TextContainerProjects>
            {filteredProjects.map((project) => (
              <div key={project.id}>
                <p>{project.name}</p>
              </div>
            ))}
          </TextContainerProjects>
          <TagsContainer>
            <Tags>HTML5</Tags>
            <Tags>CSS3</Tags>
            <Tags>JavaScript</Tags>
            <Tags>React</Tags>
          </TagsContainer>

        </MyProjects>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default Projects