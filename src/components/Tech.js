import React from 'react';
import styled from 'styled-components';

export const Tech = ({ color }) => {
  return (
    <TechWrapper>
      <TechHeader color={color}>TECH</TechHeader>
      <TextWrapper>
        <TextContent className="ScrollLeft">
     HTML, CSS, Flexbox, JavaScript, ES6, JSX, React, React Hooks, Redux,
Node.js, Mongo DB, Web Accessibly, API:s, mob-programming, pair-programming, Github.
        </TextContent>
      </TextWrapper>
    </TechWrapper>
  );
};

export const TechWrapper = styled.div`
margin:0;
width: 100%;
color: black;
display: flex;
align-items: center;
flex-direction: column;

@media (min-width: 1024px){
  }
`;

const TechHeader = styled.h2`
  font-size: 48px;
  font-family: 'Montserrat', sans-serif;
  background-color: ${(props) => props.color};
  color: white;
  padding: 10px 15px;
  margin-bottom:0;
  margin-top:40px;

  @media (max-width: 1023px) {
    font-size: 20px;
    line-height: 1;
  }
  @media (min-width: 1024px) {
     margin-top: 60px;
     font-size: 40px;
  }
`;

export const TextWrapper = styled.div`
width: 60%;
`;

export const TextContent = styled.p`
text-align: center;


@media (min-width: 668px) and (max-width: 1023px)
    {
      font-size:17px;
    }

@media (min-width: 1024px)
  {
    font-size:20px;
  }
`;