import React from 'react';
import styled from 'styled-components';

export const TitleBar = ({ name }) => {
  return (
    <StyledTitleBar>
      <h2>{name}</h2>
    </StyledTitleBar>

  )
}

const StyledTitleBar = styled.div`
  background-color: #779a96;
  text-align: center;
  text-transform: uppercase;
  margin-top: 20px
   

`