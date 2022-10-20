/* eslint-disable linebreak-style */
import React from 'react'
import GlobalStyles from 'Globalstyles'
import ScrollButton from 'components/Scrollbutton'
import Header from 'components/Header/Header'
import Intro from 'components/Intro/Intro'
import Tech from 'components/Tech/Tech'
import FeaturedProjects from 'components/FeaturedProjects/FeaturedProjects'
import OtherProjects from 'components/OtherProjects/OtherProjects'
import MyThoughts from 'components/MyThoughts/MyThoughts'
import MoreThoughts from 'components/MoreThoughts/MoreThoughts'
import Skills from 'components/Skills/Skills'
import ForMore from 'components/ForMore/ForMore'
import Footer from 'components/Footer/Footer'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <ScrollButton />
      <Header />
      <Intro />
      <Tech />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <MoreThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>

  )
}