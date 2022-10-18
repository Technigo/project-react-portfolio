
import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.article`
background: Lightgrey;
padding-right: 4em; 
padding-left: 4em; 
padding-top: 2em; 
padding-bottom: 2em; 
display:flex; 
flex-direction: column; 
/* display: grid; 
grid-template-columns: 1fr 1fr 1fr;  */

 @media (min-width: 768px) {
  padding-right: 10em; 
  padding-left: 10em;
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr 1fr;  
    
  }
  @media (min-width: 1024px) {
  padding-right: 15em; 
  padding-left: 15em; }

 `
const SmallContainer = styled.div`
display: grid; 
grid-column: span 4; 
`
const HeaderContainer = styled.div`
  display: flex; 
  justify-content: center;
  grid-column: span 4; 
`
const SectionHeader = styled.h2`
   text-align: center;
  background-color: rgb(185, 0, 91);
  font-size: 30px;
  text-transform: uppercase;
  color: white;
  padding:3px;
  font-family:'montserrat', sans-serif;`

const ProjectContainer = styled.div`
display: grid; `

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
    <Container>
      <HeaderContainer>
        <SectionHeader>Projects</SectionHeader>
      </HeaderContainer>
      <SmallContainer>
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
            <div className="text-container">
              <h4> {project.name}</h4>
              <p> lorem lorem lorem lorem </p>
              <p> wrapper</p>
            </div>
          </ProjectContainer>
        ))}

        {/*   <div className="overlay">
          <p className="overlay-text">
                Heding
          </p>
        </div> */}
      </SmallContainer>
    </Container>
  )
}
export default Projects