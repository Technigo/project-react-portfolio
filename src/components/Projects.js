/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Container } from './styled-components/GlobalStyles'

const ArticleWrapper = styled.div`
@media (min-width: 1024px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 30px;
}`

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap; 

  p {
    font-family: 'Roboto', sans-serif;
    font-weight: normal;
    font-size: 12px;;
    line-height: 12px;
    background-color: #FDDFE7;
    padding: 4px;
    margin-right: 3px;
    border-radius: 5px;
    letter-spacing: 0.02em;
    color: #000000;
  }
`

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
    repos.filter((repo) => repo.topics.includes('portfolio')).map((filteredRepo) => {
      return (
        <section>
          <Container>
            <h2><span>FEATURED PROJECTS</span></h2>
            <ArticleWrapper>
              <article className="article-project" key={filteredRepo.full_name}>
                <a href={filteredRepo.homepage} target="_blank" rel="noreferrer">
                  <div className="project-img-group">
                    <img src="" />
                    <div className="overlay">
                      <h2 className="project-img-text-overlay">{filteredRepo.name}</h2>
                    </div>
                  </div>
                  <div className="project-text-group">
                    <p>{filteredRepo.description}</p>
                    <Tags>
                      <p>Javascript</p>
                      <p>React.js</p>
                      <p>APIs</p>
                      <p>HTML</p>
                      <p>CSS</p>
                    </Tags>
                  </div>
                </a>
              </article>
            </ArticleWrapper>
          </Container>
        </section>

      )
    })
  )
}

export default Projects;