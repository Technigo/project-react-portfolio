import React from 'react-dom'
import { HightLight } from '../styles/Tech';
import { SectionColor, Wrapper, Title, CenterMainText } from '../styles/Main'

const Tech = () => {
  return (
    <SectionColor>
      <Title>Tech</Title>
      <Wrapper>
        <CenterMainText>HTML, CSS, <HightLight>JavaScript</HightLight>, 
          <HightLight> React</HightLight>, Webb accessibility, API:S, mob-programming,
          pair-programming, <HightLight> Agile Methodologies </HightLight>, Github, <HightLight>Redux, </HightLight> MongoDB and Mongoose, Node.js 
          <HightLight> Adobe Creative Suite</HightLight>, Flexbox, Grid.
        </CenterMainText>
      </Wrapper>
    </SectionColor>
  );
}

export default Tech;

