import React from 'react'

import Header from 'components/Header'
import Main from 'components/Main'
import Footer from 'components/Footer'
import linkedinLogo from 'assets/icon-linkedin.svg'
import githubLogo from './assets/icon-github.svg'

export const App = () => {
  return (
    <>
      <Header
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo} />
      <Main />
      <Footer
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo} />
    </>
  )
}
