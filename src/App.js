import Contact from 'components/Contact'
import Hero from 'components/Hero'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Summary from 'components/Summary'
import Tech from 'components/Tech'
import Thoughts from 'components/Thoughts'
import ForMore from 'components/ForMore'
import React from 'react'

export const App = () => {
  return (
    <>
      <Hero />
      <Summary />
      <Tech />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore />
      <Contact />
    </>
  )
}
