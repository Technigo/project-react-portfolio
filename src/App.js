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
  const projectColor1 = 'rgb(51, 106, 51)';
  const projectColor2 = 'rgb(143, 190, 143)';
  const projectColor3 = 'rgb(246, 245, 240)';
  const projectColor4 = 'white';
  return (
    <div>
      <Header />
      <Presentation backColor={projectColor3} />
      <Tech color={projectColor1} backColor={projectColor4} />
      <Projects color={projectColor1} tagColor={projectColor2} backColor={projectColor3} />
      <MoreProjects color={projectColor1} tagColor={projectColor2} backColor={projectColor4} />
      <Thoughts color={projectColor1} backColor={projectColor3} />
      <MoreThoughts color={projectColor1} backColor={projectColor4} />
      <Skills color={projectColor1} backColor={projectColor3} />
      <ForMoreLinks color={projectColor1} backColor={projectColor4} />
      <Contact />
    </div>
  )
}