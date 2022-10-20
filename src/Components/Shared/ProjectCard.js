import React from 'react';
import styled from 'styled-components/macro';
// import ProjectPhoto from './happy_thought_picture.png';

const ProjectCardStyle = styled.div`
    border: solid 2px black;
    vertical-align: baseline;

    .project-name{
      font-family: Roboto, sans-serif;
      font-size: 25px;
      font-weight: 600;
      color: var(--primary);
      text-align: center;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: var(--primary);
      transition: all 0.2s linear;
    }

    .project-photo{
      height: 300px;
      width: 100%;
      background-image:
      background-color: transparent;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      position: relative;
    }
    .project-photo:after {
      display: block;
      content: "";
      background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
      width: 100%;
      height: 100%;
      transition: all 0.2s linear;
    }

    .project-link:hover .project-name {
      opacity: 0;
    }
    
    .project-link:hover .project-photo:after {
      opacity: 0;
    }

    .project-text-wrapper{
      display: flex;
      flex-direction: column;
    }
  
  `;
const ProjectCard = () => {
  return (
    <ProjectCardStyle>
      <a
        className="project-link"
        href="https://newly-release-movies.netlify.app/"
        target="_blank"
        rel="noreferrer">
        <div className="project-photo">
          <h3 className="project-name">MOVIES</h3>
        </div>
        <h2 className="sub-title">PROJECT - LATEST MOVIES</h2>
      </a>
      <div className="project-text-wrapper">
        <p className="text" role="contentinfo">
          A multi-page application showing information about the latest movies.
          Using React Router and combining `useState` with `useEffect`, passing
          information in the URL and pick this up in React router to load
          dynamic content.
        </p>
      </div>
      <div className="project-button">
        <p className="button">HTML5</p>
        <p className="button">CSS3</p>
        <p className="button">Javascript</p>
        <p className="button">React</p>
      </div>
    </ProjectCardStyle>
  );
};
export default ProjectCard;
