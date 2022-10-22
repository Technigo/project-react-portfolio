/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, A, P } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';
import { Tag, TagContainer } from 'StyledComponents/TagStyles.js'

const OtherProjects = () => {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/jesshansson/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const filteredProjects = projects.filter((project) => (project.name !== 'project-business-site') && (project.name !== 'project-news-site') && (project.name !== 'project-react-portfolio') && (project.name !== 'project-happy-thoughts') && (project.name !== 'project-survey') && (project.name !== 'jessicahansson') && (project.name !== 'project-portfolio') && (project.name !== 'project-movies'))

  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <SectionHeading>OTHER PROJECTS</SectionHeading>

        {filteredProjects.map((project) => <div key={project.id}>
          <A href={project.homepage} target="_blank">
            <ProjectHeading>{project.name.replaceAll('-', ' ').replaceAll('project', ' ').toUpperCase()}</ProjectHeading>
            <POther>{project.description} <Arrow> {'>>'} </Arrow></POther>
          </A>
          <TagContainer>{project.topics.map((topic) => <Tag>{topic}</Tag>)}
          </TagContainer>
        </div>)}
      </InnerWrapper>
    </OuterWrapper>
  )
}

const ProjectHeading = styled.h3`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 17px;
    line-height: 25px;
    letter-spacing: 0.01em;
    color: #aa658f;
    padding-top: 30px;
   
`
const POther = styled(P)`
  margin-bottom: 15px;
`
const Arrow = styled.span`
    color: #7c5f74;
    font-weight: 600;
`

export default OtherProjects;