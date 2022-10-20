import React from 'react'; import { Header } from 'components/Header';
import { GlobalStyles } from 'components/GlobalStyles';
import { Introduction } from 'components/Introduction';
import { TechSkills } from 'components/TechSkills';
import { FeaturedProjects } from 'components/FeaturedProjects';
import { OtherProjects } from 'components/OtherProjects';
import { Thoughts } from 'components/Thoughts';
import { Skills } from 'components/Skills';
import { SocialMedia } from 'components/SocialMedia';
import { Footer } from 'components/Footer';

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
      <Skills />
      <SocialMedia />
      <Footer />
    </>

  )
}
