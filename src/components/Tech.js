import React from 'react'
import styled from 'styled-components'

export const Tech = () => {
  return (
    <StyledTech style={{ backgroundColor: 'white' }}>
      <div className="tech__container">
        <h2><span>Tech</span></h2>
        <p>
        HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
        Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </p>
      </div>
    </StyledTech>
  )
};

const StyledTech = styled.div`
    width: 100%;
    height: 30vh;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px; 
}

h2 span {
    background-color: #E8415E;
    padding: 2px 10px;
}

p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    padding: 25px 50px 80px 50px;
    max-width: 600px;
}
`;

/*
const StyledHeading = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px;
    background-color: #E8415E;
    padding: 2px 5px;
    display: flex;
    align-items: center;
  justify-content: center;
  width: fit-content;

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
*/