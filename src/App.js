import React from 'react';
import { Header } from 'components/Header';
import { AboutMe } from 'components/AboutMe';
import { Technologies } from 'components/Techologies';
import { FeaturedProjects } from 'components/FeaturedProjects';
import { Articles } from 'components/Articles';
import { Skills } from 'components/Skills';
import { More } from 'components/More';
import { Footer } from 'components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Technologies />
      <FeaturedProjects />
      <Articles />
      <Skills />
      <More />
      <Footer />
    </div>
  );
};
