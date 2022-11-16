import React from 'react';
import styled, { css } from 'styled-components';

export const SoMeLinks = ({ image1, image2, alignment, red }) => {
  // Display social media links that open in a new tab:
  return (
    <NavBar alignment={alignment} red={red}>
      <a href="https://www.linkedin.com/in/tina-bruce-9b1a0813a/" target="_blank" rel="noopener noreferrer">
        <img src={image1} alt="linkedin icon" />
      </a>
      <a href="https://github.com/brucette" target="_blank" rel="noopener noreferrer">
        <img src={image2} alt="github icon" />
      </a>
    </NavBar>
  )
}

export const NavBar = styled.nav`
  align-self: ${(props) => props.alignment};
  margin-bottom: 1rem;

  // Styling for white social media links:
  img {
    width: 3.3rem;
    height: 3.3rem;
    padding: 0.3rem;
  }

  @media (min-width: 668px) {
    img {
      width: 5rem;
      height: 5rem;
      padding: 0.3rem;
    }
  }

  // Styling for red social media links:
  ${(props) => props.red && css`
    img {
      width: 5rem;
      height: 5rem;
      padding: 1rem;
    }

    @media (min-width: 668px) {
    img {
      width: 7rem;
      height: 7rem;
    }
  `
} 

  & :hover {
    transform: scale(1.1);
  }
`