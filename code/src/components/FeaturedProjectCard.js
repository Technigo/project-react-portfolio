import React from 'react'
import styled from 'styled-components/macro'

import FeaturedProject from 'data/featured-projects.json'
import { SubTitle, SubParagraph, SkillTag, RepoTag, SkillTagContainer } from './OtherProjectCard'

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
          <SubTitleFP>{project.title}</SubTitleFP>
          <SubParagraph primary>{project.description}
          </SubParagraph>
          <SkillTagContainer>
            {project.tags && project.tags.map((tag) => (
              <SkillTagFP key={tag.id}> {tag.name}</SkillTagFP>))}
            <RepoTagFP>
              <a href={project.repo_url} title="link to Nina's Github repo" aria-label={project.repo} target="_blank" rel="noreferrer">
                <i className="fab fa-github" alt="GitHub icon" />
              </a>
            </RepoTagFP>
          </SkillTagContainer>
        </ProjectCard>
      ))}
    </FeaturedProjectWrapper>
  )
}

// styled components

const FeaturedProjectWrapper = styled.div`
  text-align: left;
  display: grid;
  justify-items: center;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin-bottom: 30px;

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
  /* margin: 2%; */
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
  background-color: rgba(27, 27, 27, 0.6);
  
  h5 {
    color: var(--clr-light);
    text-shadow: 
    var(--clr-dark) 2px 2px,
    var(--clr-sDark) 15px 15px 25px,
    var(--clr-sLight) -15px -15px 25px; 
    font-size: 2.5rem;
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
const SubTitleFP = styled(SubTitle)`
  color: var(--clr-dark);
`;

const SkillTagFP = styled(SkillTag)`
  background-color: var(--clr-light);
`;

const RepoTagFP = styled(RepoTag)`
  background-color: var(--clr-dark);

  &:hover {
    background-color: var(--clr-light);
  }

  a:hover{
    background-color: var(--clr-light);
  } 
`;