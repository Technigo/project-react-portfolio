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
          HTML, CSS, Flexbox, <span>JavaScript,</span> ES6, JSX, <span>React,</span> React Hooks, Redux, Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
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
background-color: #F0EAD4;
height: 470px;
margin-bottom: 20px;
`

const Header = styled.h1`
font-family: 'Satoshi';
font-size: 43px;
margin-bottom: -90px;
color: #7A896D;
`
const TechText = styled.p`
font-family: 'EB Garamond';
font-size: 22px;
margin: 20px;
span {
  background: #D6A9E2;
}
`
export default Tech;