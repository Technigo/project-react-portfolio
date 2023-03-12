import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechOuterWrapper>
      <TechInnerWrapper>
        <h5>TECH</h5>
        <p>HTML, CSS, Flexbox, CSS Grid, Styled-Components, <span>JavaScript</span>
        , <span>React.js</span>, React Hooks, JSX, <span>Redux.js</span>, Node.js
        , <span>API</span>, <span>JSON</span>, <span>Google Cloud</span>
        , <span>MongoDB</span>, Mongoose, Postman, REST API, Express, CORS
        , bcrypt, Crypto.js, ESLint, Git, GitHub, Netlify, Accessibility
        , pair-programming & mob-programming.
        </p>
      </TechInnerWrapper>
    </TechOuterWrapper>
  )
}

export const TechOuterWrapper = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 60vh;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const TechInnerWrapper = styled.div`
  width: 80vw;
  max-width: 900px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 30px;
  text-align: center;

 span {
  font-weight: 700;
 }

 @media (min-width: 668px) {
  font-size: 18px;
 }

@media (min-width: 1024px) {
  font-size: 20px;
}
`;