/* eslint-disable max-len */
import React from 'react';
import styled from 'styled-components';

const Tech = () => {
  return (
    <TechSection>
      <Header>
        <h1>Tech</h1>
      </Header>
      <TechText>
        <p>
          HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </p>
      </TechText>
    </TechSection>
  )
}

const TechSection = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(237, 200, 201);
height: 470px;
margin-bottom: 20px;
`

const Header = styled.h1`
font-family: 'Satoshi';
font-size: 43px;
margin-bottom: -90px;
color: rgb(3, 3, 194);
`
const TechText = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
margin: 20px;
`
export default Tech;