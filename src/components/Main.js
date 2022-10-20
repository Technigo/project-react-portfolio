import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import About from './About'
import Tech from './Tech'
import FeaturedProjects from './FeaturedProjects'
import OtherProjects from './OtherProjects'
import Articles from './Articles'
import Skills from './Skills'
import Footer from './Footer'

export const Main = () => {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Tech />
      <FeaturedProjects />
      <OtherProjects />
      <Articles />
      <Skills />
      <Footer />
    </>
  )
}
