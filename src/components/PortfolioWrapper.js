import React from 'react'
import { Header } from 'components/Header'
import { Summary } from 'components/Summary'
import { Tech } from 'components/Tech'
import { Thoughts } from 'components/Thoughts'
import { Skills } from 'components/Skills'
import { Contact } from 'components/Contact'
import { FeaturedProjects } from './FeaturedProjects'

export const PortfolioWrapper = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Tech />
      <FeaturedProjects />
      <Thoughts />
      <Skills />
      <Contact />
    </div>
  )
};
