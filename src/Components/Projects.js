import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';
import TitleButtonStyle from './Shared/TitleButton';

const Projects = () => {
  const ProjectStyle = styled.div`
  background-color: var(--secondBackground); 
  border: solid 2px red;
  // display: row;
  // justify-content: center;
  // padding: 10px 0 40px 0;
  // font-family: Montserrat, sans-serif;
  // font-weight: 400;
  // text-align: center;
`

  return (
    <ContentWrapper as="section">
      <ProjectStyle>
        <TitleButtonStyle />
        <div className="project-box">
          <div className="project">
            <a className="project-link" href="https://newly-release-movies.netlify.app/" target="_blank" rel="noreferrer">
              <div className="project-photo">
                <h3 className="project-name">MOVIES</h3>
              </div>
              <h2 className="project-title">PROJECT - LATEST MOVIES</h2>
            </a>
            <div className="project-text">
              <p className="text" role="contentinfo">A multi-page application showing information about the latest movies. Using React Router and combining `useState` with `useEffect`, passing information in the URL and pick this up in React router to load dynamic content.</p>
            </div>
            <div className="project-button">
              <p className="button">HTML5</p>
              <p className="button">CSS3</p>
              <p className="button">Javascript</p>
              <p className="button">React</p>
            </div>
          </div>

          <div className="project">
            <a className="project-link" href="https://project-happy-thought-petra.netlify.app/" target="_blank" rel="noreferrer">
              <div className="project-photo">
                <h3 className="project-name">HAPPY THOUGHT</h3>
              </div>
              <h2 className="project-title">PROJECT - HAPPY THOUGHT</h2>
            </a>
            <div className="project-text">
              <p className="text">A web app that will let you write and post a happy thought. It&apos;s built in react, fetching data using an API. In this project we have been practising `useState` with `useEffect`.</p>
            </div>
            <div className="project-button">
              <p className="button">HTML5</p>
              <p className="button">CSS3</p>
              <p className="button">Javascript</p>
              <p className="button">React</p>
            </div>
          </div>

          <div className="project">
            <a className="project-link" href="https://petrasguesswhogame.netlify.app/" target="_blank" rel="noreferrer">
              <div className="project-photo">
                <h3 className="project-name">GUESS WHO GAME</h3>
                <h2 className="project-title">PROJECT - GUESS WHO GAME</h2>
              </div>
            </a>
            <div className="project-text">
              <p className="text" role="contentinfo">A digital version of the classical bord game Guess who, built in javascript. </p>
            </div>
            <div className="project-button">
              <p className="button">HTML5</p>
              <p className="button">CSS3</p>
              <p className="button">Javascript</p>
            </div>
          </div>

          <div className="project">
            <a className="project-link" href="https://petraandcharlotteweatherapp.netlify.app/" target="_blank" rel="noreferrer">
              <div className="project-photo">
                <h3 className="project-name">WEATHER APP</h3>
              </div>    <h2 className="project-title">PROJECT - WEATHER APP</h2>
            </a>
            <div className="project-text">

              <p className="text" role="contentinfo">A webb app showing the weather in different cities, fetching data from an API.</p>
            </div>
            <div className="project-button">
              <p className="button">HTML5</p>
              <p className="button">CSS3</p>
              <p className="button">Javascript</p>
            </div>
          </div>
        </div>
      </ProjectStyle>
    </ContentWrapper>
  );
};
export default Projects;