import React from 'react'

import Header from 'styledcomponents/Header.js'
import AboutSection from 'components/AboutSection';
import './index.css';
import TechStack from 'components/TechStack';
import FeaturedProjects from 'components/FeaturedProjects';

export const App = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <TechStack />
      <FeaturedProjects />
    </div>
  )
}
