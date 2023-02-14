import React from 'react';
import styled from 'styled-components'

import { SectionTitle, Container } from './Globalstyles'

const TechStack = () => {
  return (
    <StyledTechSection>
      <SectionTitle>Tech</SectionTitle>
      <p>HTML, CSS, Flexbox, Grid, JavaScript ES6, JSX, React, React Hooks, Redux,
        Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
      </p>
    </StyledTechSection>
  )
}

export default TechStack;

const StyledTechSection = styled(Container)`
  flex-direction: column;
  height: 20vh;
  max-width: 80vw;
  line-height: 1.2rem;
  text-align: center;

  @media (min-width: 667px) and (max-width: 1024px) {
    width: 60vw;
  }

  @media screen and (min-width: 1024px) {
    width: 40vw;
  }
  `
