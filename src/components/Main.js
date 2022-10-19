import React from 'react'
import lnIcon from 'icons/icons8-linkedin-100.png'
import gitHubIcon from 'icons/icons8-github-100.png'
import Header from './Header'
/* import Intro from './Intro'
import Tech from './Tech'
import Projects from './Projects'
import Skills from './Skills'
import More from './More'
import Contact from './Contact' */

const Main = () => {
  return (
    <div className="main-container">
      <Header
        lnIcon={lnIcon}
        gitHubIcon={gitHubIcon} />
    </div>
  )
}

export default Main;