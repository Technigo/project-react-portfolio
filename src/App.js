import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
import AllProjects from './components/AllProjects';
import MyThoughts from './components/MyThoughts';
import Skills from './components/Skills';
import ForMore from './components/ForMore';
import Footer from './components/Footer';

export const App = () => {
  return (

    <>
      <Header />
      <AboutMe />
      <Tech />
      <AllProjects />
      <MyThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>
  )
}
