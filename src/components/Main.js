import React from 'react'

import Intro from './Intro/Intro'
import TechStack from './Tech/TechStack'
import FeaturedProjects from './Projects/FeaturedProjects'
/* import Thoughts from './Thoughts'
 */import Skills from './Skills'

const Main = () => {
  return (
    <>
      <Intro />
      <TechStack />
      <FeaturedProjects />
      {/* <Thoughts /> */}
      <Skills />
    </>
  )
}

export default Main