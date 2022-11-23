import React from 'react-dom'
import { HightLight } from '../styles/Tech';
import { SectionColor, Wrapper, Title, CenterMainText } from '../styles/Main'

const Tech = () => {
  return (
    <SectionColor>
      <Title>Tech</Title>
      <Wrapper>
        <CenterMainText>HTML, CSS, <HightLight>JavaScript, </HightLight>Flexbox, Grid,
          <HightLight>React, </HightLight>React Hooks, Webb accessibility, API:S, mob-programming,
          pair-programming, Github,<HightLight>Redux, </HightLight> MongoDB, Node.js 
          <HightLight> Adobe Creative Suite.</HightLight>
        </CenterMainText>
      </Wrapper>
    </SectionColor>
  );
}

export default Tech;

