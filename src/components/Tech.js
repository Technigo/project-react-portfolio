import React from 'react';
import styled from 'styled-components';

export const Tech = () => {
  return (
    <TechOuterWrapper>
      <TechInnerWrapper>
        <h5>TECH</h5>
        <p>HTML, CSS, Flexbox, <span>JavaScript</span>, ES6, JSX,
          <span> React, React Hooks, Redux, </span>
        Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </p>
      </TechInnerWrapper>
    </TechOuterWrapper>
  )
}

export const TechOuterWrapper = styled.div`
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
