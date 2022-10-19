import React from 'react'
import { Projects } from 'components/Projects'
import { Header } from 'components/Header'
import { AboutMe } from 'components/AboutMe'
import { Tech } from 'components/Tech'
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { ForMore } from 'components/ForMore'
import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <AboutMe />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>

  )
}
