import React from 'react'
import Header from 'components/Header'
import OtherProjects from 'components/OtherProjects'
import AboutMe from 'components/AboutMe'
import Tech from 'components/Tech'
import FeaturedProjectCard from 'components/FeaturedProjects'
import MyThoughts3 from 'components/MyThoughts3'

export const App = () => {
  return (
    <div>
      <Header />
      <AboutMe />
      <Tech color="#54BAB9" />
      <FeaturedProjectCard color="#54BAB9" tagColor="#54BAB9" />
      <OtherProjects tagColor="#54BAB9" />
      <MyThoughts3 color="#54BAB9" colorSecond="black" />
    </div>
  )
}
