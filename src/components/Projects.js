import styled from 'styled-components'
import React from 'react-dom'

const Projects = () => {
  return (
    <FeaturedProjects>
      <h2 className="first-title">FEATURED PROJECTS</h2>
      <div className="container">
        <h3> GUESS WHO </h3>
      </div>
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

.container {
border: 2px solid hotpink;
display: flex;
flex-direction: column;
width: 80%;
height: 100px;
align-items: center;
text-align: center;
}

`

export default Projects;