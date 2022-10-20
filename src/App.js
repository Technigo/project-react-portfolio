import React from 'react'
import { Header } from './components/Header';
import { Presentation } from './components/Presentation';
import { Tech } from './components/Tech'
import { Projects } from './components/Projects';
import { MoreProjects } from './components/MoreProjects';
import { Thoughts } from './components/Thoughts';
import { MoreThoughts } from './components/MoreThoughts';
import { Skills } from './components/Skills';
import { ForMoreLinks } from './components/ForMoreLinks';
import { Contact } from './components/Contact';

export const App = () => {
  const projectColor1 = 'red';
  const projectColor2 = 'pink';
  return (
    <div>
      <Header />
      <Presentation />
      <Tech />
      <Projects color={projectColor1} tagColor={projectColor2} />
      <MoreProjects color={projectColor1} tagColor={projectColor2} />
      <Thoughts color={projectColor1} />
      <MoreThoughts color={projectColor1} />
      <Skills />
      <ForMoreLinks />
      <Contact />
    </div>
  )
}