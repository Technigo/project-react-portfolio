import React from 'react';
import styled from 'styled-components';
import StyledProject, { ImageContainerWithOverlay } from './Project.style';
import { StyledTagWrapper, StyledRepoTag, OverlayText } from './ReusableStyles.style';

const FeaturedProject = (
  {
    deployedLink,

    projectTitle,
    defaultBranch,
    projectDescription,
    techTags,
    repoLink
  }
) => {
  const projectTags = techTags.map((tech) => {
    return <span key={tech}>{tech}</span>
  })

  const titleWithSpaces = ((projectTitle.split('-')).join(' '))

  return (
    <StyledFeaturedProject className="project">
      <a href={deployedLink}>
        <ImageContainerWithOverlay className="project-image">
          <div className="project-image-overlay" />
          <img src={`https://raw.githubusercontent.com/ElinSegelov/${projectTitle}/${defaultBranch}/code/src/assets/images/thumbnail.webp`} alt={titleWithSpaces} />
          <OverlayText className="overlay-text" aria-hidden="true">{titleWithSpaces}</OverlayText>
        </ImageContainerWithOverlay>
        <h3>{titleWithSpaces}.</h3>
        <p>{projectDescription}</p>
        <StyledTagWrapper className="tag-wrapper">
          {projectTags}
        </StyledTagWrapper>
      </a>
      <StyledRepoTag href={repoLink} className="tag-wrapper"> <p className="repo-tag">Repo on GitHub</p></StyledRepoTag>
    </StyledFeaturedProject>
  )
}

export default FeaturedProject;

const StyledFeaturedProject = styled(StyledProject)`

`