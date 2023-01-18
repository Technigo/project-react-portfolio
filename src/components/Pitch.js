import React from 'react';
import styled from 'styled-components';

export const Pitch = () => {
  return (
    <StyledPitch>
      <h3>
          Hello! I’m a frontend developer and a people-oriented person with a background in tourism and recreation.
          I am a swift learner with ease in learning languages.
          
      </h3>
    </StyledPitch>

  )
}

const StyledPitch = styled.div`
  text-align: center;
  flex-direction: column;
  margin: 50px 50px 0px 0px;
  padding-top: 20px;  
  padding-left: 20px;

  @media screen and (min-width: 1024px) {
    margin: 50px 250px 0px 50px;
  }
`