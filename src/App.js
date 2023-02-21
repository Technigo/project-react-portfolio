import React from 'react'
import './index.css';
import Header from 'components/Header.js'
import AboutSection from 'components/AboutSection';

import TechStack from 'components/TechStack';
import FeaturedProjects from 'components/FeaturedProjects';
import SkillSection from 'components/SkillsSection';
import Thoughts from 'components/Thoughts';
import MoreSection from 'components/MoreSection';
import ContactFooter from 'components/ContactFooter';

export const App = () => {
  return (
    <div>
      <Header />
      <AboutSection />
      <TechStack />
      <FeaturedProjects />
      <SkillSection />
      <MoreSection />
      <Thoughts />
      <ContactFooter />
    </div>
  )
}
