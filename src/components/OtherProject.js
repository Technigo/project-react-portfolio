import React from 'react';
import styled from 'styled-components';
import StyledProject, { ImageContainerWithOverlay } from './Project.style';
import { StyledTagWrapper, StyledRepoTag } from './ReusableStyles.style';
import MoreArrows from './MoreArrows';

const OtherProject = (
  {
    deployedLink,
    projectImage,
    projectTitle,
    projectDescription,
    techTags,
    repoLink
  }
) => {
  const projectTags = techTags.map((tech) => {
    return <p key={tech}>{tech}</p>
  })

  const titleWithSpaces = ((projectTitle.split('-')).join(' '));

  return (
    <StyledOther className="project other other-project">
      <a href={deployedLink} className="test">
        <OtherImageContainer className="other-image-container">
          <div className="project-image-overlay" />
          <img src={projectImage} className="other-project-img" alt={titleWithSpaces} />
        </OtherImageContainer>
        <div className="other-text">
          <h4 className="underline">{titleWithSpaces}</h4>
          <p className="underline">{projectDescription} <MoreArrows /></p>
          <StyledTagWrapper className="tag-wrapper">
            {projectTags}
          </StyledTagWrapper>
        </div>
      </a>
      <OtherRepoTag href={repoLink} className="tag-wrapper">
        <p className="repo-tag other-repo-tag">Repo on GitHub</p>
      </OtherRepoTag>
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

  .other-text {
    min-width: 300px;
  }
`

const OtherImageContainer = styled(ImageContainerWithOverlay)`
  display: none;

  @media (min-width: 600px) {
    position: relative;
    display: flex;

  img {
    aspect-ratio: 5 / 3;
    display: inherit; 
    float: left;
    margin-right: 2rem;
    object-fit: cover;
    width: 12rem;
  }
}`

const OtherRepoTag = styled(StyledRepoTag)`
  width: 192px;
  text-align: center;

  @media (min-width: 600px) {
    position: absolute;
    bottom: -2rem;
    left: 220px;
  }`