import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json';

const projectInfo = data.Projects.Project;

const project1 = projectInfo[0];
const project2 = projectInfo[1];
const project3 = projectInfo[2];
const project4 = projectInfo[3];

const Projects = () => {
  console.log(data);
  return (
    <ProjectSectionStying>
      <SectionHeaderStyling><div><h2>Projects</h2></div></SectionHeaderStyling>
      <div className="div-projects-wrapper">
        <a href="https://weather-app-mia-antonella.netlify.app/">
          <div className="projectDiv pd2 large">
            <h3>{project4.projectName}</h3>
            <img src={project4.imageUrl} alt="project" />
          </div>
        </a>

        <a href="https://mdahlgrenguesswho.netlify.app/">
          <div className="projectDiv pd2 large">

            <h3>{project3.projectName}</h3>
            <img src={project3.imageUrl} alt="project" />
          </div>
        </a>

        <a href="https://pt-chat-bot.netlify.app/">
          <div className="projectDiv small">

            <h3>{project2.projectName}</h3>
            <img src={project2.imageUrl} alt="project" />
          </div>
        </a>

        <a href="https://dainty-lily-7cc7b2.netlify.app/">
          <div className="projectDiv small">

            <h3>{project1.projectName}</h3>
            <img src={project1.imageUrl} alt="project" />
          </div>
        </a>
      </div>
      <div className="smaller-projects">
        <h3>Other projects</h3>
      </div>
    </ProjectSectionStying>
  )
}
export default Projects

const ProjectSectionStying = styled.section`

.div-projects-wrapper{
  display:flex;
  flex-direction: column;
}
.section.projects {

  /*Makes h2 an exception to the following rules of section projects*/
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   margin-left: 9vw;
   margin-bottom: 10vw;
   }

.projectDiv{
  font-size: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.projectDiv img{
  width: 300px;
  margin-top: 10px;
}

h3{
  color: grey;
}

.smaller-projects h3{
  display:flex;
  justify-content: center;

}
`