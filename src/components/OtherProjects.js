import React from 'react'
import styled from 'styled-components/macro'
import { TagWrapper, TagP, LinkP, ProjectLink, ProjectHead } from './FeaturedProjects';

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

    <OtherCard>
      <ProjectLink href={deployedLink} className="test">
        <ProjectHead>{projectTitle}</ProjectHead>
        <ClonedLinkP className="underline">{projectDescription}</ClonedLinkP>
        <ClonedTagWrapper>
          {techTags.map((tag) => {
            return (<TagP key={tag}>{tag.toUpperCase()}</TagP>
            );
          })}
        </ClonedTagWrapper>
      </ProjectLink>
      <ProjectLink target="blank" href={repoLink}>
        <ClonedLinkP>GitHub Repo &gt;&gt;</ClonedLinkP>
      </ProjectLink>
    </OtherCard>

  )
}

export default OtherProjects;

export const OtherCard = styled.article`
  @media (min-width: 1024px) {
   &{width: 45%;
   }
 }
`
export const OtherWrapper = styled.div`

    @media (min-width: 768px) {
    &{ display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    }
}
`
const ClonedLinkP = styled(LinkP)`
    padding: 0;
`

const ClonedTagWrapper = styled(TagWrapper)`
    padding: 0;
    margin: 0;
`