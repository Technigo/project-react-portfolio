import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Tech from './components/Tech';
/* import FeaturedProj from './components/FeaturedProj'; */
import OtherProj from './components/OtherProj';
import MyThoughts from './components/MyThoughts';
import MoreThoughts from './components/MoreThoughts';
import Skills from './components/Skills';
import ForMore from './components/ForMore';
import Footer from './components/Footer';

export const App = () => {
  return (

    <div>
      <Header />
      <AboutMe />
      <Tech />
      <OtherProj />
      <MyThoughts />
      <MoreThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </div>
  )
}
