import React from 'react'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Thoughts } from './components/Thoughts'
import { OtherProjects } from './components/OtherProjects'
import { Skills } from './components/Skills'
import { ForMore } from './components/ForMore'
import { Contact } from './components/Contact'

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Contact />
    </>
  )
}

