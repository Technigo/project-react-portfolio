import React from 'react';
import styled from 'styled-components';
import { GITHUB_URL, LINKEDIN_URL, STACKOVERFLOW_URL } from 'utils/Urls';
import heroLinkedin from './assets/linkedin.png';
import heroGithub from './assets/github.png';
import heroStackOverflow from './assets/stackoverflow.png'
import { OuterWrapper, InnerWrapper, MainHeading } from './GlobalStyles';

export const ForMoreContainer = styled.section`
  width: 100%;
  height: 300px;
  background-size: cover;
  position: relative;
`;

export const ForMoreIcons = styled.div`
  position: absolute;
  display: flex;
  flex-direction: center;
  justify-content: space-between;

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
    margin: 25%;
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
`;

export const ForMore = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ForMoreContainer>
          <MainHeading> FOR MORE</MainHeading>
          <ForMoreIcons>
            <div className="iconContainer">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                <img src={heroLinkedin} lang="eng" alt="Linkedin icon" />
                <p>LINKEDIN</p>
              </a>
            </div>
            <div className="linkName" />
            <div className="iconContainer">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                <img src={heroGithub} lang="eng" alt="Github icon" />
                <p>GITHUB</p>
              </a>
            </div>
            <div className="iconContainer">
              <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">
                <img src={heroStackOverflow} lang="eng" alt="Stackoverflow icon" />
                <p>STACK OVERFLOW</p>
              </a>
            </div>
          </ForMoreIcons>
        </ForMoreContainer>
      </InnerWrapper>
    </OuterWrapper>
  );
};

