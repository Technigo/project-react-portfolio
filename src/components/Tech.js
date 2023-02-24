import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechOuterWrapper>
      <TechInnerWrapper>
        <h5>TECH</h5>
        <p>HTML, CSS, Flexbox, CSS Grid, <span>JavaScript</span>, JSX,
        <span> React</span>, React Hooks,<span> Redux</span>, 
        Node.js, <span> API:s, JSON</span>, MongoDB, Mongoose, REST, Express, CORS, 
        bcrypt, CryptoJS, Web Accessibility, mob-programming,
        pair-programming & GitHub.
        </p>
      </TechInnerWrapper>
    </TechOuterWrapper>
  )
}

export const TechOuterWrapper = styled.div`
  background-color: var(--white);
  width: 100%;
  height: 40vh;
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