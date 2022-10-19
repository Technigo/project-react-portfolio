import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechOuterWrapper>
      <TechInnerWrapper>
        <h5>TECH</h5>
        <p>HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
        Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </p>
      </TechInnerWrapper>
    </TechOuterWrapper>
  )
}

export const TechOuterWrapper = styled.div`
 border: solid blue;
`;

export const TechInnerWrapper = styled.div`
 border: solid green;
`;
