import styled from 'styled-components'
import React from 'react-dom'
import Global from './Global';

const Projects = () => {
  return (
    <FeaturedProjects>
      <Global>Featured Projects</Global>
      <ProjectContainer>
        <ProjectTitle> Chat bot build in JavaScript </ProjectTitle>
        <p>Responsive web side using HTML, CSS and JavaScripts ES6 fro restaurant booking</p>
      </ProjectContainer>
    </FeaturedProjects>
  );
}

const FeaturedProjects = styled.div`
border: 2px solid yellow;
width: 100%;
margin: 0%;
display: flex;
flex-direction: column;
height: 1180px;
text-align: center;
align-items: center;
`

const ProjectContainer = styled.div`
border: 2px solid hotpink;
display: flex;
flex-direction: column;
width: 80%;
height: 100px;
align-items: center;
text-align: center;
`
const ProjectTitle = styled.h3`
display: column;
color: #677867;
font-family: 'Montserrat';
font-style: normal;
font-weight: 700;
font-size: 19px;
text-align: center;
align-items: center;
justify-content: center;
`

export default Projects;