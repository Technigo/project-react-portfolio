import React from 'react'
import OtherProjects from 'components/OtherProjects'
import { Header } from './components/Header'
import { ForMore } from './components/ForMore'
import FeaturedProjectCard from './components/FeaturedProjectCard'
import { MyThoughts } from './components/MyThoughts'
import { Introduction } from './components/Introduction'
import { Tech } from './components/Tech'

export const App = () => {
  return (
    <div>
      <Header />
      <Introduction />
      <Tech color="#262626" />
      <FeaturedProjectCard color="#262626" tagColor="grey"> </FeaturedProjectCard>
      <OtherProjects />
      <OtherProjects />
      <MyThoughts />
      <ForMore color="red"> </ForMore>
    </div>
  )
}