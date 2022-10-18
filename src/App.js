import React from 'react';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Intro } from 'components/Intro';

export const App = () => {
  return (
    <div>
      <Header />
      <Intro />
      <Footer />
    </div>
  )
}