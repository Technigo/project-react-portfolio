import React from 'react';
import { Header } from 'components/Header';
import About from 'components/About';
import Tech from 'components/Tech';
import FeatureProjects from 'components/FeatureProjects';
import OtherProjects from 'components/OtherProjects';
import Thoughts from 'components/Thoughts';
import Skills from 'components/Skills';
import More from 'components/More';
import Footer from 'components/Footer';

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Tech />
      <FeatureProjects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <More />
      <Footer />
    </div>
  )
}