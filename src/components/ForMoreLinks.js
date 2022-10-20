import React from 'react';
import styled from 'styled-components';
import LinkedinIcon from '../assets/icons/linkedinIcon.png';
import GithubIcon from '../assets/icons/githubIcon.png';
import StackOverflowIcon from '../assets/icons/stackIcon.png';

export const ForMoreLinks = () => {
  return (
    <ForMoreContainer>
      <ForMoreHeading>FOR MORE</ForMoreHeading>
      <ForMoreIcons>
        <a href="https://www.linkedin.com/in/linn%C3%A9a-wahlstr%C3%B6m-018715253/" target="_blank" rel="noreferrer">
          <div className="iconContainer">
            <img src={LinkedinIcon} lang="eng" alt="Linkedin icon" />
            <p>LINKEDIN</p>
          </div>
        </a>

        <a href="https://github.com/LinneaWa" target="_blank" rel="noreferrer">
          <div className="iconContainer">
            <img src={GithubIcon} lang="eng" alt="Github icon" />
            <p>GITHUB</p>
          </div>
        </a>

        <a href="https://stackoverflow.com/c/technigo/users/400" target="_blank" rel="noreferrer">
          <div className="iconContainer">
            <img src={StackOverflowIcon} lang="eng" alt="Stackoverflow icon" />
            <p>STACK OVERFLOW</p>
          </div>
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
`;

export const ForMoreHeading = styled.section`
background-color: #ff0000;
color: white;
display: inline-block;
padding: 4px;
margin: 20px 0 20px 0;
font-weight: bold;
`;

export const ForMoreIcons = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
width: 80%;
padding: 10px;

  img {
    height: 30px;
    filter: invert(37%) sepia(86%) saturate(5077%) hue-rotate(344deg)
      brightness(107%) contrast(114%);
  }

  img:hover {
    opacity: 0.5;
  }

  .iconContainer {
    height: 30px;
    width: 30px;
    padding: 20px;
    border: 2px solid #fa392f;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
  }

  p {
    color: #fa392f;
    font-size: 20px;
    padding-top: 10px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;
  }
`;

