import React from 'react';
import styled from 'styled-components/macro';
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
  const repoImgSrc = `https://raw.githubusercontent.com/ElinSegelov/${projectTitle}/${defaultBranch}/thumbnailForPortfolio/thumbnail.webp`;

  const titleWithSpaces = ((projectTitle.split('-')).join(' '))

  const projectTags = techTags.map((tech) => {
    return <span key={tech}>{tech}</span>
  })

  return (
    <StyledFeaturedProject>
      <a href={deployedLink}>
        <ImageContainerWithOverlay>
          <div className="overlay" />
          <img src={repoImgSrc} alt={titleWithSpaces} />
          <OverlayText aria-hidden="true">{titleWithSpaces}</OverlayText>
        </ImageContainerWithOverlay>
        <h3>{titleWithSpaces}.</h3>
        <p>{projectDescription}</p>
        <StyledTagWrapper>
          {projectTags}
        </StyledTagWrapper>
      </a>
      <StyledRepoTag aria-label={`Link to ${titleWithSpaces} repository on Github`} href={repoLink}>
        <p>Repo on GitHub</p>
      </StyledRepoTag>
    </StyledFeaturedProject>
  )
}

export default FeaturedProject;

const StyledFeaturedProject = styled(StyledProject)`
max-width: 500px;
`