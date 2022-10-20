/* eslint-disable react/jsx-closing-tag-location */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import { InnerWrapper, OuterWrapper } from 'StyledComponents/GlobalStyles';
import { SubHeading } from 'StyledComponents/HeadlineStyles';

const OtherProjects = () => {
  const [projects, SetProjects] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/jesshansson/repos')
      .then((res) => res.json())
      .then((data) => SetProjects(data))
  })

  const filteredProjects = projects.filter((project) => project.name === 'project-business-site');

  return (
    <OuterWrapper grey>
      <InnerWrapper>
        <SubHeading>OTHER PROJECTS</SubHeading>
        {filteredProjects.map((project) => <>
          <ProjectHeading>{project.name}</ProjectHeading>
          <OtherProjetsText>{project.description} <Arrow> {'>>'} </Arrow></OtherProjetsText>
        </>)}
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
   
`

const OtherProjetsText = styled.p`
    font-family: "Roboto";
    font-size: 17px;
    font-weight: 400;
    line-height: 29px;
    letter-spacing: 0em;

`

const Arrow = styled.span`
    color: #7c5f74;
    font-weight: 600;
`

export default OtherProjects;