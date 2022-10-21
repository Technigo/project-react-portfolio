import React from 'react';
import styled from 'styled-components';
import StyledProject, { ImageContainerWithOverlay } from './Project.style';
import { StyledTagWrapper, StyledRepoTag } from './ReusableStyles.style';
import MoreArrows from './MoreArrows';

const OtherProject = (
  {
    deployedLink,
    defaultBranch,
    projectTitle,
    projectDescription,
    techTags,
    repoLink
  }
) => {
  const projectTags = techTags.map((tech) => {
    return <span key={tech}>{tech}</span>
  })

  const titleWithSpaces = ((projectTitle.split('-')).join(' '));

  return (
    <StyledOther className="project other other-project">
      <StyledOtherProjectLink href={deployedLink} className="test">
        <OtherImageContainer className="other-image-container">
          <div className="project-image-overlay" />
          <img src={`https://raw.githubusercontent.com/ElinSegelov/${projectTitle}/${defaultBranch}/code/src/assets/images/thumbnail.webp`} alt={titleWithSpaces} />
        </OtherImageContainer>
        <div className="other-text">
          <h4 className="underline">{titleWithSpaces}</h4>
          <p className="underline">{projectDescription} <MoreArrows /></p>
          <StyledTagWrapper className="tag-wrapper">
            {projectTags}
          </StyledTagWrapper>
        </div>
      </StyledOtherProjectLink>
      <OtherRepoTag aria-label={`Link to ${titleWithSpaces} repository on Github`} href={repoLink} className="tag-wrapper">
        <p className="repo-tag other-repo-tag">Repo on GitHub</p>
      </OtherRepoTag>
    </StyledOther>
  )
}

export default OtherProject;

const StyledOtherProjectLink = styled.a`
  text-decoration: none;
  p {
    text-decoration: underline;
  }
  @media (min-width: 600px) {
  display: grid;
    gap: 2rem;
    grid-template-columns: 12rem 1fr;
  }
`

const StyledOther = styled(StyledProject)`
  position: relative;
/*   a {
    display: grid;
    gap: 2rem;
    grid-template-columns: 192px 1fr;
  } */
  
  .other-text {
    min-width: 300px;

  }
  @media (min-width: 600px) {
  align-self: center;
  }
`

const OtherImageContainer = styled(ImageContainerWithOverlay)`
  display: none;

  @media (min-width: 600px) {
    
    display: flex;

  img {
    display: inherit; 
    float: left;
    object-fit: cover;
    width: 100%;
    align-self: flex-start;
  }
}`

const OtherRepoTag = styled(StyledRepoTag)`
  width: 100%;
  
  @media (min-width: 600px) {
    position: absolute;
    bottom: -1.4rem;
    left: 0;
  }`