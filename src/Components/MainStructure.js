
import React from 'react';
import rData from './data.json';
import Fetch from './Fetch';
import Header from './Header';
import Intro from './Intro';
import Tech from './Tech';
import Projects from './Projects';
import OtherProjects from './OtherProjects';
import Skills from './Skills';
import Footer from './Footer';

const MainStructure = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <OtherProjects />
      <Skills />
      <Footer />
      <div className="project-wrapper">
        {rData.map((project) => {
          console.log('project', project)
          return (
            <Fetch
              key={project.id}
              url={project.url}
              coverName={project.coverName}
              text={project.descriptionText}
              photo={project.photo} />
          )
        })}
      </div>
    </div>
  );
};
export default MainStructure;