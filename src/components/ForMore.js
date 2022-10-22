import React from 'react';
import styled from 'styled-components';
import IconStackoverflow from '../assets/stackoverflow-icon.svg';
import IconLinkedin from '../assets/linkedin-icon.svg';
import IconGithub from '../assets/github-icon.svg';
import { SectionHeading, InnerWrapper } from '../library/GlobalStyles'
// import { GITHUB_URL, LINKEDIN_URL, STACKOVERFLOW_URL } from '../utils/Urls';
// <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
// <a href={GITHUB_URL} target="_blank" rel="noreferrer">
// <a href={STACKOVERFLOW_URL} target="_blank" rel="noreferrer">

export const ForMore = () => {
  return (
    <InnerWrapper>
      <SectionHeading>FOR MORE</SectionHeading>
      <ForMoreIcons>
        <div className="iconContainer">
          <img src={IconLinkedin} lang="eng" alt="Linkedin icon" />
          <p>LINKEDIN</p>
        </div>
        <div className="linkName" />
        <div className="iconContainer">
          <img src={IconGithub} lang="eng" alt="Github icon" />
          <p>GITHUB</p>
        </div>
        <div className="iconContainer">
          <img src={IconStackoverflow} lang="eng" alt="Stackoverflow icon" />
          <p>STACK OVERFLOW</p>
        </div>
      </ForMoreIcons>
    </InnerWrapper>
  )
}

// export const ForMoreContainer = styled.section`
//   width: 100%;
//   height: 300px;
//   background-size: cover;
//   position: relative;
// `;

export const ForMoreIcons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 2px dotted blue;

  img {
    height: 60px;
    width: 60px;
    margin: 0 auto;
    display: block;
    filter: brightness(0) saturate(100%) invert(31%) sepia(18%) saturate(1025%) hue-rotate(272deg) brightness(88%) contrast(88%);
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
    display: flex;
    flex-direction: column;
    align-items: center;
    white-space: nowrap;
  }

  p {
    color: black;
    font-size: 1rem;
    padding-top: 10px;
    font-weight: bold;
  }

  a {
    text-decoration: none;
    display: flex;
    flex-direction: column;
  }
`;

