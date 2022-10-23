import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json';
import OtherProject from './OtherProject';
import ProjectsOverlayStyling from '../styles/ProjectsOverlayStyling';

const projectInfo = data.Projects.Project;
console.log(projectInfo);

const Projects = () => {
  console.log(data);
  return (
    <ProjectSectionStyling>
      <SectionHeaderStyling><div><h2>Projects</h2></div></SectionHeaderStyling>
      <div className="bigger-projects-wrapper">
        {projectInfo.reverse().map((project) => (
          <a href={project.url} alt="link to project">
            <div className="projects-div" key={project.id}>
              <ProjectsOverlayStyling>
                <img src={project.imageUrl} alt="pic" />
              </ProjectsOverlayStyling>
              <h4>{project.projectName}</h4>
              <p className="project-description">{project.desc}</p>
            </div>
          </a>
        ))}
      </div>
      <div className="smaller-projects">
        <OtherProject />
      </div>
    </ProjectSectionStyling>
  )
}
export default Projects

const ProjectSectionStyling = styled.section`

.bigger-projects-wrapper{
  display:flex;
  flex-direction: column;
  justify-content: center;
}

.projects-div{
  font-size: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
}

.projects-div img{
  width: 100%;
  margin-top: 10px;
}

.projects-div p{
  width: 80%;
  margin-bottom: 5vw;
}

h3{
  color: grey;
  text-decoration: none;
  text-align: center;
  font-family: Montserrat;
}


h4{
  color:#516a59;
  text-decoration: underline;
  font-size: 16px;
  margin: 0px;
  margin-bottom: 3px;
  padding: 0px;
}

`