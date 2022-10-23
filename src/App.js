import React from 'react'
import Intro from 'components/Intro';
import Header from 'components/Header';
import Footer from 'components/Footer';
import More from 'components/More';
import Skills from 'components/Skills'
import Projects from 'components/Projects';
import Tech from 'components/Tech';
import GlobalStyling from './styles/GlobalStying';

console.log();
export const App = () => {
  return (
    <GlobalStyling>
      <div className="outer-wrapper">
        <div className="inner-wrapper">
          <Header />
          <Intro />
          <Tech />
          <Skills />
          <Projects />
          <More />
          <Footer />
        </div>
      </div>
    </GlobalStyling>

  )
}
