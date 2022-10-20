import React from 'react';
import { Header } from 'components/Header';
import About from 'components/About';
import Tech from 'components/Tech';

export const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Tech />
    </div>
  )
}