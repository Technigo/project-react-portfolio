import React from 'react'
import styled from 'styled-components'

export const Summary = ({ summaryText }) => {
  summaryText = 'Hello! I am a creative and experienced graphic designer with frontend developer skills. I am all about problem solving and creating awesome, meaningful products for people to love.';

  return (
    <StyledSummaryBackground style={{ backgroundColor: '#F3EFE7' }}>
      <div>
        <StyledSummaryText>
          <div>{summaryText}</div>

        </StyledSummaryText>
      </div>
    </StyledSummaryBackground>

  )
};

const StyledSummaryBackground = styled.div`
color: black;

    width: 100%;
    height: 200px;
    left: 0px;
    top: 0px;
`;

const StyledSummaryText = styled.div`
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
    text-align: center;
    font-size: 15px;
    line-height: 25px;
    margin: 0 auto;
    padding: 25px 50px 80px 50px;
    max-width: 600px;
`;