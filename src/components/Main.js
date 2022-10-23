/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import ForMore from './ForMore';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import TechSection from './TechSection';
import Thoughts from './Thoughts';

const Main = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <main>
      <Intro />
      <TechSection />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo}
        stackOverflowLogo={stackOverflowLogo} />
    </main>
  )
}

export default Main;