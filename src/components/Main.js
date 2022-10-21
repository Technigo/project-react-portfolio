import React from 'react';

import Header from 'components/Header'
import Intro from 'components/Intro'
import Tech from 'components/Tech'
import { OuterWrapper } from './MainStyle'
import FetchedInfo from './FetchedInfo';
import MyThoughts from './MyThoughts';
import Skills from './Skills';
import ForMore from './ForMore';
import Footer from './Footer';

const Main = () => {
  return (
    <body>
      <OuterWrapper>
        <Header />
        <Intro />
        <Tech />
        <FetchedInfo />
        <MyThoughts />
        <Skills />
        <ForMore />
        <Footer />
      </OuterWrapper>
    </body>
  )
}

export default Main