import styled from 'styled-components'
import React from 'react-dom'
import { Title } from '../styles/Main'

const Skills = () => {
  return (
    <StyledMythoughts>
      <Title>Skills</Title>
    </StyledMythoughts>
  );
}

const StyledMythoughts = styled.div`
border: 2px solid hotpink;
backgroundcolor: "#F7E9D7";
width: 100%;
height: 450px;
`

export default Skills;