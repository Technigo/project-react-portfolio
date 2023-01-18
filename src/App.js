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
import { GlobalStyling } from './components/Globalstyling'
import { TitleBarStyling } from './components/Globalstyling'

export const App = ({secondary}) => {
  return (
  <GlobalStyling>
      <div>
      <Header />
      <Pitch secondary />
      <TitleBarStyling>
      <TitleBar name="tech" />
      </TitleBarStyling>
      <TechInfo/>
      <TitleBarStyling>
      <TitleBar name="projects" />
      </TitleBarStyling>
      <ProjectBox />
      {/* <TitleBarStyling>
      <TitleBar name="My thoughts" />
      </TitleBarStyling>
      <MyThoughts /> */}
      <TitleBarStyling>
      <TitleBar name="Skills" />
      </TitleBarStyling>
      <Skills />
      <Footer />
    </div>
  </GlobalStyling>

  )
}
