import React from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Intro } from 'components/Intro';
import { Tech } from 'components/Tech';
import FeaturedProjects from 'components/FeaturedProjects';
import Thoughts from 'components/Thoughts';
import Skills from 'components/Skills';
import More from 'components/More';

const Portfolio = () => {
  return (
    <div>

      <Header />
      <Intro />
      <Tech />
      <FeaturedProjects />
      <Thoughts />
      <Skills />
      <More />
      <Footer />

    </div>
  )
}

export default Portfolio