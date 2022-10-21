import React from 'react';
import styled from 'styled-components/macro';
// import ProjectPhoto from './happy_thought_picture.png';

const ProjectCard = ({ urlNetlify, coverName, projectName, text, coverImage }) => {
  console.log('urlNetlify', urlNetlify)
  console.log('coverName', coverName)
  console.log('text', text)
  console.log('coverImage', coverImage)

  const ProjectCardStyle = styled.div`
  border: solid 2px black;
  vertical-align: baseline;

  .project-name{
    font-family: Roboto, sans-serif;
    font-size: 25px;
    font-weight: 600;
    color: var(--secondaryBackground);
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.2s linear;
  }

  .project-photo{
    height: 300px;
    width: 100%;
    // background-image:url(../../Assets/Petra.jpg);
    background-image:url(${coverImage});
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


  @media (min-width: 667px) and (max-width: 1024px) {
  }

  @media (min-width: 1024px) {
    width: 100%;
    margin-top: 20px;
}
`;
  return (
    <ProjectCardStyle>
      <a className="project-link" href={urlNetlify} target="_blank" rel="noreferrer">
        <div className="project-photo">
          <h3 className="project-name">{coverName}</h3>
        </div>
        <h2 className="sub-title">{projectName}</h2>
      </a>
      <div className="project-text-wrapper">
        <p className="text" role="contentinfo">
          {text}
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
