import React from 'react';
import styled from 'styled-components';
import StyledProject from './Project.style';

const FeaturedProject = (
  {
    deployedLink,
    projectImage,
    projectTitle,
    overlayText,
    projectDescription,
    techPTags,
    repoLink
  }
) => {
  return (
    <StyledFeaturedProject className="project">
      <a href={deployedLink}>
        <div className="project-image">
          <div className="project-image-overlay" />
          <img src={projectImage} className="image-of-project" alt={projectTitle} />
          <p className="overlay-text" aria-hidden="true">{overlayText}</p>
        </div>
        <h3>{projectTitle}.</h3>
        <p>{projectDescription}</p>
        <div className="tag-wrapper">
          {techPTags}
        </div>
      </a>
      <a href={repoLink} className="tag-wrapper"> <p className="repo-tag">Repo on GitHub</p></a>
    </StyledFeaturedProject>
  )
}

export default FeaturedProject;

const StyledFeaturedProject = styled(StyledProject)`

`