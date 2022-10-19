
import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerColored, SectionHeader, HeaderContainer } from 'GlobalStyles';

const SmallContainer = styled.div`
display: flex; 
flex-direction: row; 
grid-auto-flow: dense;  
`

const ProjectContainer = styled.div`
display: flex;
flex-direction: column; 
`
const Row = styled.div`
display: flex; 
flex-direction: column; `

const Img = styled.img`
width: 100px; 
height:100px; `

const Projects = () => {
  const [projects, setProjects] = useState([])

  const options = {
    method: 'GET',
    headers: {
      Authorization: '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'
    }
  }

  fetch('https://api.github.com/users/AmandaElvkull/repos', options)
    .then((Response) => Response.json())
    .then((json) => setProjects(json))
    .catch((error) => alert(error, 'error'))

  return (
    <ContainerColored>
      <HeaderContainer>
        <SectionHeader>Projects</SectionHeader>
      </HeaderContainer>
      <SmallContainer>
        <Row>
          {projects.filter((project) => project.fork === true).slice(0, 4).map((project) => (
            <ProjectContainer key={project.id}>
              <a
                href={project.html_url}
                target="_blank"
                rel="noreferrer">
                <img
                  src=""
                  alt="hello" />
              </a>

              <h4> {project.name}</h4>
            </ProjectContainer>

          ))}
          <div className="text-container">
            <p> lorem lorem lorem lorem </p>
            <p> wrapper</p>
          </div>

          <Img src="/assets/chatbot.jpg" alt="chatbot" />
        </Row>
        {/*   <div className="overlay">
          <p className="overlay-text">
                Heding
          </p>
        </div> */}
      </SmallContainer>
    </ContainerColored>
  )
}
export default Projects