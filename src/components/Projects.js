/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { Container } from './styled-components/GlobalStyles'

const Projects = () => {
  const [repos, setRepos] = useState([])
  const API_GITHUB = 'https://api.github.com/users/Sailornina/repos'

  const options = {
    method: 'GET',
    headers: {
      Authorization: process.env.API_TOKEN
    }
  }

  useEffect(() => {
    fetch(API_GITHUB, options)
      .then((res) => res.json())
      .then((json) => {
        setRepos(json)
      })
  }, [])

  console.log(repos)
  return (
    <section>
      <Container>
        <h2><span>FEATURED PROJECTS</span></h2>
      </Container>
    </section>
  )
}

export default Projects;