import React from 'react';
import styled from 'styled-components';
import data from '../assets/featuredprojects.json'
import { SectionTitle, Wrapper, Heading, ProjectParagraph, TagIcons, GridWrapper } from './GlobalStyles';

export const FeaturedProjects = () => {
  return (
    <Wrapper primary>
      <SectionTitle primary>FEATURED PROJECTS</SectionTitle>
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
  border-width: 3px;
  border-style: solid; 
  border-image: 
    linear-gradient(
      to bottom, 
      #003333, 
      #A0D3D3,
      white
    ) 1;
  width: 90%;
  transition: transform .8s; 

  &:hover{
    transform: scale(0.95);
    border-style: solid; 
    border-image: 
      linear-gradient(
        to top, 
        #003333, 
        #A0D3D3,
        white
      ) 1;
  }


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
  opacity: 1;
  transition: .5s;
  background-color: rgb(0, 21, 21, 0.7);

  h3{
    color: white;
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
    opacity: 0;
  }
`
