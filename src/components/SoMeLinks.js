import React from 'react';
import { NavBar } from '../styles/GlobalStyles'

export const SoMeLinks = ({ image1, image2, alignment }) => {
  // Display social media links that open in a new tab:
  return (
    <NavBar alignment={alignment}>
      <a href="https://www.linkedin.com/in/tina-bruce-9b1a0813a/" target="_blank" rel="noopener noreferrer">
        <img src={image1} alt="linkedin icon" />
      </a>
      <a href="https://github.com/brucette" target="_blank" rel="noopener noreferrer">
        <img src={image2} alt="github icon" />
      </a>
    </NavBar>
  )
}