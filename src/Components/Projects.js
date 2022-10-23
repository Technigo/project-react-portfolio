import React from 'react';
import styled from 'styled-components/macro';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
import ProjectCard from './Shared/ProjectCard';
import rData from '../data.json';

const { highlights, projects } = rData;

const filteredProjects = projects.filter((project) => highlights.includes(project.id));

const ProjectStyle = styled.div`
  background-color: var(--secondBackground); 
  padding: 15px 0 40px 0;
  font-family: Montserrat, sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 34px;


  .project-box{
    display: grid;
    grid-template-columns: 100%;
    aling-items; center;
    gap: 50px;
  }

  @media (min-width: 667px) and (max-width: 1024px) {
    
  .project-box{
    grid-template-columns: 45% 45%;
    justify-content: center;
    gap: 5%;
    padding-bottom: 30px;
  }
}

  @media (min-width: 1025px) {
    .project-box{
    padding: 30px 0 50px 0;
    grid-template-columns: repeat(2, 1fr);
    
  }}
`;
const Projects = () => {
  return (
    <ContentWrapper as="section" backgroundColor="var(--thirdBackground)">
      <ColorTitle background="var(--fourthTitle)" title="FEATURED PROJECTS" />
      <ProjectStyle>
        <div className="project-box">
          {filteredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                coverImage={project.photo}
                coverName={project.coverName}
                projectName={project.projectName}
                urlNetlify={project.urlNetlify}
                text={project.descriptionText}
                tags={project.tags} />
            );
          })}
        </div>
      </ProjectStyle>
    </ContentWrapper>
  );
};
export default Projects;
