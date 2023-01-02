import React from 'react';

import Header from 'sections/Header';
import Description from 'sections/Description';
import Tech from 'sections/Tech';
import Projects from 'sections/Projects';
import Skills from 'sections/Skills';
import Footer from 'sections/Footer';

export const App = () => {
  return (
    <>
      <Header />
      <Description />
      <Tech />
      <Projects />
      <Skills />
      <Footer />
    </>
  )
}
