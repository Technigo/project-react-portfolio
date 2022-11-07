import React from 'react'

import Intro from './Intro'
import TechStack from './TechStack'
import FeaturedProjects from './FeaturedProjects'
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