
import React, { useState } from 'react';
import styled from 'styled-components';
import { ContainerColored, SectionHeader, HeaderContainer } from 'GlobalStyles';

const Container = styled(ContainerColored)`
display: grid; 
grid-template-columns: 1fr;


@media (min-width: 768px) {
 padding-left: 8em; 
 padding-top: 3em;
 grid-template-columns: 1fr 1fr ; 
    
  }
  @media (min-width: 1024px) {
  padding-left: 8em; 
  padding-top: 3em;
    
  }`

const ProjectContainer = styled.div`

 



`
const Row = styled.div`
display: flex; 
flex-direction: row; 
gap: 10px;
align-items: center;
padding-top: 2em;  
/* padding-right: 6em;  */
@media (min-width: 768px) {
 padding-left: 8em; 
 padding-top: 3em;

    
  }
  @media (min-width: 1024px) {
  padding-left: 8em; 
  padding-top: 3em;
 
  }
`

const Img = styled.img`
width: 350px; 
height:250px; 
display: relative; 
/* padding-right: 3em; */ 


`
const Overlay = styled.div`
position: absolute;
left: 30px; 
width: 350px;
height: 250px;
background: rgba(156, 166, 197, 0.5);
display: flex;
justify-content: center;
align-items: center;
color: #fff;
font-size: 28px;
font-family: "Montserrat", sans-serif;
text-transform: uppercase;
/* ${Img}:hover &{
  display: flex;

} */
`
const Link = styled.a``

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

  /*   const ImageArray = [
    { image: <img src="/assets/chatbot.jpg" alt="chatbot" /> },
    { image: <img src="/assets/chatbot.jpg" alt="chatbot" /> },
    { image: <img src="/assets/chatbot.jpg" alt="chatbot" /> },
    { image: <img src="/assets/chatbot.jpg" alt="chatbot" /> }
  ] */

  return (
    <Container>
      <HeaderContainer>
        <SectionHeader>Projects</SectionHeader>
      </HeaderContainer>
      <Row className="row">
        {projects.filter((project) => project.fork === true).slice(0, 4).map((project) => (
          <ProjectContainer key={project.id} className="col-sm-5">
            <Link
              href={project.html_url}
              target="_blank"
              rel="noreferrer"
              className="col-sm-4"
              aria-label="link to project">
              <Img src="/assets/chatbot.jpg" alt="chatbot" />
            </Link>
            <Overlay>
              <p className="overlay-text">
                {project.name}
              </p>
            </Overlay>
            <h4> {project.name}</h4>
            {/*    {ImageArray.map((image) => (
              <Img
                src={image.image}
                alt={image.name} />

            ))} */}
            <div className="text-container">
              <p> lorem lorem lorem lorem </p>
              <p> wrapper</p>
            </div>
          </ProjectContainer>

        ))}

      </Row>

    </Container>
  )
}
export default Projects