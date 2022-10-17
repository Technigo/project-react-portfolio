/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import linkedinLogo from './images/linkedin.svg'
import githubLogo from './images/github.svg'
import stackOverflowLogo from './images/stackoverflow.svg'

export const App = () => {
  return (
    <>
      <Header
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo}
        stackOverflowLogo={stackOverflowLogo} />
      <Main
        linkedinLogo={linkedinLogo}
        githubLogo={githubLogo}
        stackOverflowLogo={stackOverflowLogo} />
      <Footer />
    </>
  );
}

export default App;
