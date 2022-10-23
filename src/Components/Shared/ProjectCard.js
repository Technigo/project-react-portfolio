import React from 'react';
import styled from 'styled-components/macro';
import TagBox from './TagBox';

const ProjectCard = ({
  urlNetlify,
  coverName,
  projectName,
  text,
  coverImage,
  tags
}) => {
  console.log('coverImage', coverImage);
  const ProjectCardStyle = styled.div`
    border: solid 2px black;
    vertical-align: baseline;

    .project-name {
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
    .project-title {
      padding: 10px 0;
      font-family: Roboto, sans-serif;
      font-size: 20px;
      font-weight: 600;
      letter-spacing: 1px;
      color: var(--sixthTitleSubtitle);
      display: inline;
      justify-content: center;
      border: solid 2px green;
    }

    .project-photo {
      height: 300px;
      width: 100%;
      // background-image:url(../../Assets/Petra.jpg);
      background-image: url(${coverImage});
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

    .project-link{
      text-decoration: none; 
    }

    .project-text-wrapper {
      border: solid 3px red;
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
      <a
        className="project-link"
        href={urlNetlify}
        target="_blank"
        rel="noreferrer">
        <div className="project-photo">
          <h3 className="project-name">{coverName}</h3>
        </div>
        <div className="project-text-wrapper">
          <h2 className="project-title">{projectName}</h2>
          <p className="text" role="contentinfo">
            {text}
          </p>
        </div>
      </a>
      <div className="tag-wrapper">
        {tags.map((tag) => {
          return <TagBox tag={tag} />;
        })}
      </div>
    </ProjectCardStyle>
  );
};
export default ProjectCard;
