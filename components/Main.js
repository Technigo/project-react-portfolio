import React from 'react';

import Header from './Header';
import Intro from './Intro';
import TechSkills from './TechSkills';
import FeaturedProjects from './FeaturedProjects';
import OtherProjects from './OtherProjects';
import MyThoughts from './MyThoughts';
import OtherThoughts from './OtherThoughts';
import Skills from './Skills';
import MoreInfo from './MoreInfo';
import Footer from './Footer';

const Main = () => {
  return (
    <>
      <Header />
      <Intro />
      <TechSkills />
      <FeaturedProjects />
      <OtherProjects />
      <MyThoughts />
      <OtherThoughts />
      <Skills />
      <MoreInfo />
      <Footer />
    </>
  )
}
export default Main;