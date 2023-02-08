/* eslint-disable react/jsx-closing-tag-location */

import React from 'react'
import styled from 'styled-components/macro'
import Pill from './Pill'

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

const ProjectHeader = styled.header`
  height: 200px;
  position: relative;
  overflow: hidden;
  &:hover ${ProjectNameWrapper} {
    opacity: 0;
  }
  &:hover ${ProjectImage} {
    transform: scale(1.05);
  }
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
  padding-top: 15px;
  line-height: 1.2;
`

const ProjectDescription = styled.p`
  font-family: "Roboto", sans-serif;
  padding-top: 4px;
  padding-bottom: 6px;
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

const Project = ({ title, name, description, tags, date, image, liveurl, featured, githuburl }) => {
  return (
    <article>
      <a href={liveurl} target="_blank" rel="noreferrer" style={{ color: 'var(--black)', textDecoration: 'none' }}>
        {featured
        && <>
          <ProjectHeader>
            <ProjectImage src={image} />
            <ProjectNameWrapper>
              <ProjectName>
                {name}
              </ProjectName>
            </ProjectNameWrapper>
          </ProjectHeader>
          <ProjectTitle>
            {title} | <span style={{ fontWeight: '400', textTransform: 'none', marginRight: '2px', fontSize: '0.9rem' }}>{date}</span>
          </ProjectTitle>
        </>}

        {!featured && (
          <ProjectTitle>
            {name} | <span style={{ fontWeight: '400', textTransform: 'none', marginRight: '2px', fontSize: '0.9rem' }}>{date}</span>
          </ProjectTitle>
        )}

        <ProjectDescription>
          {description}
        </ProjectDescription>
      </a>
      <p>
        {tags.map((tag) => (<ProjectTag key={tag}>{tag}</ProjectTag>))}
      </p>

      <div style={{ paddingTop: '12px', paddingBottom: '15px' }}>
        <Pill variant="web" href={liveurl} />
        <Pill variant="github" href={githuburl} />
      </div>
    </article>
  )
}
export default Project