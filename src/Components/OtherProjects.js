/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { OuterWrapper, InnerWrapper, Title, Tags, TagsContainer, RedTitle, Link } from 'StyledComponents/GlobalComponents'

const OtherProjectsContainer = styled.div`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    display: flex;
    flex-direction: column;
`

export const ClonedRedTitle = styled(RedTitle)`
  font-weight: bold;
`

export const Arrow = styled.span`
color: #D7E3DA;
font-weight: 600;   
`

const OtherProjects = () => {
  const [otherProjects, SetOtherProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/ceciliamichele/repos')
      .then((res) => res.json())
      .then((data) => SetOtherProjects(data))
  })

  const filteredProjects = otherProjects.filter((project) => (project.name === 'project-happy-thoughts-api') || (project.name.includes('guess')) || (project.name.includes('mongo-api')) || (project.name.includes('express')) || (project.name.includes('weather')))
  return (
    <OuterWrapper>
      <InnerWrapper>
        <OtherProjectsContainer>
          <Title>Other projects</Title>
          {filteredProjects.map((project) => (
            <div key={project.id}>
              <Link href={project.homepage}>
                <ClonedRedTitle>
                  <p>{project.name.replaceAll('-', ' ').toUpperCase()}.</p>
                </ClonedRedTitle>
                <p>{project.description}  <Arrow>&gt;&gt; </Arrow></p>
              </Link>
              <TagsContainer> {project.topics.map(((topic) => <Tags>{topic}</Tags>))}</TagsContainer>
            </div>
          ))}

        </OtherProjectsContainer>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default OtherProjects