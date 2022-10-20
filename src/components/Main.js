/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styled from 'styled-components'
import ForMore from './ForMore';
import Intro from './Intro';
import Projects from './Projects';
import Skills from './Skills';
import TechSection from './TechSection';
import Thoughts from './Thoughts';

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
` // Oklart om den här stylingen gör någon skillnad.

const Main = ({ linkedinLogo, githubLogo, stackOverflowLogo }) => {
  return (
    <StyledMain>
      <Intro />
      <TechSection />
      <Projects />
      <Thoughts />
      <Skills />
      <ForMore
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo}
        stackOverflowLogo={stackOverflowLogo} />
    </StyledMain>
  )
}

export default Main;