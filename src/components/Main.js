import React from 'react'
import Header from './Header'
import Intro from './Intro'
import Tech from './Tech'
import Projects from './Projects'
import OtherProjects from './OtherProjects'
import Thoughts from './Thoughts'
import Skills from './Skills'
import More from './More'
import Contact from './Contact'

const Main = () => {
  return (
    <div className="main-container">
      <Header />
      <Intro />
      <Tech />
      <Projects />
      <OtherProjects />
      <Thoughts />
      <Skills />
      <More />
      <Contact />
    </div>
  )
}

export default Main;