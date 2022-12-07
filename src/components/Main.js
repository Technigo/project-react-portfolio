import React from 'react';
import BottomLinks from './BottomLinks';
import Knowledge from './Knowledge';
import Presentation from './Presentation';
import Projects from './Projects';
import Skills from './Skills';
import Thoughts from './Thoughts';

const Main = () => {
  return (
    <>
      <Presentation />
      <Knowledge />
      <Projects />
      <Thoughts />
      <Skills />
      <BottomLinks />
    </>
  )
}

export default Main;