import React from 'react'
import projects from 'data.json'
import styled from 'styled-components/macro'
import { ContainerBeige, StyledGrid, Subheading } from 'GlobalStyles';

console.log(projects);

export const FeaturedProjects = () => {
  return (
    <ContainerBeige>
      <Subheading><span>Featured projects</span></Subheading>
      <StyledGrid>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <a href={project.url} target="_blank" rel="noreferrer">
              <div className="image-container">
                <div className="project__image"><img src={project.img_src} alt="Project" /></div>
                <div className="after">{project.title}</div>
              </div>
              <div className="project__title">{project.title}</div>
              <div className="project__description">{project.description}<a href={project.url_netlify}> → </a></div>
            </a>
            <StyledTags>
              {project.tags.map((tag) => (
                <li key={tag.id}>{tag.tech}</li>))}
            </StyledTags>
          </ProjectWrapper>
        ))}
      </StyledGrid>
    </ContainerBeige>
  )
};

export const ProjectWrapper = styled.article`
    width: 350px;
    margin: auto;
   
    a {
        text-decoration: none;
        color: black;
    }

    .image-container{
                position: relative;
            }

            .image-container .after {
                position: absolute;
                display: flex;
                justify-content: center;
                align-items: center;
                top: 0;
                left: 0;
                width: 100%;
                height: 203.72px;
                background: #60183575;
            }

            .image-container:hover .after {
                display: block;
                display: none;
                color: #FFF;
            }

            .after{
                color: white;
                font-family: 'Montserrat', sans-serif;
                font-weight: 700;
                font-size: 15px;
                text-transform: uppercase;
                text-align: center;
            }

    .project__image img{
            width: 350px;
            height: auto;
        }

            .project__title{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 700;
                    text-transform: uppercase;
                    text-align: left;
                    font-size: 15px;
                    color: #E8415E;
                    padding-top: 20px;
                }

            .project__description{
                    font-family: 'Roboto', sans-serif;
                    font-weight: 400;
                    text-align: left;
                    font-size: 15px;
                    line-height: 25px;
                    padding: 10px 0;
                }

`

export const StyledTags = styled.div`
    display: flex;
    list-style: none;

    li {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    background-color: #f6d0e4;
    text-decoration: none;
    font-size: 12px; 
    line-height: 12px;
    padding: 3px 10px;
    margin: 3px 6px 10px 0;
    }

    
`