import React from 'react';
import styled from 'styled-components'
import OtherProjects, { TagWrapper, TagWrapperText, TagRepo, Title, ProjectWrapper } from './OtherProjects';

import { SectionTitle, Container } from './Globalstyles'
import projects from '../data/projects.json'

const FeaturedProjects = () => {
  return (
    <>
      <FeaturedProjectsStyled>
        <SectionTitle>Featured Projects</SectionTitle>
        <div>
          {projects.slice(0, 2).map((project) => (
            <FeaturedProjectWrapper key={project.id}>
              <div>
                <a href={project.netlify_link} target="_blank" rel="noreferrer">
                  <ImgWrapper>
                    <Image src={project.project_img} alt="project" />
                    <Overlay>{project.title}</Overlay>
                  </ImgWrapper>
                  <Title>{project.title}</Title>
                  <p>{project.project_description}</p>
                </a>
                <TagWrapper>
                  {project.tags.map((tag) => (
                    <TagWrapperText key={tag.id}>{tag.tech}</TagWrapperText>
                  ))}
                  <a
                    href={project.repo_link}
                    target="_blank"
                    rel="noreferrer"><TagRepo>GitHub Repo 👈</TagRepo>
                  </a>
                </TagWrapper>
              </div>
            </FeaturedProjectWrapper>
          ))}
        </div>
      </FeaturedProjectsStyled>
      <OtherProjects />
    </>
  )
}
export default FeaturedProjects

const FeaturedProjectsStyled = styled(Container)`
  background-color: var(--color-grey);
  line-height: 1.2em;
`
const FeaturedProjectWrapper = styled(ProjectWrapper)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    position: relative;
  
  @media (min-width: 1025px) {
    /* grid-template-columns: 1fr;
    gap: 3rem; */
  }
`
const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`
const Overlay = styled.div`
  display: none;
@media screen and (min-width: 1024px) {
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s ease;
  color: white;
  font-weight: 700;
  align-self: center;
  text-transform: uppercase;
  &:hover{
    background-color: transparent;
    color: transparent;
  }}
`

