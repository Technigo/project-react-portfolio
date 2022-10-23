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
      <Tech color="#54BAB9" />
      <FeaturedProjectCard color="#54BAB9" tagColor="#54BAB9" />
      <OtherProjects tagColor="#54BAB9" />
      <MyThoughts color="#54BAB9" colorSecond="black" />
      <Skills color="#54BAB9" />
      <ForMore color="#54BAB9" />
      <Contact />
    </div>
  )
}
