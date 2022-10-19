import React from 'react'
import styled from 'styled-components'

export const Summary = () => {
  return (
    <StyledSummary style={{ backgroundColor: '#F3EFE7' }}>
      <div className="summary__container">
        <p>
        Hello! I am a creative and experienced graphic designer with frontend developer skills.
        I’m all about problem solving and creating awesome, meaningful products for people to love.
        </p>
      </div>
    </StyledSummary>
  )
};

const StyledSummary = styled.div`
    width: 100%;
    height: 30vh;
    left: 0px;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

p {
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    padding: 25px 50px 80px 50px;
    max-width: 600px;
}
`;

