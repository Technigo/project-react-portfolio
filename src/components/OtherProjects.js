/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import styled from 'styled-components/macro';
import { ceruleanBlue, FancyArrows, ProjectTags, TagWrapper } from 'Styles';

const OtherProjects = () => {
  return (
    <OtherProjectsWrapper>
      <a
        href="https://github.com/joeohm/project-weather-app"
        target="_blank"
        rel="noreferrer"
      >
        <h3>WEATHER APP</h3>
        <p>
          Web app built in JavaScript using Open Weather API.
          <FancyArrows>{'>>'}</FancyArrows>
        </p>
      </a>
      <TagWrapper>
        <ProjectTags>HTML5</ProjectTags>
        <ProjectTags>CSS3</ProjectTags>
        <ProjectTags>JavaScript ES6</ProjectTags>
        <ProjectTags>APIs</ProjectTags>
      </TagWrapper>
      <a
        href="https://github.com/joeohm/project-guess-who"
        target="_blank"
        rel="noreferrer"
      >
        <h3>GUESS WHO GAME</h3>
        <p>
          Game created to learn about basic JavaScript
          <FancyArrows>{'>>'}</FancyArrows>
        </p>
      </a>
      <TagWrapper>
        <ProjectTags>HTML5</ProjectTags>
        <ProjectTags>CSS3</ProjectTags>
        <ProjectTags>JavaScript ES6</ProjectTags>
      </TagWrapper>
    </OtherProjectsWrapper>
  );
};

export default OtherProjects;

const OtherProjectsWrapper = styled.div`
  align-self: flex-start;
  a {
    text-decoration: none;
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
  }

  h3 {
    font-family: 'Roboto Bold', sans-serif;
    font-size: 20px;
    color: ${ceruleanBlue};
  }
  p {
    font-family: 'Roboto', sans-serif;
    color: black;
    line-height: 1.4;
  }

  ul {
    margin-bottom: 30px;
  }

  @media (min-width: 800px) {
    a {
      text-decoration: underline black;
      display: flex;
      flex-direction: row;
      gap: 10px;
      align-items: center;
    }
    h3 {
      font-size: 24px;
    }
    p {
      font-size: 24px;
    }
  }
`;
