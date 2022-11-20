import React from 'react';
import styled from 'styled-components/macro';
import { Tag } from './global/GlobalStyling';

export const ProjectCard = ({ href, featured, image, name, title, description, tools }) => {
  return (
    <ProjectLink href={href} target="_blank" rel="noreferrer">
      <Project>
        {featured && (
          <ProjectShowCase>
            <ProjectImage src={image} />
            <NameWrapper>
              <ProjectName>{name}</ProjectName>
            </NameWrapper>
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
  height: 200px;
  position: relative;
  overflow: hidden;
`

const NameWrapper = styled.div`
@media (min-width: 667px) {
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  top: 0;
  height: 100%;
  transition: all ease 600ms;
}
`
const ProjectName = styled.h2`  
@media (min-width: 667px) {
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  color: white;
  padding: 0;
  line-height: 20px;
  text-align: center;
  transition: all 300ms ease;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.1rem;
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
  &:hover ${NameWrapper} {
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