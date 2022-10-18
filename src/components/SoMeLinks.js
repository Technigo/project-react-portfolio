import React from 'react';
import linkedinWhite from '../assets/linkedinWhite.svg';
import githubWhite from '../assets/githubWhite.svg';

export const SoMeLinks = () => {
  // Display social media links that open in a new tab
  return (
    <nav>
      <a href="https://www.linkedin.com/in/tina-bruce-9b1a0813a/" target="_blank" rel="noopener noreferrer">
        <img src={linkedinWhite} alt="white linkedin icon" />
      </a>
      <a href="https://github.com/brucette" target="_blank" rel="noopener noreferrer">
        <img src={githubWhite} alt="white github icon" />
      </a>
    </nav>
  )
}