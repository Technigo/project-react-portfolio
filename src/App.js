import React from 'react'
// import styled from 'styled-components'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'
import { Knowledge } from './components/Knowledge'
// import { OuterWrapper } from './components/styling'

export const App = () => {
  return (
    <div>
      {/* <OuterWrapper/> */}
      <Header />
      <Intro />
      <Knowledge />
      <Footer />
      {/* </OuterWrapper> */}
    </div>
  )
}

// export const OuterWrapper = styled.section`
//   width: 100%;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
// `
