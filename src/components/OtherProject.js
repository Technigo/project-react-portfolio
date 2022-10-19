import React from 'react';
import styled from 'styled-components';
import StyledProject from './Project.style';
import { StyledTagWrapper, StyledRepoTag } from './ReusableStyles.style';
import MoreArrows from './MoreArrows';

const OtherProject = (
  {
    deployedLink,
    projectImage,
    projectTitle,
    projectDescription,
    techPTags,
    repoLink
  }
) => {
  return (
    <StyledOther className="project other other-project">
      <a href={deployedLink} className="test">
        <div className="other-image-container">
          <div className="project-image-overlay" />
          <img src={projectImage} className="other-project-img" alt={projectTitle} />
        </div>
        <div className="other-text">
          <h4 className="underline">{projectTitle}</h4>
          <p className="underline">{projectDescription} <MoreArrows /></p>
          <StyledTagWrapper className="tag-wrapper">
            {techPTags}
          </StyledTagWrapper>
        </div>
      </a>
      <StyledRepoTag href={repoLink} className="tag-wrapper">
        <p className="repo-tag other-repo-tag">Repo on GitHub</p>
      </StyledRepoTag>
    </StyledOther>
  )
}

export default OtherProject;

const StyledOther = styled(StyledProject)`
  align-self: flex-start;
  position: relative;
  
  a {
    display: grid;
    gap: 2rem;
    grid-template-columns: 192px 1fr;
  }

  .other-image-container {
  display: none;
  }

  .other-text {
  min-width: 300px;
  }
  .other-repo-tag {
  width: 192px;
  text-align: center;
}

@media (min-width: 600px) {
  .other-image-container {
    position: relative;
    display: flex;
  }
  img {
    aspect-ratio: 5 / 3;
    display: inherit; 
    float: left;
    margin-right: 2rem;
    object-fit: cover;
    width: 12rem;
  }

  .other-repo-tag {
    position: absolute;
    bottom: -2rem;
    left: 220px;
  }
}

`