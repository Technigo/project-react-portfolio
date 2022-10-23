import React from 'react';
import styled from 'styled-components';

export const Tech = ({ color, backColor }) => {
  return (
    <OuterWrapper backColor={backColor}>
      <TechContainer>
        <TechHeadline color={color}>TECH</TechHeadline>
        <TechText>HTML, CSS, Flexbox, JavaScript ES6, JSX, React, React Hooks,
          <span> Redux,</span>
           Node.js,Web Accessibly, API:s, mob-programming, pair-programming, Github
        </TechText>
      </TechContainer>
    </OuterWrapper>
  )
}

const OuterWrapper = styled.section`
background-color: ${(props) => props.backColor};
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
`

export const TechContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: auto;
    margin-bottom: 30px;
`
export const TechHeadline = styled.h3`
background-color: ${(props) => props.color};
color: white;
font-family: 'Montserrat', sans-serif;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
`;
export const TechText = styled.h3`
    width: auto;
    height: auto;
    font-family: 'Montserrat', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 29px;
    text-align: center;
    color: #000000;
`;