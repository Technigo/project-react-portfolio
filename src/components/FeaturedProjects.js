import React from 'react';
import styled from 'styled-components/macro'

const FeaturedProjects = (
  {
    deployedLink,
    projectImage,
    projectTitle,
    projectDescription,
    techTags,
    repoLink
  }
) => {
  return (

    <FeaturedCard>
      <ProjectLink target="blank" href={deployedLink}>
        <ImageContainer>
          <Overlay> </Overlay>
          <ProjectImage
            src={projectImage}
            alt={projectTitle} />
          <OverlayText aria-hidden="true">{projectTitle}</OverlayText>
        </ImageContainer>
        <ProjectHead>{projectTitle}</ProjectHead>
        <LinkP>{projectDescription}</LinkP>
        <TagWrapper>
          {techTags.map((tag) => {
            return (<TagP key={tag}>{tag.toUpperCase()}</TagP>
            );
          })}
        </TagWrapper>
      </ProjectLink>
      <ProjectLink target="blank" href={repoLink}> <LinkP>GitHub Repo &gt;&gt;</LinkP>
      </ProjectLink>
    </FeaturedCard>

  )
}

export default FeaturedProjects;

export const Overlay = styled.div`
position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgb(44, 54, 56, 0.6);
`
export const OverlayText = styled.h5`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  opacity: 0.8;
  z-index: 1;
  letter-spacing: 00.04em;
  font-size: 25px;
  font-weight: 400;
 text-align: center;

`
export const ProjectHead = styled.h6`
  font-family: "Roboto";
  color: #990000;
  margin: 1rem 0 0.5rem 0;
  text-align: left;
  font-size: 17px;
  line-height: 29px;
  text-transform: uppercase;`

export const ProjectLink = styled.a`
  text-decoration: none;
  color: black;

  &:visited {
    color: black;
}
`
export const LinkP = styled.p`
 font-family: "Roboto";
  padding-top: 0;
  line-height: 4vh;
  font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 4vh;
    padding: 1rem 0;
`
export const ImageContainer = styled.div`
position: relative;
`
export const TagWrapper = styled.div`
display: flex;
  padding-bottom: 5%;
  padding-top: 3%;
  `
export const TagP = styled.p`
  font-family: "Roboto", sans-serif;
  color: #2b2e34;
  font-weight: bold;
  background-color: #db9aab;
  text-decoration: none;
  font-size: 12px;
  line-height: 12px;
  padding: 4px;
  margin: 3px;
  border-radius: 5px;
`
export const ProjectImage = styled.img`
  display: block;
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 200px;
`
export const FeaturedCard = styled.article`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 768px) {
      &{width: 45%;
      }
    }
`
export const FeaturedMedia = styled.div`
    @media (min-width: 768px) {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-evenly;
    }
`