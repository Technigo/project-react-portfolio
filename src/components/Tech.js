import React from 'react';
import styled from 'styled-components';

export const TechWrapper = styled.section`
margin:0;
width: 100%;  
height: 300px;
color: black;
postition: relative;
display: flex;
flex-direction: column;
`;

const TechHeader = styled.h2`
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  margin-bottom: 100px;
  font-family: "Montserrat Bold";
  background-color: ${(props) => props.color};
  color: white;

  @media (max-width: 800px) {
    font-size: 22px;
    line-height: 1;
    padding: 10px 15px;
    margin-bottom: 40px;
  }
`;

export const TechContent = styled.p`
position: absolute;
left: 50%;
transform: translate(-50%);
font-size: 14px;
width:90%;

.line {
    border: 1px solid black;
    width: 40px;
    display: inline-block;
    margin-bottom: 4px;
    margin-right: -8px;
}

@media (min-width: 668px) and (max-width: 1023px){
    width:70%;

    img{
        height: 65px
    }
}

@media (min-width: 1024px){
    width:50%;

  img{
  height: 75px;  
  } 
}
`;

export const Tech = ({ color }) => {
  return (
    <TechWrapper>
      <TechHeader color={color}>TECH</TechHeader>
      <TechContent>
      HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
      </TechContent>
    </TechWrapper>
  );
};