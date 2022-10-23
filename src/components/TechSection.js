/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components/macro';
import { ContentWrapper } from './ReusableStyles.style';

const TechSection = () => {
  return (
    <StyledTechSection>
      <ContentWrapper>
        <h2>Tech</h2>
        <p>
          HTML, CSS, Flexbox, Grid, JavaScript ES6, JSX, React, React Hooks, Redux,
          Node.js, Mongo DB, Web Accessibility, API:s, mob-programming, pair-programming, Github.
        </p>
      </ContentWrapper>
    </StyledTechSection>
  )
}

export default TechSection;

const StyledTechSection = styled.section`
    text-align: center;
    display: flex;
    justify-content: center;
  `