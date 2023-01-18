import React from 'react';
import styled from 'styled-components';

const Title = () => {
  return (
    <HeaderParagraph>
      <p>PORTFOLIO: <span>THÉRÈSE ÅNMARK</span></p>
      <h1>frontend developer</h1>
      <h2>+ revenue management</h2>
    </HeaderParagraph>
  )
}
export default Title;

const HeaderParagraph = styled.div`
  align-self: flex-start;
  font-family: 'Montserrat';
  font-weight: 600;
  color: whitesmoke;
  display: block;
  margin-bottom: 1rem;

  h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    max-width: 20rem;
  }
  h2 {
    font-size: 1.5rem;
    line-height: 1.7rem;
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
    font-size: 3rem;
    line-height: 3rem;
  }
   h2 {
    font-size: 2.3rem;
    line-height: 3rem;
  }
   p {
    font-size: 1.6rem;
    line-height: 3rem;
  }
  }
`