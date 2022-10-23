import React from 'react';
import GlobalStyles from 'GlobalStyles';
import Intro from 'components/Intro'
import { Header } from 'components/Header';

export const App = () => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Intro />
    </>
  )
}
