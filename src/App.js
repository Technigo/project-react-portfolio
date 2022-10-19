import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { FeatProjects } from './components/FeatProjects';
import { Other } from './components/Other';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <FeatProjects />
      <Other />
      <Footer />
    </>
  )
}
