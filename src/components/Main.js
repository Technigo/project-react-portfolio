import React from 'react';

import linkedin from 'assets/linkedin-color-icon-white.svg'
import github from 'assets/github-icon-white.svg'
import stack from 'assets/stackoverflow-icon-white.svg'
import profilePic from 'assets/profile-pic.jpg'

import Header from './Header';
import Intro from './Intro';
import TechSkills from './TechSkills';
/* import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects'; */
import Projects from './Projects';
import MyThoughts from './MyThoughts';
import OtherThoughts from './OtherThoughts';
import Skills from './Skills';
import MoreInfo from './MoreInfo';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      <Header
        linkedin={linkedin}
        github={github}
        stack={stack}
        profilePic={profilePic} />
      <Intro />
      <TechSkills />
      <Projects />
      <MyThoughts />
      <OtherThoughts />
      <Skills />
      <MoreInfo />
      <Footer />

    </>
  )
}
export default Main;