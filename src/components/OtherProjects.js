/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper, P, A } from 'StyledComponents/GlobalStyles';
import { SectionHeading } from 'StyledComponents/HeadlineStyles';

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
        {filteredProjects.map((project) => <A href={project.html_url}>
          <ProjectHeading>{project.name.replaceAll('-', ' ').replaceAll('project', ' ').toUpperCase()}</ProjectHeading>
          <OtherProjetsText>{project.description} <Arrow> {'>>'} </Arrow></OtherProjetsText>
        </A>)}
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
    text-align: center;
    margin: 10px;
   
`

const OtherProjetsText = styled(P)`
text-align: center;
`

const Arrow = styled.span`
    color: #7c5f74;
    font-weight: 600;
`

export default OtherProjects;