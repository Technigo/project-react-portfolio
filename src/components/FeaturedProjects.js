import React from 'react'
import projects from 'data.json'
import styled from 'styled-components'
import { ContainerBeige, StyledGrid, Subheading } from 'GlobalStyles';

console.log(projects);

export const FeaturedProjects = () => {
  return (
    <ContainerBeige>
      <Subheading>Featured projects</Subheading>
      <StyledGrid>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <div className="project__image"><img src={project.img_src} alt="Project" /></div>
            <div className="project__title">{project.title}</div>
            <div className="project__description">{project.description}</div>
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