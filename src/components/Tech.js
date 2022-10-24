/*eslint-disable linebreak-style*/   
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces*/  
/*eslint-disable no-multiple-empty-lines*/  
import React from 'react';
import styled from 'styled-components';
import GlobalStyles from 'GlobalStyles'
//import { TechStyles } from "./TechStyles";



export const Tech = () =>
   {
    return (
      <TechStyles>
       <TechText>HTML5, CSS, <Highlighted>JavaScript</Highlighted> ES6,  APIs, mob-programming, pair-programming, Github, Redux, Node, <Highlighted> React, React Hooks, </Highlighted> Flexbox, JSX </TechText>
    </TechStyles>
    );
  };

export default Tech;

const TechStyles = styled.div`
font-family: 'montserrat';
text-align:center;
padding: 3%;
`

const TechText = styled.p`
  line-height: 1.5;
  font-size: 1rem;
  letter-spacing: 0.15rem;
  font-weight: 400;
  margin: 0px 1px 0px 1px;
  text-align: center;
  font-size: 14px;

  @media (min-width: 768px) {
    font-size: 17px;
    margin: 0% 15% 0% 15%;
  }
`

const Highlighted = styled.span`
  color:#984436;
  margin-top: 0;
  font-weight: bolder;
`