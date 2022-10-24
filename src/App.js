import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { Thoughts } from './components/Thoughts';
import { OtherProjects } from './components/OtherProjects';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Socials } from './components/Socials';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Projects />
      <OtherProjects />
      <Tech />
      <Thoughts />
      <Skills />
      <Socials />
      <Footer />
    </>
  )
}