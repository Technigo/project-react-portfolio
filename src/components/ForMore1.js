import React from 'react';
import styled from 'styled-components';
import LinkedinIcon from 'assets/Linkedin_icon.png';
import GithubIcon from 'assets/Github_icon.png';
import StackOverflowIcon from 'assets/StackO_icon.png';
import { GITHUB_URL, LINKEDIN_URL, STACKOVERFLOW_URL } from 'utils/Urls';

export const ForMoreContainer = styled.div`
  width: 100%;
  margin:0;
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const ForMoreHeading = styled.h2`
  font-size: 48px;
  line-height: 1;
  padding: 10px 15px;
  font-family: "Montserrat Bold";
  background-color: ${(props) => props.color};
  color: white;
  
  @media (max-width: 1023px) {
  font-size: 22px;
  }
`;

export const ForMoreIcons = styled.div`
  display: flex;
  flex-direction: center;

  img {
    height: 60px;
    width: 60px;
    margin: auto;
    display: block;
  }

  img:hover {
    opacity: 0.5;
  }

  p:hover {
    opacity: 0.5;
  }

  .iconContainer {
    height: 60px;
    width: 60px;
    padding: 6%;
    border: 6px solid black;
    border-radius: 50%;
    margin: 88px;
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
  }

  p {
    color: black;
    font-size: 25px;
    padding-top: 100px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 1023px) {
    
    {
     padding: 20% 5%; 
    }

    img {
      width: 20px;
      height: 20px;
    }

    .iconContainer {
      height: 20px;
      width: 20px;
      border: 2px solid black;
      padding: 2%;
      display: flex;
      align-text: center;
    }

    p{
      font-size: 11px;
      padding: 20px 0px 0px;
    }
  }


  @media (min-width: 1024px) {
    img {
      width: 60px;
      height:
          }
  }
`;

export const ForMore1 = ({ color }) => {
  return (
    <ForMoreContainer>
      <ForMoreHeading color={color}>FOR MORE</ForMoreHeading>
      <ForMoreIcons>
        <div className="iconContainer">
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
            <img src={LinkedinIcon} lang="eng" alt="Linkedin icon" />
            <p>LINKEDIN</p>
          </a>
        </div>
        <div className="linkName" />
        <div className="iconContainer">
          <a href={GITHUB_URL} target="_blank" rel="noreferrer">
            <img src={GithubIcon} lang="eng" alt="Github icon" />
            <p>GITHUB</p>
          </a>
        </div>
        <div className="iconContainer">
          <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
            <img
              src={StackOverflowIcon}
              lang="eng"
              alt="Stackoverflow icon" />
            <p>STACK OVERFLOW</p>
          </a>
        </div>
      </ForMoreIcons>
    </ForMoreContainer>
  );
};
