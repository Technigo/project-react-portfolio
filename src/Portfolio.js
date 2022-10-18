import React from 'react'
import Footer from './Components/Footer'
import Header from './Components/Header'
import FeaturedProjects from './Components/FeaturedProjects'
import ForMore from './Components/ForMore'
import IntroText from './Components/Introtext'
import MyThoughts from './Components/MyThoughts'
import OtherProjects from './Components/OtherProjects'
import Skills from './Components/Skills'
import Tech from './Components/Tech'

const Portfolio = () => {
  return (
    <>
      <Header />
      <IntroText />
      <Tech />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </>
  )
}

export default Portfolio