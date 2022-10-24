import React from 'react';
import Header from './Components/Header';
import Intro from './Components/Intro';
import Tech from './Components/Tech';
import Projects from './Components/Projects';
import OtherProjects from './Components/OtherProjects';
import ForMore from './Components/ForMore';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import GlobalStyle from './globalStyle';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <OtherProjects />
      <Skills />
      <ForMore />
      <Footer />
    </>
  );
};
