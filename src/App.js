/* eslint-disable linebreak-style */
/* eslint-disable comma-dangle */

import React from 'react'
import GlobalStyles from 'Globalstyles'

import {
  ScrollButton,
  Header,
  Footer,
  Intro,
  Tech,
  FinalProject,
  FeaturedProjects,
  OtherProjects,
  MyThoughts,
  Skills,
} from './components'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollButton />
      <Header />
      <Intro />
      <Tech />
      <FinalProject />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <Skills />
      <Footer />
    </>
  )
}
