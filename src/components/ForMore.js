import React from 'react';
import styled from 'styled-components/macro';
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
          <a href="https://www.linkedin.com/in/linda-norberg-0780a296/" target="_blank" rel="noreferrer">
            <img src={IconLinkedin} alt="LinkedIn icon for the header" />
          </a>
          <p>LINKEDIN</p>
        </div>
        <div className="linkName" />
        <div className="iconContainer">
          <a href="https://github.com/lindanorberg" target="_blank" rel="noreferrer">
            <img src={IconGithub} alt="Github icon for the header" />
          </a>
          <p>GITHUB</p>
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
  justify-content: center;
  gap: 10px;

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
    display: flex;
    flex-direction: column;
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

