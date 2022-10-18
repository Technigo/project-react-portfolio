import React from 'react'
import { Projects } from 'components/Projects'
import { Header } from 'components/Header'
import { InnerWrapper } from 'components/globalStyling'
import { AboutMe } from 'components/AboutMe'
import { Tech } from 'components/Tech'

export const App = () => {
  return (
    <>
      <Header />
      <InnerWrapper color>
        <AboutMe />
      </InnerWrapper>
      <InnerWrapper>
        <Tech />
      </InnerWrapper>
      <Projects />
    </>

  )
}
