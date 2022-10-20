import React, { useState } from 'react'
import { Pitch } from 'components/Pitch'
import { TitleBar } from 'components/TitleBar'
import { TechInfo } from 'components/TechInfo'
import { ProjectBox } from 'components/ProjectBox'
import { Header } from './components/Header'

export const App = () => {
  const [project, setProject] = useState([]);
  return (
    <div>
      <Header />
      <Pitch />
      <TitleBar name="tech" />
      <TechInfo />
      <ProjectBox project={project} setproject={setProject} />
    </div>
  )
}
