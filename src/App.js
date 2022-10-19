import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import About from './components/About'
import Experience from './components/Experience'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'

export const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Portfolio />
      <Contact />
    </>
  )
}
