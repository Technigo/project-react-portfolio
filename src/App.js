import React from 'react'; import { Header } from 'components/Header';
import { GlobalStyles } from 'components/GlobalStyles';
import { Introduction } from 'components/Introduction';
import { TechSkills } from 'components/TechSkills'
import { FeaturedProjects } from 'components/FeaturedProjects'
import { OtherProjects } from 'components/OtherProjects'
import { Thoughts } from 'components/Thoughts'

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Introduction />
      <TechSkills />
      <FeaturedProjects />
      <OtherProjects />
      <Thoughts />
    </>

  )
}
