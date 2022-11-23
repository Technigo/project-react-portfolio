import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'
import Tech from './components/Tech'
import FeaturedProjects from './components/FeaturedProjects'
import Otherprojects from './components/Otherprojects'
import Mythoughts from './components/Mythoughts'
import Skills from './components/Skills'
import Formore from './components/Formore'
import Footer from './components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <FeaturedProjects />
      <Otherprojects />
      <Skills />
      <Footer />
    </>
  )
}
