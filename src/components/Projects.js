import React from 'react';
import styled from 'styled-components';
import { projects } from '../data/projects';
import { SectionHeading, Heading } from 'GlobalStyles';
import { otherprojects } from 'data/otherProjects';

export const Projects = ({ }) => {
  return (
    <Section>
      <SectionHeading>FEATURED PROJECTS</SectionHeading>
      <ProjectContainer>
      {projects.map((project, index) => {
        return (
          <projects key={index}>
            <a href={project.url} target="_blank" rel="noopener noreferrer"> 
            <> 
            <Img src={project.imageSrc} />
            </>
            <Heading>{project.title}</Heading>
            <TitleDescription> {project.about} </TitleDescription>
            </a>
            <TagWrapper>
            {project.tags.map((tags, index) => {
            return <ProjectTags key={index}>{tags.toUpperCase()}</ProjectTags>;
          })}
            </TagWrapper>
            </projects>
        );
      })}
 
      <OtherContainer>
      <OtherHeading>Other Projects</OtherHeading>
      {otherprojects.map((other, index) => {
        return (
          <otherprojects key={index}>
          <a href={other.url} target="_blank" rel="noopener noreferrer"> 
           <OtherTitle>
          {other.project}
          </OtherTitle>
          </a>
          </otherprojects>
        );
      })}
      </OtherContainer>
      </ProjectContainer>
    </Section>
  );
};
    
const Section = styled.section `
background-color:#f7f8f9;
padding-top:10%;
`

const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: start;
  padding: 0% 2% 0% 2%;
  
    
  Img {
  width: 100%;
  @media (max-width: 768px) {
    display: none;
    }
}
  @media (min-width: 768px)  {
    grid-template-columns: 1fr 1fr;
    align-items: baseline;
    grid-gap: 30px;
    justify-items: center;
    padding: 0% 20% 0% 20%;
    }
`

 const Img = styled.img`
  height: 250px;
  width: 100%;

   @media (min-width: 768px){
  height: 250px;
  width: 65%;
  }
 `;


const TitleDescription = styled.p`
  max-width: 100%;

  @media (min-width: 768px) { //desktop
    max-width: 100%;
  }
  `

// TAGS
const TagWrapper = styled.div `
display: flex;
max-width: 65%;
`

const ProjectTags = styled.p`
  font-family: "Roboto", sans-serif;
    color: white;
    background-color:#2e5894 ;
    
    font-size: 12px; 
    line-height: 12px;
    padding: 4px;
    margin: 1px;
    border-radius: 4px;
`


const OtherContainer = styled.div`
  align-items: start;
  padding: 10% 0% 10% 0%;
  text-align: center;
  `
  const OtherTitle = styled.p`
  margin: 1%;
  `

const OtherHeading = styled.h5`
font-size: 18px;
margin: 5%;
  `