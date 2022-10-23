import React from 'react'
import styled from 'styled-components/macro'

import FeaturedProject from 'data/featured-projects.json'
import { SubTitle, SubParagraph, SkillTag, SkillTagContainer } from './OtherProjectCard'

// react component

export const FeaturedProjectCard = () => {
  return (
    <FeaturedProjectWrapper>
      {FeaturedProject.map((project) => (
        <ProjectCard key={project.title}>
          <a href={project.url} target="_blank" rel="noreferrer">
            <ProjectDisplay>
              <ProjectDisplayOverlay>
                <h5>{project.overlay}</h5>
              </ProjectDisplayOverlay>
              <img src={project.image} alt={project.overlay} />
            </ProjectDisplay>
          </a>
          <SubTitle>{project.title}</SubTitle>
          <SubParagraph primary>{project.description}
          </SubParagraph>
          <SkillTagContainer>
            {project.tags && project.tags.map((tag) => (
              <SkillTag key={tag.id}> {tag.name}</SkillTag>))}
          </SkillTagContainer>
        </ProjectCard>
      ))}
    </FeaturedProjectWrapper>
  )
}

// styled components

// const Wrapper = styled.div`
//   width: 80%;
//   margin: 0 auto;
//   max-width: 1100px;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   font-size: 24px;
//   line-height: 1.4;

//   @media (max-width: 800px) {
//     font-size: 16px;
//     line-height: 1.4;
//   }
// `;

// const SectionHeader = styled.h2`
//   font-size: 50px;
//   line-height: 1;
//   padding: 10px 15px;
//   margin-bottom: 100px;
//   font-family: "Montserrat Bold";
//   background-color: ${(props) => props.color};
//   color: white;

//   @media (max-width: 800px) {
//     font-size: 22px;
//     line-height: 1;
//     padding: 10px 15px;
//     margin-bottom: 40px;
//   }
// `;

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 50px;
  margin-bottom: 100px;

  @media (max-width: 800px) {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
    margin-bottom: 50px;
  }
`;

const ProjectCard = styled.div`
  display: grid;
  grid-template-columns: 100%;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 90%;
`;

const ProjectDisplay = styled.div`
  margin: 2%;
  position: relative;

  img {
    display: block;
    width: 100%;
    }
`;

const ProjectDisplayOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  transition: .5s;
  background-color: rgba(98, 44, 98, 0.6);
  
  h5 {
    color: var(--clr-med);
    text-shadow: 
    rgb(62, 57, 57) 11px 11px 21px,
    rgb(168, 158, 158) -11px -11px 21px; 
    font-size: 1.2rem;
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
`;