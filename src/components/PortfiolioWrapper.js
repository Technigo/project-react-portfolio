import React from 'react'
import ElevatorPitch from './ElevatorPitch'
import Header from './Header'
import ProfileImage from './ProfileImage'
import Projects from './Projects'

const PortfolioWrapper = () => {
  return (
    <section className="main-container">
      <Header />
      <ProfileImage />
      <ElevatorPitch />
      <Projects />
    </section>
  )
}

export default PortfolioWrapper