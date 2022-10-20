import React from 'react'
import lnIcon from 'icons/icons8-linkedin-100.png'
import gitHubIcon from 'icons/icons8-github-100.png'
import discordIcon from 'icons/icons8-discord-100.png'
import GlobalStyles from './styled-components/GlobalStyles'
import Header from './Header'
import Intro from './Intro'
import Tech from './Tech'
import Projects from './Projects'
import Skills from './Skills'
import More from './More'
import Footer from './Footer'

const Main = () => {
  return (
    <div className="main-container">
      <GlobalStyles />
      <Header
        lnIcon={lnIcon}
        gitHubIcon={gitHubIcon} />
      <Intro />
      <Tech />
      <Projects />
      <Skills />
      <More
        lnIcon={lnIcon}
        gitHubIcon={gitHubIcon}
        discordIcon={discordIcon} />
      <Footer />
    </div>
  )
}

export default Main;