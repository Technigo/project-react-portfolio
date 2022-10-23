import React from 'react';
import GlobalStyles from 'GlobalStyles';
import Intro from 'components/Intro'
import { Header } from 'components/Header';
import Toolbox from 'components/Toolbox'
import FeaturedProjects from 'components/FeaturedProjects';
import Footer from 'Footer';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Intro />
      <Toolbox />
      <FeaturedProjects />
      <Footer />
    </>
  )
}
