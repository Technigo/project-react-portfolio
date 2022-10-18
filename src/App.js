import React from 'react'
import styled from 'styled-components'
import { Header } from './components/Header'
import { Intro } from './components/Intro'
import { Footer } from './components/Footer'

export const App = () => {
  return (
    <OuterWrapper>
      <Header />
      <Intro />
      <Footer />
    </OuterWrapper>
  )
}

export const OuterWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
