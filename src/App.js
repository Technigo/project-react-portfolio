import React from 'react'
import { FeaturedProjects } from 'components/FeaturedProjects';
import { Header } from './components/Header'
import { Summary } from './components/Summary'
import { Tech } from './components/Tech'

export const App = () => {
  return (
    <div>
      <Header />
      <Summary />
      <Tech />
      <FeaturedProjects />
    </div>
  )
};
