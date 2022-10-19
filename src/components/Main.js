import React from 'react';

import Header from 'components/Header'
import Intro from 'components/Intro'
import Tech from 'components/Tech'
import { OuterWrapper } from './MainStyle'
import FetchedInfo from './FetchedInfo';

const Main = () => {
  return (

    <OuterWrapper>
      <Header />
      <Intro />
      <Tech />
      <FetchedInfo />
    </OuterWrapper>

  )
}

export default Main