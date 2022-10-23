import React from 'react';
import projects from 'data/featured-projects.json';
import styled from 'styled-components';

const FeaturedProjects = () => {
  return (
    <SectionContainer>
      <SectionHeadings>PROJECTS</SectionHeadings>
      <StyledProjectGrid>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} role="button" aria-pressed="false" aria-label={project.repo_name} target="_blank" rel="noreferrer">
              <OverlayImage>
                <h2>{project.overlay_title}</h2>
              </OverlayImage>
              <img src={project.img_src} alt={project.repo_name} />
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

export default FeaturedProjects;

const SectionContainer = styled.section`
    /* display: block;
    text-align: center;
    margin-bottom: 50px; */
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
const OverlayImage = styled.div`
    position: absolute;
    width: 100%;
    height: 20vw;
    background-color: rgba(0, 0, 0, 0.5);
    transition: 0.3s ease;
    
    h2 {
        top: 50%;
        left: 50%;
        position: absolute;
        transform: translate(-50%, -50%);
        color: darkgreen;
    }
    &:hover, &:hover h2 {
        background-color: transparent;
        color: transparent;
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