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

export const ForMoreIcons = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 20px 0 30px 0;

  img {
    height: 60px;
    width: 60px;
    margin: 0 auto;
    display: block;
    filter: brightness(0) saturate(100%) invert(44%) sepia(26%) saturate(1424%) hue-rotate(277deg) brightness(81%) contrast(90%);
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
    color: var(--color-eggplantPink);
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

