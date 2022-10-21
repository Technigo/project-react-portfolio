import React from 'react'
// import styled from 'styled-components'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { ForMore } from './components/ForMore'
import { Skills } from './components/Skills'
import { Footer } from './components/Footer'
import { Knowledge } from './components/Knowledge'
// import { FeaturedProjects } from './components/FeaturedProjects'
// import { OtherProjects } from './components/OtherProjects'
import { Thoughts } from './components/Thoughts'
import { MoreThoughts } from './components/MoreThoughts'

export const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Knowledge />
      {/* <FeaturedProjects />
      <OtherProjects /> */}
      <Thoughts />
      <MoreThoughts />
      <Skills />
      <ForMore />
      <Footer />
    </div>
  )
}

// const options = {
//   method: 'GET',
//   headers: {
//     Authorization: 'token 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'
//   }
// }

