import React from 'react';
import { Header } from './components/Header';
import { Introduction } from './components/Introduction';
import { TechSection } from './components/TechSection';
import { Projects } from './components/Projects';
import { OtherProjects } from './components/OtherProjects';
import { MyThoughts } from './components/MyThoughts';
import { MoreThoughts } from './components/MoreThoughts';

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <TechSection />
      <Projects color="#7d586e" tagColor="#c7d4cc" />
      <OtherProjects subTitle="Weather app" />
      <MyThoughts />
      <MoreThoughts subTitle="Remote tips" />
    </div>
  )
}
