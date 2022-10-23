import React from 'react'
import Header from 'components/Header'
import Intro from 'components/Intro'
import Tech from 'components/Tech'
import FeaturedProjects from 'components/FeaturedProjects'
import OtherProjects from 'components/OtherProjects';
import Skills from 'components/Skills'
import ForMore from 'components/ForMore'

export const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Tech />
      <FeaturedProjects />
      <OtherProjects />
      <Skills />
      <ForMore />
    </div>
  )
}
