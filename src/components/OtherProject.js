import React from 'react';
import styled from 'styled-components/macro';
import StyledProject from './Project.style';
import { StyledTagWrapper, StyledRepoTag, StyledOtherLinkWrapper } from './ReusableStyles.style';
import MoreArrows from './MoreArrows';

const OtherProject = (
  {
    deployedLink,
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
    <StyledProject>
      <StyledOtherLinkWrapper href={deployedLink}>
        <OtherText>
          <h4>{titleWithSpaces}.</h4>
          <p> {projectDescription} <MoreArrows /></p>
        </OtherText>
        <StyledTagWrapper>
          {projectTags}
        </StyledTagWrapper>
      </StyledOtherLinkWrapper>
      <OtherRepoTag aria-label={`Link to ${titleWithSpaces} repository on Github`} href={repoLink}>
        <p>Repo on GitHub</p>
      </OtherRepoTag>
    </StyledProject>
  )
}

export default OtherProject;

const OtherText = styled.div`
  
  h4, p {
    display: inline;
    text-decoration: underline;
  }
`

const OtherRepoTag = styled(StyledRepoTag)`
  width: 100%;
`