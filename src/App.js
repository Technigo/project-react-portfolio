import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { TechSection } from './components/TechSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { OtherProjects } from './components/OtherProjects';
import { Thoughts } from './components/Thoughts';
// import { MoreThoughts } from './components/MoreThoughts';
import { Skills } from './components/Skills';
import { ForMore } from './components/ForMore';
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <TechSection />
      <FeaturedProjects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <ForMore color="green" />
      <Footer />
    </div>
  )
}

// <MoreThoughts subTitle="Remote tips" />