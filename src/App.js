import React from 'react'
import { Header } from './components/Header'
import { About } from './components/About'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Thoughts } from './components/Thoughts'
import { Skills } from './components/Skills'
import { ForMore } from './components/ForMore'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <>
      <Header />
      <About />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>
  )
}