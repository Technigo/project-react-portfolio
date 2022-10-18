import React from 'react'

import { Header, Title, Name } from 'styledcomponents/Header.js'
import AboutSection from 'components/AboutSection';
import './index.css';

export const App = () => {
  return (
    <div>
      <Header>
        <Name> Cecilia Frånlund</Name>
        <Title> frontend developer </Title>
      </Header>
      <AboutSection />
    </div>
  )
}
