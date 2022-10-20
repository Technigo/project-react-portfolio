import React from 'react';
import styled from 'styled-components';
import SectionHeaderStyling from 'styles/SectionHeaderStyling';

const Projects = () => {
  return (
    <ProjectSectionStying>
      <section className="section-wrapper">
        <SectionHeaderStyling><div><h2>Projects</h2></div></SectionHeaderStyling>
        <section className="section projects">
          <a href="https://weather-app-mia-antonella.netlify.app/">
            <div className="projectDiv pd2 large">
              <h3>Project weather app - Week 3</h3>
              <img src="images/weather_app.png" alt="project" />
            </div>
          </a>

          <a href="https://mdahlgrenguesswho.netlify.app/">
            <div className="projectDiv pd2 large">

              <h3>Project Guess Who - Week 2</h3>
              <img src="images/guess_who.png" alt="project" />
            </div>
          </a>

          <a href="https://pt-chat-bot.netlify.app/">
            <div className="projectDiv small">

              <h3>Project chat-bot - Week 1</h3>
              <img src="images/chatbot.png" alt="project" />
            </div>
          </a>

          <a href="https://dainty-lily-7cc7b2.netlify.app/">
            <div className="projectDiv small">

              <h3>Project news site - Pre-course</h3>
              <img src="images/newssite.png" alt="project" />
            </div>
          </a>
        </section>
      </section>
    </ProjectSectionStying>
  )
}
export default Projects

const ProjectSectionStying = styled.section`

.section.projects {

  /*Makes h2 an exception to the following rules of section projects*/
   display: flex;
   flex-direction: column;
   flex-wrap: nowrap;
   gap: 20px;
   margin-top: 60px;
   }

.projectDiv{
  min-height: 150px;
  min-width: 250px;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
  margin: 20px;
}

.projectDiv img{
  width: 410px;
  margin-top: 10px;
  margin-left: 20px;
}
`