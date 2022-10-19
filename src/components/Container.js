import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import ProfileImg from './ProfileImg';
import About from './About';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Skills from './Skills';
import Contact from './Contact';

const Footer = styled.p`
text-align: center;
font-family: 'Montserrat', sans-serif;
color: lightgrey;
`

const Container = () => {
  return (
    <div>
      <Header />
      <ProfileImg />
      <About />
      <Tech />
      <Portfolio />
      <Skills />
      <Contact />
      <Footer>Hanna Nörgård 2022</Footer>
    </div>
  )
}

export default Container;