import React from 'react'
import { TagWrapper, TagP, LinkP, ProjectLink, ProjectHead } from './FeaturedProjects';
import { InnerWrapper } from './MainStyle';

const OtherProjects = (
  {
    deployedLink,
    projectTitle,
    projectDescription,
    techTags,
    repoLink
  }
) => {
  return (
    <InnerWrapper>
      <div className="project other other-project">
        <ProjectLink href={deployedLink} className="test">
          <div className="other-text">
            <ProjectHead>{projectTitle}</ProjectHead>
            <LinkP className="underline">{projectDescription}</LinkP>
            <TagWrapper>
              <TagP>{techTags}</TagP>
            </TagWrapper>
          </div>
        </ProjectLink>
        <ProjectLink target="blank" href={repoLink}>
          <LinkP>GitHub Repo &gt;&gt;</LinkP>
        </ProjectLink>
      </div>
    </InnerWrapper>
  )
}

export default OtherProjects;