import React from 'react';
import Header from './Header';
import ProfileImg from './ProfileImg';
import About from './About';
import Tech from './Tech';
import Portfolio from './Portfolio';

const Container = () => {
  return (
    <div>
      <Header />
      <ProfileImg />
      <About />
      <Tech />
      <Portfolio />
    </div>
  )
}

export default Container;