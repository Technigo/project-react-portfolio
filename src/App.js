import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { TechSection } from './components/TechSection';
import { Projects } from './components/Projects';
import { OtherProjects } from './components/OtherProjects';
import { Thoughts } from './components/Thoughts';
import { MoreThoughts } from './components/MoreThoughts';
import { Skills } from './components/Skills';
import { ForMore } from './components/ForMore';

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <TechSection />
      <Projects color="#7d586e" tagColor="#c7d4cc" />
      <OtherProjects subTitle="Weather app" />
      <Thoughts />
      <MoreThoughts subTitle="Remote tips" />
      <Skills />
      <ForMore color="green" />
    </div>
  )
}
