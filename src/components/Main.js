import React, { useState, useEffect } from 'react'
import lnIcon from 'icons/icons8-linkedin-100.png'
import gitHubIcon from 'icons/icons8-github-100.png'
import Header from './Header'
/* import Intro from './Intro'
import Tech from './Tech'
import Projects from './Projects'
import OtherProjects from './OtherProjects'
import Thoughts from './Thoughts'
import Skills from './Skills'
import More from './More'
import Contact from './Contact' */

const Main = () => {
  const [repos, setRepos] = useState([])
  const API_GITHUB = 'https://api.github.com/users/Sailornina/repos'

  useEffect(() => {
    fetch(API_GITHUB)
      .then((res) => res.json)
      .then((json) => {
        setRepos(json)
      })
  }, [])

  console.log(repos)

  return (
    <div className="main-container">
      <Header
        lnIcon={lnIcon}
        gitHubIcon={gitHubIcon} />
    </div>
  )
}

export default Main;