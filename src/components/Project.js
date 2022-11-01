import React from 'react';
import styled from 'styled-components/macro'

const ProjectNameWrapper = styled.div`
  position: absolute;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  top: 0;
  height: 100%;
  transition: all ease 600ms;
`

const ProjectImage = styled.img`
  position: absolute;
  object-fit: cover;
  width: 100%;
  height: 100%;
  transition: all 300ms ease-out;
`

const ProjectCard = styled.article`
  &:hover ${ProjectNameWrapper} {
    opacity: 0;
  }
  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }
`

const ProjectHeader = styled.header`
  height: 200px;
  position: relative;
  overflow: hidden;
`

const ProjectName = styled.h2`  
  position: absolute;
  top: 50%;
  width: 100%;
  transform: translateY(-50%);
  color: var(--white);
  padding: 0;
  line-height: 20px;
  text-align: center;
  transition: all 300ms ease;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  font-size: 1.1rem;
  letter-spacing: 1px;
`

const ProjectTitle = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  color: var(--accent);
  padding-top: 22px;
  line-height: 1.6;
`

const ProjectDescription = styled.p`
  font-family: "Roboto", sans-serif;
  padding-bottom: 5px;
  line-height: 1.5;
`

const ProjectTag = styled.span`
  font-family: "Roboto", sans-serif;
  color: var(--white);
  font-weight: 400;
  background-color: var(--tagbg);
  text-decoration: none;
  font-size: 0.75rem;
  line-height: 0.75rem;
  padding: 4px 6px;
  margin: 6px 6px 0 0;
`

const ProjectLink = styled.a`
text-decoration: none;
color: var(--black);
`

const Project = ({ title, name, description, tags, image, url, featured }) => {
  return (
    <ProjectLink href={url} target="_blank" rel="noreferrer">

      <ProjectCard>
        {featured && (
          <ProjectHeader>
            <ProjectImage src={image} />
            <ProjectNameWrapper>
              <ProjectName>{name}</ProjectName>
            </ProjectNameWrapper>
          </ProjectHeader>
        )}
        <ProjectTitle>{title}</ProjectTitle>

        <ProjectDescription>{description}</ProjectDescription>

        <p>
          {tags.map((tag) => (<ProjectTag key={tag}>{tag}</ProjectTag>))}
        </p>

      </ProjectCard>
    </ProjectLink>
  )
}
export default Project