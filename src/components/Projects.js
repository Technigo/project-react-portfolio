import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';
import data from 'data.json';
import OtherProject from './OtherProject';

const projectInfo = data.Projects.Project;
console.log(projectInfo);

const Projects = () => {
  console.log(data);
  return (
    <ProjectSectionStyling>
      <SectionHeaderStyling><div><h2>Projects</h2></div></SectionHeaderStyling>
      <div className="bigger-projects-wrapper">
        {projectInfo.reverse().map((project) => (

          <div className="projects-div" key={project.id}>
            <a href={project.url} alt="link to project">
              <img src={project.imageUrl} alt="pic" />
              <h4>{project.projectName}</h4>
              <p className="project-description">{project.desc}</p>
            </a>
          </div>
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

@media (min-width: 667px) and (max-width: 1024px){
  .bigger-projects-wrapper{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;

  }
  .projects-div{
    width: 40%;
    margin-left: 7vw;
  }
  .projects-div img{
    width: 80%;
    margin-top: 10px;
  }

  a{
    margin: 0px;
    padding: 0px;
  }
  p {
    font-size: 18px; 
    margin:0px;
  }

  h4{
    font-size: 18px;
    margin-left: 1.5vw;
  }
}

@media (min-width: 1024px) {
  .bigger-projects-wrapper{
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

  }
  .projects-div{
    width: 40%;
    margin: 0px;  
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

  }
  .projects-div img{
    width: 80%;
    margin-top: 10px;
  }

  a{
    margin: 0px;
    padding: 0px;
  }
  
  .project-description{
    font-size: 18px; 
    margin-bottom: 0px;
    padding: 0px;
  }

  h4{
    font-size: 18px;
    margin-left: 1vw;
  }
}

}

`