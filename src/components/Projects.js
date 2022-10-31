import React, { useState, useEffect } from 'react'
import { ProyectsTextGroup, ImgCode, ImgGroup, Overlay, OverlayName, Tags, Article, ArticleWrapper } from './styled-components/ProjectsStyles'
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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  console.log(repos)

  const filteredRepo = repos.filter((repo) => repo.topics.includes('portfolio'))

  return (
    <section>
      <Container>
        <h2><span>FEATURED PROJECTS</span></h2>
        <ArticleWrapper>
          {filteredRepo.map((repo) => (
            <Article className="article-project" key={repo.full_name}>
              <a href={repo.homepage} target="_blank" rel="noreferrer">
                <ImgGroup>
                  <ImgCode src={`https://raw.githubusercontent.com/Sailornina/${repo.name}/${repo.default_branch}/screenshot.png`} />
                  <Overlay>
                    <OverlayName>{repo.name}</OverlayName>
                  </Overlay>
                </ImgGroup>
                <ProyectsTextGroup>
                  <p>{repo.description}</p>
                  <Tags>
                    <p>Javascript</p>
                    <p>React.js</p>
                    <p>APIs</p>
                    <p>HTML</p>
                    <p>CSS</p>
                  </Tags>
                </ProyectsTextGroup>
              </a>
            </Article>
          ))}
        </ArticleWrapper>
      </Container>
    </section>
  )
}

export default Projects;