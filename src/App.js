import React from 'react'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Tech } from './components/Tech'
import { Projects } from './components/Projects'
import { Thoughts } from './components/Project'

export const App = () => {
  return (
    <>
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <Thoughts />
    </>
  )
}

