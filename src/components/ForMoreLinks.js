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
        <div className="iconContainer">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} lang="eng" alt="Linkedin icon" />
          </a>
          <p>LINKEDIN</p>
        </div>
        <div className="linkName" />
        <div className="iconContainer">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={GithubIcon} lang="eng" alt="Github icon" />
          </a>
          <p>GITHUB</p>
        </div>
        <div className="iconContainer">
          <a href="https://google.com" target="_blank" rel="noreferrer">
            <img src={StackOverflowIcon} lang="eng" alt="Stackoverflow icon" />
          </a>
          <p>STACK OVERFLOW</p>
        </div>
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
    margin: 88px;
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
  }
`;

