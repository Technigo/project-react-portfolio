import React from 'react';
import styled from 'styled-components';

export const HeaderIntro = () => {
  return (
    <HeaderParagraph>
      <p>PORTFOLIO: <span>TINA BRUCE</span></p>
      <h1>frontend developer</h1>
      <h2>with pharmaceutical industry background</h2>
    </HeaderParagraph>
  )
}

const HeaderParagraph = styled.div`
  align-self: flex-start;
  font-family: 'Montserrat';
  font-weight: 700;
  display: block;

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 20rem;
  }

  h2 {
    font-size: 1.375rem;
    line-height: 1.6rem;
  }

  p {
    font-family: 'Roboto';
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.2rem;
    letter-spacing: 0.04rem;
  }

  span {
    font-weight: bold;
  }

  @media (min-width: 668px) {
    h1 {
    font-size: 4rem;
    line-height: 4rem;
  }

  h2 {
    font-size: 2.3rem;
    line-height: 4rem;
  }

  p {
    font-size: 1.6rem;
    line-height: 3rem;
  }
  }
`