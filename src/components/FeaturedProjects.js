import React from 'react'
import styled from 'styled-components'

export const FeaturedProjects = () => {
  return (
    <StyledSummary style={{ backgroundColor: '#F3EFE7' }}>
      <h2><span>Featured projects</span></h2>
    </StyledSummary>
  )
};

const StyledSummary = styled.div`
 

h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    font-size: 25px;
    color: white;
    margin-top: 80px; 
}

h2 span{
    background-color: #E8415E;
    padding: 2px 10px;
}
`;