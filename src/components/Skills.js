import React from 'react';
import styled from 'styled-components';
import { SectionContainer } from './Globalstyles';

const Skills = () => {
  return (
    <SectionContainer>
      <SectionHeadings>SKILLS</SectionHeadings>
      <Skillssection>
        <div>
          <SubHeadings>CODE</SubHeadings>
          <p>HTML5</p>
          <p>CSS</p>
          <p>JavaScript</p>
          <p>React</p>
          <p>Redux</p>
          <p>Node.js</p>
        </div>
      </Skillssection>
    </SectionContainer>
  )
}

export default Skills;

const SectionHeadings = styled.h2`
    line-height: 1.68rem;
    align-self: center;
    max-width: fit-content;
    padding: 0 1%;
    margin-bottom: 30px;
    background-color: #1f5d1e;
    color: white;
    font-size: 1.5rem;
    padding: 1px 7px;
`
const Skillssection = styled.div`
    text-align: center;
`

const SubHeadings = styled.h3`
    font-size: 1em;
    color: black;
    letter-spacing: 0.01em;
`