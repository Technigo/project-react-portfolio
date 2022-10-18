/* eslint-disable linebreak-style */
import React from 'react'
import styled from 'styled-components'

const MyProjects = styled.div`
background: #F4F4F4;
`

const TextContainerProjects = styled.h1`
font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 50px;
    margin-left: 5%;
    margin-right: 5%;
`

const Tags = styled.div`
font-family: "Roboto", sans-serif;
  color: black;
  font-weight: bold;
  background-color: #FDDFE7;
  text-decoration: none;
  font-size: 12px; 
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
`

const Projects = () => {
  return (
    <MyProjects>
      <TextContainerProjects>
        <h1>Namn på projekt</h1>
        <p>Om Projektet</p>
        <Tags>
          <p>HTML5</p>
          <p>CSS3</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Pair-Programming</p>
          <p>API</p>
        </Tags>
      </TextContainerProjects>
    </MyProjects>
  )
}

export default Projects