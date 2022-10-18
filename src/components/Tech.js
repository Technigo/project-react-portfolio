import React from 'react'
import styled from 'styled-components'

export const Tech = ({ techText, heading }) => {
  techText = ' HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.';
  heading = 'Tech';

  return (
    <StyledTechBackground style={{ backgroundColor: 'white' }}>
      <div>
        <StyledHeading>
          <div>{heading}</div>
        </StyledHeading>
        <StyledTechText>
          <div>{techText}</div>
        </StyledTechText>
      </div>
    </StyledTechBackground>
  )
};

const StyledTechBackground = styled.div`
color: black;

    width: 100%;
    height: 30vh;
    left: 0px;
    top: 0px;

    display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledHeading = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px; 
    background-color: #E8415E;
    padding: 2px 0px;
    display: block;
`

const StyledTechText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    padding: 25px 50px 80px 50px;
    max-width: 600px;
`;