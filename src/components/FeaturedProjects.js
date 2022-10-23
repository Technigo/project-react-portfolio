import React from 'react';
import styled from 'styled-components';
import data from '../assets/featuredprojects.json'
import { SectionTitle, Wrapper, Heading, ProjectText, Tags, GridWrapper } from './GlobalStyles';

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
            <ProjectText primary>{item.description}
            </ProjectText>
            <Tags>
              {item.tags.map((tag) => (
                <p key={tag}>{tag}</p>
              ))}
            </Tags>
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
  width: 90%;
  cursor: pointer;
  border-width: 3px;
  border-style: solid; 
  border-image: 
    linear-gradient(
      to bottom, 
      #003333,
      #648787,
      #648787,
      white
    ) 1;
  
  transition: transform .8s; 

  &:hover{
    transform: scale(0.95);
    border-style: solid; 
    border-image: 
      linear-gradient(
        to top, 
        #003333,
        #648787,
        #648787,
        white
      ) 1;
  }
`

const ProjectDisplay = styled.div`
  margin: 2%;
  position: relative;

  img{
    display: block;
    width: 100%;
    }
`

const ProjectDisplayOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
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
