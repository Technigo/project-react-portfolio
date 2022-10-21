import React from 'react'
import { Pitch } from 'components/Pitch'
import { TitleBar } from 'components/TitleBar'
import { TechInfo } from 'components/TechInfo'
import { ProjectBox } from 'components/ProjectBox'
import { Footer } from 'components/Footer'
import { MyThoughts } from 'components/MyThoughts'
// import { Icons } from 'components/Icons'
import { Header } from './components/Header'
import { Skills } from './components/Skills'

export const App = () => {
  return (
    <div>
      <Header />
      <Pitch />
      <TitleBar name="tech" />
      <TechInfo />
      <TitleBar name="projects" />
      <ProjectBox />
      <TitleBar name="My thoughts" />
      <MyThoughts />
      <TitleBar name="Skills" />
      <Skills />
      <Footer />
    </div>
  )
}
