import React from 'react';
import styled from 'styled-components';
import ContentWrapper from './Shared/ContentWrapper';
import ColorTitle from './Shared/ColorTitle';
// import TypeBox from './Shared/TypeBox';
import ProjectCard from './Shared/ProjectCard';
import rData from '../data.json';

// const { highlights, projects } = rData; /* samma som const highlights = rData.highlights; */
const { highlights, projects } = rData;

console.log('rData', rData)
console.log('highlights', highlights);
console.log('projects', projects);

const filteredProjects = projects.filter((project) => highlights.includes(project.id));
console.log('result', filteredProjects);

const ProjectStyle = styled.div`
  background-color: var(--secondBackground); 
  border: solid 2px red;
  // display: row;
  // justify-content: center;
  // padding: 10px 0 40px 0;
  // font-family: Montserrat, sans-serif;
  // font-weight: 400;
  // text-align: center;

  .project-box{
    // padding: 30px 0 20px 0;
    display: grid;
    gap: 50px;
  }
`
const Projects = () => {
  return (
    <ContentWrapper
      as="section"
      backgroundColor="var(--thirdBackground)">
      <ProjectStyle>
        <ColorTitle
          title="Projects" />
        <div className="project-box">
          {filteredProjects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                coverImage={project.photo}
                coverName={project.coverName}
                projectName={project.projectName}
                urlNetlify={project.urlNetlify}
                text={project.descriptionText} />
            )
          })}
        </div>
      </ProjectStyle>
    </ContentWrapper>
  );
};
export default Projects;