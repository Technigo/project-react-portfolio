
import React from 'react';
import Header from './Header';
import Intro from './Intro';
import Tech from './Tech';
import Projects from './Projects';
import OtherProjects from './OtherProjects';
import ForMore from './ForMore';
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
      <ForMore />
      <Footer />
    </div>
  );
};
export default MainStructure;