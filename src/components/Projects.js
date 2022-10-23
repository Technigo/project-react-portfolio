/* eslint-disable no-template-curly-in-string */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
/* import imgCode from 'images/code.pink-1.png' */
import { Container } from './styled-components/GlobalStyles'

const ArticleWrapper = styled.div`
@media (min-width: 1024px){
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  column-gap: 30px;
}`

const Article = styled.div`
margin-top: 40px;
`

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
const ProyectsTextGroup = styled.div`
  font-weight: bold;
  font-size: 17px;
  line-height: 29px;
  align-items: center;
  letter-spacing: 0.01em;
  padding-top: 24px;
`
const ImgGroup = styled.div`
position: relative;`

const ImgCode = styled.img`
  width: 100%;
  height: 250px;
  display: inherit;
  transition: 0.5s ease;
`
const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(116, 141, 166, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s ease;
    
  &:hover {
    background-color: transparent;
}`

const OverlayName = styled.h2`
color: black;
font-style: normal;
font-weight: bold;
font-size: 25px;
margin-bottom: 0px;

&:hover {
  color: transparent;
  
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