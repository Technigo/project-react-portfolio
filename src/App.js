import React from 'react'
import Header from 'components/Header';
import Tech from 'components/Tech';
import Skills from 'components/Skills';
import Footer from 'components/Footer';
import FeaturedProjects from 'components/FeaturedProjects';

export const App = () => {
  return (
    <>
      <Header />
      <Tech />
      <FeaturedProjects />
      <Skills />
      <Footer />
    </>
  )
}
