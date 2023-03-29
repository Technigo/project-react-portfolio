import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import projectfinal from './images/projectfinal.png'
import {
  OuterWrapper,
  InnerWrapper,
  Heading,
  Topics,
  ProjectsHeading,
  TopicsContainer
} from './Styling'

const GithubAPI = 'https://api.github.com/users/marwebdesign/repos'

export const FinalProject = () => {
  const [finalProject, setFinalProject] = useState([''])
  useEffect(() => {
    fetch(GithubAPI)
      .then((res) => res.json())
      .then((data) => {
        setFinalProject(data)
      })
  }, [])

  const Final = finalProject.filter((final) => final.name === 'final-project')
    < FinalWrapper >
  {
    FinalProject.map((final) => (
      <FinalImage alt="project-img" src={projectfinal} />
    ))
  }
</FinalWrapper >

}