import React from 'react'
import { Header } from './components/Header';
import { FeaturedProjects } from './components/FeaturedProjects'
import { OtherProjects } from './components/OtherProjects';
import { MyThoughts } from './components/MyThoughts';
import { ForMore } from './components/ForMore';
import { AboutMe } from './components/AboutMe';

export const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <ForMore />
    </div>
  )
}
