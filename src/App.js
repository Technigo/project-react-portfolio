import React from 'react'
import { Projects } from 'Components/Projects'
import { Header } from 'Components/Header'
import { AboutMe } from 'Components/AboutMe'
import { Tech } from 'Components/Tech'
import { Thoughts } from 'Components/Thoughts'
import { Skills } from 'Components/Skills'
import { ForMore } from 'Components/ForMore'
import { Footer } from 'Components/Footer'

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
