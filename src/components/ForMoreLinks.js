import React from 'react';
import styled from 'styled-components';
import LinkedinIcon from '../assets/icons/linkedin.svg';
import GithubIcon from '../assets/icons/github.svg';
import StackOverflowIcon from '../assets/icons/stackOverflow.svg';

export const ForMoreLinks = ({ color, backColor }) => {
  return (
    <ForMoreContainer backColor={backColor}>
      <ForMoreHeading color={color}>FOR MORE</ForMoreHeading>
      <ForMoreIcons color={color}>
        <a href="https://www.linkedin.com/in/linn%C3%A9a-wahlstr%C3%B6m-018715253/" target="_blank" rel="noreferrer">
          <img src={LinkedinIcon} lang="eng" alt="Linkedin icon" />
        </a>

        <a href="https://github.com/LinneaWa" target="_blank" rel="noreferrer">
          <img src={GithubIcon} lang="eng" alt="Github icon" />
        </a>

        <a href="https://stackoverflow.com/c/technigo/users/400" target="_blank" rel="noreferrer">
          <img src={StackOverflowIcon} lang="eng" alt="Stackoverflow icon" />
        </a>

      </ForMoreIcons>
    </ForMoreContainer>
  );
};

export const ForMoreContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
width: auto;
height: auto;
background-color: ${(props) => props.backColor};
`;

export const ForMoreHeading = styled.h2`
background-color: ${(props) => props.color};
color: white;
font-family: 'Montserrat', sans-serif;
display: inline-block;
font-size: 22px;
line-height: 1;
padding: 5px 10px;
margin: 20px 0 20px 0;
line-height: 1;
`;

export const ForMoreIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
padding: 10px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    margin-bottom: 40px;
  }

  img {
    height: 70px;
    border-radius: 50%;
    border: 30px solid rgb(246, 245, 240);
  }

  img:hover {
    opacity: 0.5;
  }
`;

