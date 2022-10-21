import React from 'react';
import styled from 'styled-components/macro'
import { InnerWrapper, OuterWrapper, SectionTitle, Tag } from './global/GlobalStyling';
import data from '../data.json'

export const Projects = () => {
  const ProjectsSection = styled.div`
    text-align: center;
    padding: 50px 0;
  `
  const ProjectCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 5px;
    margin-top: 20px;
  `
  const ProjectCard = styled.div`
    background-color: pink;
    border: 2px solid black;
    grid-column: span 6;  
    text-align: left;
  `

  const OtherProjects = styled.div`
    padding: 20px;
  `

  const OtherProjectsList = styled.p`
    text-transform: uppercase;
    text-align: left
  `
  const ProjectPost = styled.p`
    border: 2px solid black;
  `

  const ProjectBackground = styled.img`
  width: 100%;
  height: 200px; 
  background: #002F33;
  display: flex;
  position: relative;
  margin: 0 auto;
  top: -50%;
  @media (min-width: 900px) {
    width: 367px;
    height: 220px;
  }
`;

  return (
    <OuterWrapper background>
      <InnerWrapper>
        <ProjectsSection>
          <SectionTitle>
            <p>Featured projects</p>
          </SectionTitle>
          <ProjectCardContainer>
            {data.map((item) => (
              item.id < 3 ? (
                <ProjectCard key={item.title}>
                    <a
                      href={item.netlify}
                      alt="project landingpage"
                      target="_blank"
                      rel="noopener noreferrer">
                        
                      <p>Published site: {item.title}</p>
                      <ProjectBackground src={item.image} alt="project poster" />
                    </a>
                  </ProjectPost>
                  <a
                    href={item.github}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>GitHub: {item.title}</p>
                  </a>
                  <p>{item.description}</p>
                  <Tag>
                    {item.tools.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </Tag>
                </ProjectCard>
              ) : null
            ))}
          </ProjectCardContainer>
          <h3>OTHER PROJECTS</h3>
          <OtherProjects>
            {data.map((item) => (
              item.id > 2 ? (
                <OtherProjectsList key={item.title}>
                  <a
                    href={item.netlify}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>Published site: {item.title}</p>
                  </a>
                  <a
                    href={item.github}
                    alt="project landingpage"
                    target="_blank"
                    rel="noopener noreferrer">
                    <p>GitHub: {item.title}</p>
                  </a>
                  <p>{item.description}</p>
                  <Tag>
                    {item.tools.map((tag) => (
                      <p key={tag}>{tag}</p>
                    ))}
                  </Tag>
                </OtherProjectsList>
              ) : null
            ))}
          </OtherProjects>
        </ProjectsSection>
      </InnerWrapper>
    </OuterWrapper>
  )
}