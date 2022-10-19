import React from 'react';

import Header from 'components/Header'
import Intro from 'components/Intro'
import Tech from 'components/Tech'
import { Body } from './MainStyle'

const Main = () => {
  return (
    <div>
      <Body>
        <Header />
        <Intro />
        <Tech />
      </Body>
    </div>
  )
}

export default Main