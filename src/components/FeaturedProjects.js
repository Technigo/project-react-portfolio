import React from 'react';
import styled from 'styled-components';
import data from '../assets/featuredprojects.json'
import { SectionTitle, Wrapper, Heading, ProjectParagraph, TagIcons, GridWrapper } from './GlobalStyles';

export const FeaturedProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle>FEATURED PROJECTS</SectionTitle>
      <GridWrapper>
        {data.map((item) => (
          <ProjectCard key={item.id}>
            <a
              href={item.netlify_url}
              target="_blank"
              rel="noreferrer"
              role="button">
              <ProjectDisplay>
                <ProjectDisplayOverlay>
                  <h3>{item.overlay}</h3>
                </ProjectDisplayOverlay>
                <img src={item.image} alt={item.overlay} />
              </ProjectDisplay>
            </a>
            <Heading>{item.title}</Heading>
            <ProjectParagraph primary>{item.description}
            </ProjectParagraph>
            <TagIcons>
              {item.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </TagIcons>
          </ProjectCard>
        ))}
      </GridWrapper>
    </Wrapper>
  )
};

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  border: 3px solid white;
  width: 90%;


  @media (min-width: 668px) and (max-width: 1023px){
    width: 90%;
  }

  @media (min-width: 1024px){
    width: 90%;
  }
`

const ProjectDisplay = styled.div`
  margin: 2%;
  position: relative;

  img{
    display: block;
    width: 100%;
    height: 100%;
    }
    
    &:hover{
        opacity: 1;
    }
`
const ProjectDisplayOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s;
  background-color: #fffbe9d6;

  h3{
    color: #614124;
    text-decoration: overline;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    
}
  &:hover{
    opacity: 1;
  }
`
