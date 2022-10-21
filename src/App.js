import React from 'react'
import { GlobalStyle } from 'components/GlobalStyles';
import { Header } from './components/Header';
import { AboutMe } from './components/AboutMe';
import { Tech } from './components/Tech';
import { FeaturedProjects } from './components/FeaturedProjects'
import { OtherProjects } from './components/OtherProjects';
import { MyThoughts } from './components/MyThoughts';
import { Skills } from './components/Skills';
import { ForMore } from './components/ForMore';
import { Footer } from './components/Footer';

export const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <AboutMe />
      <Tech />
      <FeaturedProjects color="red" tagColor="pink" />
      <OtherProjects />
      <MyThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </div>
  )
}
