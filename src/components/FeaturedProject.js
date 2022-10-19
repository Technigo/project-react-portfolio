import React from 'react';
import styled from 'styled-components';
import StyledProject from './Project.style';
import { StyledTagWrapper, StyledRepoTag } from './ReusableStyles.style';

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
        <StyledTagWrapper className="tag-wrapper">
          {techPTags}
        </StyledTagWrapper>
      </a>
      <StyledRepoTag href={repoLink} className="tag-wrapper"> <p className="repo-tag">Repo on GitHub</p></StyledRepoTag>
    </StyledFeaturedProject>
  )
}

export default FeaturedProject;

const StyledFeaturedProject = styled(StyledProject)`

`