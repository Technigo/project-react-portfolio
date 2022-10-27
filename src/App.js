import React from 'react'
import Header from 'components/Header'
import OtherProjects from 'components/OtherProjects'
import AboutMe from 'components/AboutMe'
import Tech from 'components/Tech'
import FeaturedProjectCard from 'components/FeaturedProjects'
import MyThoughts from 'components/MyThoughts'
import Skills from 'components/Skills'
import ForMore from 'components/ForMore'
import Contact from 'components/Contact'
import { GlobalFonts } from 'components/GlobalStyleComponents'

/* Component that prints all the importet compnents */

export const App = () => {
  return (
    <div>
      <GlobalFonts />
      <Header />
      <AboutMe />
      <Tech color="#f0a04b" />
      <FeaturedProjectCard color="#f0a04b" tagColor="#f6c453" />
      <OtherProjects tagColor="#f6c453" />
      <MyThoughts color="#f0a04b" colorSecond="#f6c453" />
      <Skills color="#f0a04b" />
      <ForMore color="#f0a04b" />
      <Contact />
    </div>
  )
}
