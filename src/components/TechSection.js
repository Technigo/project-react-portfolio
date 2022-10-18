/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components';

const StyledTechSection = styled.section`
  text-align: center;
`
const TechSection = () => {
  return (
    <StyledTechSection>
      <h2>Tech</h2>
      <p>
          HTML, CSS, Flexbox, Grid, JavaScript, ES6, JSX, React, React Hooks, Redux,
          Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
      </p>
    </StyledTechSection>
  )
}

export default TechSection;