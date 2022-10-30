import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Section, SectionHeadline, SectionHeadlineBg } from 'StyledComponents/Section';
import { FaGithub } from 'react-icons/fa'
import { MdWeb } from 'react-icons/md'
import GuessWho from './assets/guesswho.png'
import HappyThoughts from './assets/happythoughts.png'
import Movies from './assets/movies.png'
import Weather from './assets/weather.png'

const ProjectContainer = styled.div`
display: grid;
grid-template-columns: repeat(2, 1fr);
gap: 15px;
margin-bottom: 30px;

@media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 15px;
  }
`

const CardContainer = styled.div`
display: grid;
padding: 0px 0px 10px 0px;
gap: 20px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
transition: 0.3s;
background-color: #fff;
&:hover {
position: relative;
box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}
`

const OtherProjects = styled.div`
display: flex;
flex-flow: row-wrap;
position: relative;
@media (max-width: 768px) {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  padding: 15px;
}
`

const OtherProjectsList = styled.div`
display: grid; 
grid-column: 1 / 2; 
display: flex; 
flex-direction: column; 
justify-content: space-evenly;
margin: 0px auto;
`

const ProjectImage = styled.img`
width: 100%;
margin-bottom: 0.5rem;
transition: opacity 0.4s;
display: block;
position: relative;
justify-content: center;
}
`

const ProjectInfo = styled.p`
font-family: 'Montserrat', sans-serif;
text-align: center;
font-size: 20px;
margin: 0px auto;
`

const LanguageIconContainer = styled.div`
display: flex;
gap: 10px;
align-items: center;
margin: 0px auto;
`

const LanguageIcon = styled.p`
border: 1px solid;
font-family: 'Montserrat', sans-serif;
padding: 4px;
`

const OtherProjectName = styled.a`
color: black;
font-family: 'Montserrat', sans-serif;
text-align: center;
`

const OtherProjectDesc = styled.p`
font-family: 'Montserrat', sans-serif;
`

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Authorization: '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'
      }
    }
    fetch('https://api.github.com/users/hannanorgard/repos', options)
      .then((Response) => Response.json())
      .then((json) => setProjects(json))
  }, []);
  console.log(projects)

  return (
    <Section first>
      <SectionHeadline><SectionHeadlineBg>PROJECTS</SectionHeadlineBg></SectionHeadline>
      <ProjectContainer>
        <CardContainer>
          <ProjectImage src={GuessWho} alt="Guess Who-game" />
          {/* <OverlayContainer>
            <OverlayText>GUESS WHO?</OverlayText>
          </OverlayContainer> */}
          <ProjectInfo>
            A digital take on a classic game, made with vanilla JavaScript.
          </ProjectInfo>
          <LanguageIconContainer>
            <LanguageIcon>HTML</LanguageIcon>
            <LanguageIcon>CSS</LanguageIcon>
            <LanguageIcon>JavaScript</LanguageIcon>
            <a
              href="https://github.com/hannanorgard/project-guess-who"
              target="_blank"
              rel="noreferrer">
              <FaGithub size="25px" />
            </a>
            <a
              href="https://guezzwho.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <MdWeb size="25px" />
            </a>
          </LanguageIconContainer>
        </CardContainer>
        <CardContainer>
          <ProjectImage src={HappyThoughts} alt="Happy Thoughts-app" />
          {/* <OverlayContainer>
            <OverlayText>HAPPY THOUGHTS</OverlayText>
          </OverlayContainer> */}
          <ProjectInfo>
            Made by fetching and posting through an API,
            this app renders happy thoughts. Made with React.
          </ProjectInfo>
          <LanguageIconContainer>
            <LanguageIcon>React</LanguageIcon>
            <LanguageIcon>CSS</LanguageIcon>
            <LanguageIcon>API</LanguageIcon>
            <a
              href="https://github.com/hannanorgard/project-happy-thoughts"
              target="_blank"
              rel="noreferrer">
              <FaGithub size="25px" />
            </a>
            <a
              href="https://hannashappythoughts.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <MdWeb size="25px" />
            </a>
          </LanguageIconContainer>
        </CardContainer>
        <CardContainer>
          <ProjectImage src={Movies} alt="Movie-app" />
          {/* <OverlayContainer>
            <OverlayText>MOVIE APP</OverlayText>
          </OverlayContainer> */}
          <ProjectInfo>
            This app fetches newly released movies from an API. <br />
            Made with React Router, you can click movies and
            go to their respective details page.
          </ProjectInfo>
          <LanguageIconContainer>
            <LanguageIcon>CSS</LanguageIcon>
            <LanguageIcon>React</LanguageIcon>
            <LanguageIcon>API</LanguageIcon>
            <a
              href="https://github.com/hannanorgard/project-movies"
              target="_blank"
              rel="noreferrer">
              <FaGithub size="25px" />
            </a>
            <a
              href="https://hannakimmovietime.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <MdWeb size="25px" />
            </a>
          </LanguageIconContainer>
        </CardContainer>
        <CardContainer>
          <ProjectImage src={Weather} alt="Weather-app" />
          {/* <OverlayContainer>
            <OverlayText>WEATHER APP</OverlayText>
          </OverlayContainer> */}
          <ProjectInfo>
            A weather app where you can search for cities and <br />
            render a 5-day forecast. Made with Open Weather Map-API.
          </ProjectInfo>
          <LanguageIconContainer>
            <LanguageIcon>CSS</LanguageIcon>
            <LanguageIcon>JavaScript</LanguageIcon>
            <LanguageIcon>API</LanguageIcon>
            <a
              href="https://github.com/hannanorgard/project-weather-app"
              target="_blank"
              rel="noreferrer">
              <FaGithub size="25px" />
            </a>
            <a
              href="https://hannajacobnick-weather-app.netlify.app/"
              target="_blank"
              rel="noreferrer">
              <MdWeb size="25px" />
            </a>
          </LanguageIconContainer>
        </CardContainer>
      </ProjectContainer>
      <SectionHeadline><SectionHeadlineBg>OTHER PROJECTS</SectionHeadlineBg></SectionHeadline>
      <OtherProjects>
        {/* eslint-disable-next-line max-len  */}
        {projects.filter((project) => project.description).map((project) => (
          <OtherProjectsList key={project.id}>
            <OtherProjectName
              href={project.html_url}
              aria-label="link"
              target="_blank"
              rel="noreferrer">
              <h4>{project.name}</h4>
            </OtherProjectName>
            <OtherProjectDesc>
              {project.description}
            </OtherProjectDesc>
            <LanguageIconContainer>
              {project.topics.map((topic) => <LanguageIcon>{topic}</LanguageIcon>)}
            </LanguageIconContainer>
          </OtherProjectsList>
        ))}
      </OtherProjects>
    </Section>
  )
}

export default Projects;