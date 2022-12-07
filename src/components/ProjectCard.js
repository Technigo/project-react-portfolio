import React from 'react';
import styled from 'styled-components/macro';
import { Tag } from './global/GlobalStyling';

export const ProjectCard = ({ href, featured, image, title, description, tools }) => {
  return (
    <ProjectLink href={href} target="_blank" rel="noreferrer">
      <Project>
        {featured && (
          <ProjectShowCase>
            <ProjectImage src={image} />
            <Overlay />
          </ProjectShowCase>
        )}
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <Tag>
          {tools.map((tag) => (
            <p key={tag}>{tag}</p>
          ))}
        </Tag>
      </Project>
    </ProjectLink>
  )
}

const ProjectLink = styled.a`
  text-decoration: none;
  color: var(--color-text);
`

const ProjectShowCase = styled.div`
  height: 450px;
  position: relative;
  overflow: hidden;
`

const Overlay = styled.div`
@media (min-width: 667px) {
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  width: 100%;
  top: 0;
  height: 100%;
  transition: all ease 600ms;
}
`
const ProjectImage = styled.img`
  position: absolute; 
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-out;
`

const Project = styled.article`
@media (min-width: 667px) {
  &:hover ${Overlay} {
    opacity: 0;
  }
  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }
}
`

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  text-decoration: underline;
  font-weight: 600;
  padding-top: 15px;  
`

const ProjectDescription = styled.p`
  padding-bottom: 5px;
`