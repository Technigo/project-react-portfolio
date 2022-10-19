import React from 'react';
import { Header } from './components/Header';
import { Intro } from './components/Intro';
import { Tech } from './components/Tech';
import { FeatProjects } from './components/FeatProjects';
import { MyThoughts } from './components/MyThoughts';
import { ForMore } from './components/ForMore';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <FeatProjects />
      <MyThoughts />
      <ForMore />
      <Footer />
    </>
  )
}
