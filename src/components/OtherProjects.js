/* eslint-disable linebreak-style */
import React from 'react';
import projects from 'data/other-projects.json';
import styled from 'styled-components';

const OtherProjects = () => {
  return (
    <SectionContainer>
      <SectionHeadings>OTHER PROJECTS</SectionHeadings>
      <StyledProjectGrid>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
              <SubHeadings>{project.title}</SubHeadings>
              <ArticleText>{project.project_description}</ArticleText>
              <Tags>
                {project.tags && project.tags.map((tag) => (
                  <li key={tag.id}>{tag.name}</li>))}
              </Tags>
            </a>
          </ProjectWrapper>
        ))}
      </StyledProjectGrid>
    </SectionContainer>
  )
}

export default OtherProjects;

const SectionContainer = styled.section`
    /* display: block;
    text-align: center;
    margin-bottom: 50px; */
    background-color: #f4f4f4;
    padding: 55px 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: 768px) and (max-width: 991px) {
        padding: 20px 50px;
    }
    @media (min-width: 992px) {
        padding: 50px 15%;
    }
`
const SectionHeadings = styled.h2`
    /* text-transform: uppercase;
    color: white;
    width: fit-content;
    margin: 0 auto 30px;
    background-color: #1f5d1e;
    padding: 1px 7px; */
    line-height: 1.68rem;
    align-self: center;
    max-width: fit-content;
    padding: 0 1%;
    margin-bottom: 30px;
    background-color: #1f5d1e;
    color: white;
    font-size: 1.5rem;
    padding: 1px 7px;
    
`
const StyledProjectGrid = styled.div`
    /* display: grid;
    grid-template-columns: auto auto;
    background-color: inherit;
    padding: 0;
    width: 742px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 30px;
    gap: 10px; */
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 20px;
    align-items: start;
    a {
        text-decoration: none;
    }
    @media (min-width: 768px) and (max-width: 991px) {
        grid-template-columns: 1fr 1fr;
        align-items: baseline;
        grid-gap: 30px;
        justify-items: center;
    }
    @media (min-width: 992px) {
        grid-template-columns: 1fr 1fr;
        gap: 40px;
    }
`
const ProjectWrapper = styled.article`
    position: relative;
        
    img {
        width: 100%;
        height: 20vw;
        object-fit: cover;
    }
    &:hover {
        text-decoration: none;
    }
`

const SubHeadings = styled.h3`
    font-size: 1em;
    color: black;
    letter-spacing: 0.01em;
`
const ArticleText = styled.p`
    font-size: 1em;
    line-height: 1.5em;
    color: black;
`
const Tags = styled.ol`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: 0;
    list-style: none;

    &:hover {
        text-decoration: none;
    }

    li {
        border-radius: 3px;
        padding: 5px;
        margin: 5px 10px 0 0;
        background-color: #1f5d1e;
        color: white;
    }
`