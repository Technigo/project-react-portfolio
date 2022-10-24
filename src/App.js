/*eslint-disable linebreak-style */  
/*eslint-disable indent */   
/*eslint-disable spaced-comment*/  
/*eslint-disable no-trailing-spaces */  
/*eslint-disable no-multiple-empty-lines*/  
import React from 'react'
import Header from './components/Header';
import Intro from './components/Intro';
import Tech from './components/Tech';
import Footer from './components/Footer';
import Social from './components/Social';
import Skills from './components/Skills';
import { FeaturedProjects } from './components/Projects';
import GlobalStyles from 'GlobalStyles'

export const App = () => {
  return (
    <>
     <GlobalStyles />
      <Header
        myName = "Portfolio: Johanna Rosenholm"
        myTitle = "Frontend Developer" 
        myDescription = "With background in radiologic technology & commercial real estate management" 
        img src="img"
      />
      <Intro/>
      <Tech/>
      <FeaturedProjects />
      <Skills/>
      <Social/>
      <Footer />
      
    </>
  );
};
