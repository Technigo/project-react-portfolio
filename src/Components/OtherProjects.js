/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, Tags, TagsContainer } from 'StyledComponents/GlobalComponents'

const OtherProjectsContainer = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Arrow = styled.span`
color: red;
font-weight: 600;   
`

const OtherProjects = () => {
  const [otherProjects, SetOtherProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceciliamichele/repos')
      .then((res) => res.json())
      .then((data) => SetOtherProjects(data))
  })

  const filteredProjects = otherProjects.filter((project) => project.name.includes('project-'));
  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectsContainer>
          <Title>Other projects</Title>
          {filteredProjects.map((project) => (
            <div key={project.id}>

              <p>{project.name}</p>
              <p>{project.description}  <Arrow>&gt;&gt; </Arrow></p>
              <TagsContainer> {project.topics.map(((topic) => <Tags>{topic}</Tags>))}</TagsContainer>
            </div>
          ))}

        </OtherProjectsContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}
/* <p> Om projektet</p> <Arrow>&gt;&gt; </Arrow> */
export default OtherProjects